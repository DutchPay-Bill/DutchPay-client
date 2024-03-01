import { Typography, TextField } from "@mui/material";

export default function PersonalInfoForm() {
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Personal Info
      </Typography>
      <TextField
        required
        id="fullName"
        name="fullName"
        label="Full name"
        fullWidth
        autoComplete="given-name"
        variant="outlined"
      />
      <TextField
        required
        id="username"
        name="username"
        label="Username"
        fullWidth
        variant="outlined"
      />
    </>
  );
}
