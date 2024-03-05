import { Box, TextField, Typography } from "@mui/material";
import styles from "../RegisterForm.module.scss";

export default function PersonalInfoForm() {
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
          placeholder="e.g, John Kuzcak"
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
        <Typography className={styles.inputLabel}>Username</Typography>
        <TextField
          className={styles.personalInfoInput}
          required
          id="username"
          name="username"
          placeholder="e.g, Johnkuz"
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
      </Box>
    </>
  );
}
