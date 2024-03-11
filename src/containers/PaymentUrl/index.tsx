import { IconButton, MenuItem, Select, Typography } from "@mui/material";
import Box from '@mui/material/Box'
import Notch from "../../components/Notch";
import styles from "./PaymentUrl.module.scss";
import DownloadIcon from "@mui/icons-material/Download";

const PaymentUrl = () => {
  return (
    <>
      <Notch />
      <Box className={styles.billContainer}>
        <Box className={styles.billHeader}>
          <Typography>Bill Detail(kecil)</Typography>
          <Box className={styles.billNameContainer}>
            <Box className={styles.billName}>
              <Typography>Bill Name(judul struk)</Typography>
              <Typography>Bill Creator(createdby blabla at blabla)</Typography>
            </Box>
            <IconButton>
              <DownloadIcon />
            </IconButton>
          </Box>
          <Box className={styles.billParticipantContainer}>
            <Typography>Hey!</Typography>
            <Select defaultValue={"ngetest"}>
              <MenuItem>ngetest</MenuItem>
            </Select>
            <Box className={styles.paymentStatus}>
              <Typography>paid</Typography>
            </Box>
          </Box>
          <Box className={styles.container}></Box>
        </Box>
      </Box>
    </>
  );
};

export default PaymentUrl;
