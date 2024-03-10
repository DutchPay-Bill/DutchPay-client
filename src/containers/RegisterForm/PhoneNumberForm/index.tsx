import {
  // Input,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import styles from "../RegisterForm.module.scss";
import { ChangeEvent } from "react";

const dummyCodes = [
  { value: "+62" },
  { value: "+1" },
  { value: "+44" },
  { value: "+81" },
];

interface PhoneNumberFormProps {
  countryCode: string;
  handleCountryCodeChange: (e: SelectChangeEvent) => void;
  phone: string;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  otp: string;
}

export default function PhoneNumberForm({
  countryCode,
  handleCountryCodeChange,
  phone,
  otp,
  handleInputChange,
}: PhoneNumberFormProps) {
  const handleNumberInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (/^\d*$/.test(value)) {
      handleInputChange(e);
    }
  };

  return (
    <>
      <Box className={styles.phoneNumberSection}>
        <Typography className={styles.headingBig}>
          Take the last step!
        </Typography>
        <Typography className={styles.headingSmall}>
          Add your phone number to link it with your account
        </Typography>
        <Typography className={styles.inputLabel}>Phone Number</Typography>
        <Box className={styles.inputContainer}>
          <Box className={styles.inputContainer2}>
            <Select
              defaultValue={"+62"}
              className={styles.phoneNumberSelect}
              value={countryCode}
              onChange={handleCountryCodeChange}
            >
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
              value={phone}
              onChange={handleNumberInputChange}
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
          <Typography className={styles.inputLabel}>OTP Code</Typography>
          <TextField
            className={styles.otpInput}
            required
            id="otp"
            name="otp"
            value={otp}
            onChange={handleNumberInputChange}
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
      </Box>
    </>
  );
}
