import {
  // Input,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import Box from '@mui/material/Box'
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
}

export default function PhoneNumberForm({
  countryCode,
  handleCountryCodeChange,
  phone,
  handleInputChange,
}: PhoneNumberFormProps) {
  const handlePhoneInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (/^\d*$/.test(value)) {
      handleInputChange(e);
    }
  };

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
            onChange={handlePhoneInputChange}
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
