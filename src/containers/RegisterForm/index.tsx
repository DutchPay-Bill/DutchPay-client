import * as React from "react";
import { Box, Toolbar, Button, Typography } from "@mui/material";
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
      <Toolbar sx={{ pt: 10, position: "fixed" }}>
        <Button>
          <ArrowBackIosNewIcon />
        </Button>
      </Toolbar>
      <Box className={styles.loginMenu}>
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
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              {activeStep !== 0 && (
                <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                  Back
                </Button>
              )}
              <Button
                variant="contained"
                onClick={handleNext}
                sx={{ mt: 3, ml: 1 }}
              >
                {activeStep === steps.length - 1 ? "Place order" : "Next"}
              </Button>
            </Box>
          </React.Fragment>
        )}
      </Box>
    </React.Fragment>
  );
}
