/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import {
  Button,
  IconButton,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import Box from '@mui/material/Box'
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import PersonalInfoForm from "./PersonalInfoForm";
import PhoneNumberForm from "./PhoneNumberForm";
import OTPForm from "./OTPForm";
import styles from "./RegisterForm.module.scss";
import {
  // ConfirmationResult,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import { auth } from "../../config/firebaseAuth";
// import { set } from "firebase/database";

const steps = ["Personal Info", "Phone Number", "OTP Verification"];

export default function RegisterForm() {
  const [activeStep, setActiveStep] = React.useState(0); //testing atau develop step otp verif
  const [fullName, setFullName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPass, setConfirmPass] = React.useState("");
  const [countryCode, setCountryCode] = React.useState("+62");
  const [phone, setPhone] = React.useState("");
  const [otp, setOtp] = React.useState("");
  const [isLoading, setIsloading] = React.useState(false);
  const [errors, setErrors] = React.useState({
    fullName: "",
    password: "",
    confirmPass: "",
    phone: "",
    otp: "",
  });

  let confirmationResult: any;
  const navigate = useNavigate();

  const validateField = (name: string, value: string) => {
    let valid = true;
    const newErrors = { ...errors, [name]: "" };
    switch (name) {
      case "fullName":
        // eslint-disable-next-line no-case-declarations
        const fullNameRegex = /^[a-zA-Z\s]*$/;
        if (value.length < 3 || !fullNameRegex.test(value)) {
          newErrors.fullName =
            "Full name must contain only alphabets and have a minimum length of 3 characters.";
          valid = false;
        }
        break;
      case "password":
        if (value.length < 6) {
          newErrors.password =
            "Password must have a minimum length of 6 characters.";
          valid = false;
        }
        break;
      case "confirmPass":
        if (value !== password) {
          newErrors.confirmPass = "Password do not match.";
          valid = false;
        }
        break;
      case "phone":
        // eslint-disable-next-line no-case-declarations
        const phoneRegex = /^[0-9]{9,}$/;
        if (!phoneRegex.test(value)) {
          newErrors.phone =
            "Phone Number must contain only numbers and have a minimum length of 9";
        }
        break;
      case "otp":
        // eslint-disable-next-line no-case-declarations
        const otpRegex = /^[0-9]{4,}$/;
        if (!otpRegex.test(value)) {
          newErrors.otp =
            "OTP Code must contain only numbers and have a minimum length of 4";
        }
        break;
      default:
        break;
    }
    setErrors(newErrors);
    return valid;
  };

  const sendOtp = async () => {
    try {
      const phoneNumber = countryCode + phone;
      console.log("phone", phoneNumber);
      const recaptcha = new RecaptchaVerifier(auth, "captcha", {
        size: "invisible",
        callback: function (response: any) {
          console.log(response);
        },
      });
      confirmationResult = await signInWithPhoneNumber(
        auth,
        phoneNumber,
        recaptcha
      );
      console.log("OTP sent successfully");
    } catch (error) {
      console.error(error);
    }
  };

  const verifyOtp = async () => {
    try {
      const userCredential = await confirmationResult?.confirm(otp);
      console.log("OTP verified successfully");
      console.log("User signed in successfully", userCredential);
      if (userCredential) {
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("OTP verification failed", error);
    }
  };

  const handleCountryCodeChange = (event: SelectChangeEvent) => {
    setCountryCode(event.target.value);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    switch (name) {
      case "phoneNumber":
        setPhone(value);
        break;
      case "fullName":
        setFullName(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "confirmPass":
        setConfirmPass(value);
        break;
      case "otp":
        setOtp(value);
        break;
      default:
        break;
    }
    validateField(name, value);
  };

  const handleNext = () => {
    if (activeStep == 1) {
      setIsloading(true);
      setTimeout(() => {
        setActiveStep(activeStep + 1);
      }, 4000);
    } else {
      setActiveStep(activeStep + 1);
      setIsloading(false);
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  function getStepContent(step: number) {
    switch (step) {
      case 0:
        return (
          <PersonalInfoForm
            handleInputChange={handleInputChange}
            fullName={fullName}
            password={password}
            confirmPass={confirmPass}
          />
        );
      case 1:
        return (
          <PhoneNumberForm
            handleCountryCodeChange={handleCountryCodeChange}
            handleInputChange={handleInputChange}
            countryCode={countryCode}
            phone={phone}
          />
        );
      case 2:
        return <OTPForm otp={otp} handleInputChange={handleInputChange} />;
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
              {activeStep === 0 && (
                <Button
                  disabled={
                    Boolean(errors.fullName) ||
                    Boolean(errors.password) ||
                    Boolean(errors.confirmPass) ||
                    !fullName ||
                    !password ||
                    !confirmPass
                  }
                  type="submit"
                  className={styles.nextButton}
                  variant="contained"
                  onClick={handleNext}
                >
                  Next
                </Button>
              )}
              {activeStep === 1 && (
                <Button
                  id="captcha"
                  disabled={isLoading || !phone || Boolean(errors.phone)}
                  type="submit"
                  className={styles.nextButton}
                  variant="contained"
                  onClick={() => {
                    sendOtp();
                    handleNext();
                  }}
                >
                  Send OTP
                </Button>
              )}
              {activeStep === 2 && (
                <Button
                  className={styles.verifyButton}
                  variant="contained"
                  onClick={verifyOtp}
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
