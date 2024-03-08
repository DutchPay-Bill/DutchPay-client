import { Box, TextField, Typography } from "@mui/material";
import styles from "../RegisterForm.module.scss";
import { ChangeEvent } from "react";

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
  const isFullName = (str: string) => {
    const regex = /^[a-zA-Z]{3,}$/;
    return regex.test(str);
  };

  const isPasswordMatch = () => {
    return password === confirmPass;
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
          onChange={handleInputChange}
          placeholder="e.g, John Kuzcak"
          error={!isFullName(fullName)}
          helperText={
            !isFullName(fullName) ? "Enter your full name" : undefined
          }
          FormHelperTextProps={{
            className: isFullName(fullName)
              ? styles.helperText
              : `${styles.helperText} ${styles.helperText}`,
          }}
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
          onChange={handleInputChange}
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
        <Typography className={styles.inputLabel}>Confirm Password</Typography>
        <TextField
          className={styles.personalInfoInput}
          required
          id="confirmPass"
          name="confirmPass"
          type="password"
          value={confirmPass}
          onChange={handleInputChange}
          variant="filled"
          error={!isPasswordMatch()}
          helperText={!isPasswordMatch() ? "Passwords do not match" : undefined}
          FormHelperTextProps={{
            className: isPasswordMatch()
              ? styles.helperText
              : `${styles.helperText} ${styles.helperText}`,
          }}
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
