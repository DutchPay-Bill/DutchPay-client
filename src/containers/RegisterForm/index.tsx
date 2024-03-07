/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { Box, Button, IconButton, SelectChangeEvent, Typography } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import PersonalInfoForm from "./PersonalInfoForm";
import PhoneNumberForm from "./PhoneNumberForm";
import OTPForm from "./OTPForm";
import styles from "./RegisterForm.module.scss";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../../config/firebaseAuth";

const steps = ["Personal Info", "Phone Number", "OTP Verification"];

export default function RegisterForm() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [ countryCode, setCountryCode ] = React.useState('+62');
  const [ phone , setPhone ] = React.useState("")
  const [ isLoading, setIsloading ] = React.useState(false)

  let confirmationResult: any;

  const sendOtp = async () => {
    try {
        const phoneNumber = countryCode + phone;
        console.log('phone', phoneNumber);
        const recaptcha = new RecaptchaVerifier(auth, "captcha", {
          'size': 'invisible',
          'callback': function(response : any) {
            console.log(response);
          },
        });
        confirmationResult = await signInWithPhoneNumber(auth, phoneNumber, recaptcha);
        console.log("OTP sent successfully");
    } catch (error) {
        console.error(error);
    }
  };

  const verifyOtp = async () => {
    try {
        const userCredential = await confirmationResult.confirm(otp);
        console.log("OTP verified successfully");
        console.log("User signed in successfully", userCredential.user);
    } catch (error) {
        console.error("OTP verification failed", error);
    }
  };

  const handleCountryCodeChange = (event: SelectChangeEvent) => {
    setCountryCode(event.target.value);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>)=> {
    const {name, value} = event.target
    if(name === "phoneNumber"){
      setPhone(value)
    }
  }

  const handleNext = () => {
    if(activeStep == 1){
      setIsloading(true)
      setTimeout(()=>{
        setActiveStep(activeStep + 1);
      }, 4000)
    }else {
      setActiveStep(activeStep + 1);
      setIsloading(false)
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  function getStepContent(step: number) {
    switch (step) {
      case 0:
        return <PersonalInfoForm />;
      case 1:
        return <PhoneNumberForm handleCountryCodeChange={handleCountryCodeChange} handleInputChange={handleInputChange} countryCode={countryCode} phone={phone} />;
      case 2:
        return <OTPForm />;
      default:
        throw new Error("Unknown step");
    }
  }

  return (
    <React.Fragment>
      <Box className={styles.registerMenu}>
        <Box className={styles.toolbar}>
          {activeStep === 0 && (
            <RouterLink to="/login">
              <ArrowBackIosNewIcon className={styles.backIcon} />
            </RouterLink>
          )}
          {activeStep !== 0 && (
            <IconButton
              onClick={handleBack}
              className={styles.arrowContainer}
              disableTouchRipple
              disableFocusRipple
              disableRipple
            >
              <ArrowBackIosNewIcon className={styles.backIcon} />
            </IconButton>
          )}
        </Box>
        {activeStep === steps.length ? (
          <React.Fragment>
            {/* ini belum di set marginnya*/}
            <Typography variant="h5" gutterBottom>
              you're now settled!
            </Typography>
            <Typography variant="h3" gutterBottom>
              Dinda Yasmin
            </Typography>
            <Typography variant="h5" gutterBottom>
              welcome to dutchpay!
            </Typography>
          </React.Fragment>
        ) : (
          <React.Fragment>
            {getStepContent(activeStep)}
            <Box className={styles.buttonContainer}>
              {activeStep !== 2 && (
                <Button
                  id="captcha"
                  disabled={isLoading}
                  className={styles.nextButton}
                  variant="contained"
                  onClick={activeStep === 1 ? ()=>{sendOtp(); handleNext();} : handleNext}
                >
                  {activeStep === 0 ? "Next" : "Send OTP"}
                </Button>
              )}
              {activeStep === 2 && (
                <Button
                  className={styles.verifyButton}
                  variant="contained"
                  onClick={handleNext}
                >
                  Verify OTP
                </Button>
              )}
            </Box>
          </React.Fragment>
        )}
      </Box>
    </React.Fragment>
  );
}
