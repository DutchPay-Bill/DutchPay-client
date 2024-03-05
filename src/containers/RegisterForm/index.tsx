import * as React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Box, Button, IconButton, Typography } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import PersonalInfoForm from "./PersonalInfoForm";
import PhoneNumberForm from "./PhoneNumberForm";
import OTPForm from "./OTPForm";
import styles from "./RegisterForm.module.scss";

const steps = ["Personal Info", "Phone Number", "OTP Verification"];

function getStepContent(step: number) {
  switch (step) {
    case 0:
      return <PersonalInfoForm />;
    case 1:
      return <PhoneNumberForm />;
    case 2:
      return <OTPForm />;
    default:
      throw new Error("Unknown step");
  }
}

export default function RegisterForm() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

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
                  className={styles.nextButton}
                  variant="contained"
                  onClick={handleNext}
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
