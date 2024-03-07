import { Box, TextField, Typography } from "@mui/material";
import styles from "../RegisterForm.module.scss";

export default function OTPForm() {
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
          id="otpCode"
          name="otpCode"
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
