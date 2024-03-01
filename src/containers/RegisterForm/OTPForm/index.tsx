import { Typography, TextField } from "@mui/material";

export default function OTPForm() {
  return (
    <>
      <Typography variant="h6" gutterBottom>
        OTP Code
      </Typography>
      <TextField
        required
        id="otpCode"
        label="OTP Code"
        fullWidth
        variant="outlined"
      />
    </>
  );
}
