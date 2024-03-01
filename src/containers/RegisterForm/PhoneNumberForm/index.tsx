import { Typography, TextField } from "@mui/material";

export default function PhoneNumberForm() {
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Phone Number
      </Typography>
      <TextField
        required
        id="phoneNumber"
        label="Phone Number"
        fullWidth
        autoComplete="tel"
        variant="outlined"
      />
    </>
  );
}
