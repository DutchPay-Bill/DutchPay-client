import { Box, Typography } from "@mui/material";
import dutchpayLogo from "../../assets/images/favicon.png";
import styles from "./Notch.module.scss";

export default function Notch() {
  return (
    <Box className={styles.notchContainer}>
      <img
        className={styles.notchLogo}
        src={dutchpayLogo}
        alt="Dutch Pay Logo"
      />
      <Typography className={styles.notchText} variant="h4">
        Dutch Pay.
      </Typography>
    </Box>
  );
}
