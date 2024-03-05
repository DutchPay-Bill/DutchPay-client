import {
  Box,
  // Input,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import styles from "../RegisterForm.module.scss";

export default function PhoneNumberForm() {
  const dummyCodes = [
    { value: "+62" },
    { value: "+1" },
    { value: "+44" },
    { value: "+81" },
  ];

  return (
    <>
      <Box className={styles.phoneNumberSection}>
        <Typography className={styles.headingBig}>
          Take the next step!
        </Typography>
        <Typography className={styles.headingSmall}>
          Add your phone number to link it with your account
        </Typography>
        <Typography className={styles.inputLabel}>Phone Number</Typography>
        <Box className={styles.inputContainer}>
          <Select defaultValue={"+62"} className={styles.phoneNumberSelect}>
            {dummyCodes.map((country) => (
              <MenuItem key={country.value} value={country.value}>
                {country.value}
              </MenuItem>
            ))}
          </Select>
          <TextField
            className={styles.phoneInput}
            required
            id="phoneNumber"
            name="phoneNumber"
            placeholder="xxx-xxxx-xxxx"
            variant="filled"
            InputProps={{
              classes: {
                input: styles.phoneInput2,
              },
              disableUnderline: true,
            }}
            InputLabelProps={{
              shrink: true,
              className: styles.inputLabel2,
            }}
          />
        </Box>
      </Box>
    </>
  );
}
