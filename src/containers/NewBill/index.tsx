import AddBill from "./AddBill";
import AddParticipant from "./AddParticipant";
import InputBills from "./InputBills";
import PaymentMethod from "./PaymentMethod";
import Finalize from "./Finalize";
import React from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Link as RouterLink } from "react-router-dom";
import { Box, Button, IconButton } from "@mui/material";
import styles from "./NewBill.module.scss";

const steps = [
  "Add Bill",
  "Add Participant",
  "Input Bills",
  "Payment Method",
  "Finalize",
];

function getStepContent(step: number) {
  switch (step) {
    case 0:
      return <AddBill />;
    case 1:
      return <AddParticipant />;
    case 2:
      return <InputBills />;
    case 3:
      return <PaymentMethod />;
    case 4:
      return <Finalize />;
    default:
      throw new Error("Unknown step");
  }
}

export default function NewBill() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <React.Fragment>
      <Box className={styles.newBillMenu}>
        <Box className={styles.toolbar}>
          {activeStep === 0 && (
            <RouterLink to="/dashboard">
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
        <React.Fragment>
          {getStepContent(activeStep)}
          <Box className={styles.buttonContainer}>
            <Button
              type="submit"
              className={styles.nextButton}
              variant="contained"
              onClick={handleNext}
            >
              Next
            </Button>
          </Box>
        </React.Fragment>
      </Box>
    </React.Fragment>
  );
}
