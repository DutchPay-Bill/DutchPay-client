import { Box, TextField, Typography } from "@mui/material";
import styles from "../RegisterForm.module.scss";
import { ChangeEvent } from "react";

interface OTPFormProps {
  otp: string;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function OTPForm({ otp, handleInputChange }: OTPFormProps) {
  const handleOtpInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (/^\d*$/.test(value)) {
      handleInputChange(e);
    }
  };

  return (
    <>
      <Box className={styles.otpSection}>
        <Typography className={styles.headingBig}>OTP Code Sent!</Typography>
        <Typography className={styles.headingSmall}>
          Please input the OTP code we've sent to verify your phone number
        </Typography>
        <Typography className={styles.inputLabel}>OTP Code</Typography>
        <TextField
          className={styles.otpInput}
          required
          id="otp"
          name="otp"
          value={otp}
          onChange={handleOtpInputChange}
          variant="filled"
          InputProps={{
            classes: {
              input: styles.otpInput2,
            },
            disableUnderline: true,
          }}
          InputLabelProps={{
            shrink: true,
            className: styles.inputLabel2,
          }}
        />
      </Box>
    </>
  );
}
