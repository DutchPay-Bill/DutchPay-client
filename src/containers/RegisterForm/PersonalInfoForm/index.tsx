import { TextField, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import styles from "../RegisterForm.module.scss";
import { ChangeEvent, useState } from "react";

interface PersonalInfoFormProps {
  fullName: string;
  password: string;
  confirmPass: string;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function PersonalInfoForm({
  fullName,
  password,
  confirmPass,
  handleInputChange,
}: PersonalInfoFormProps) {
  const [clicked, setClicked] = useState(false);

  const nameValidation = (fullName: string) => {
    const regex = /^[a-zA-Z]{3,}$/;
    if (clicked && !regex.test(fullName)) {
      return "Enter a valid name";
    }
    return undefined;
  };

  const passwordValidation = (password: string) => {
    const regex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;
    if (clicked && (password.length < 6 || !regex.test(password))) {
      return password.length < 6
        ? "Password must have a minimum length of 6 characters."
        : "Password must be alphanumeric.";
    }
    return undefined;
  };

  const confirmPassValidation = (confirmPass: string) => {
    if (clicked && confirmPass !== password) {
      return "Passwords do not match.";
    }
    return undefined;
  };

  const handleInputClicked = (e: ChangeEvent<HTMLInputElement>) => {
    handleInputChange(e);
    setClicked(true);
  };

  return (
    <>
      <Box className={styles.personalInfoSection}>
        <Typography className={styles.headingSmall}>Hi.. 👋</Typography>
        <Typography className={styles.headingBig}>Welcome to</Typography>
        <Typography className={styles.headingBig}>Dutch Pay.</Typography>
        <Typography className={styles.headingSmall}>
          Ready to jump in? Just a few quick steps to sign up or create an
          account!
        </Typography>
        <Typography className={styles.inputLabel}>Full name</Typography>
        <TextField
          className={styles.personalInfoInput}
          required
          id="fullName"
          name="fullName"
          value={fullName}
          onChange={handleInputClicked}
          placeholder="e.g, John Kuzcak"
          error={!!nameValidation(fullName)}
          helperText={nameValidation(fullName)}
          variant="filled"
          InputProps={{
            classes: {
              input: styles.personalInfoInput2,
            },
            disableUnderline: true,
          }}
          InputLabelProps={{
            shrink: true,
            className: styles.inputLabel2,
          }}
        />
        <Typography className={styles.inputLabel}>Password</Typography>
        <TextField
          className={styles.personalInfoInput}
          required
          id="password"
          name="password"
          type="password"
          value={password}
          onChange={handleInputClicked}
          variant="filled"
          error={!!passwordValidation(password)}
          helperText={passwordValidation(password)}
          InputProps={{
            classes: {
              input: styles.personalInfoInput2,
            },
            disableUnderline: true,
          }}
          InputLabelProps={{
            shrink: true,
            className: styles.inputLabel2,
          }}
        />
        <Typography className={styles.inputLabel}>Confirm Password</Typography>
        <TextField
          className={styles.personalInfoInput}
          required
          id="confirmPass"
          name="confirmPass"
          type="password"
          value={confirmPass}
          onChange={handleInputClicked}
          variant="filled"
          error={!!confirmPassValidation(confirmPass)}
          helperText={confirmPassValidation(confirmPass)}
          InputProps={{
            classes: {
              input: styles.personalInfoInput2,
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
