/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import Alert from "@mui/material/Alert";
import styles from "./Alert.module.scss";
import { Box } from "@mui/material";

interface AlertProps {
  severity: "error" | "warning" | "info" | "success";
  message: string;
  open: boolean;
  setOpen: (open: boolean) => void;
}

const CustomAlert: React.FC<AlertProps> = ({
  severity,
  message,
  open,
  setOpen,
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [open]);
  return open ? (
    <Box className={styles.alertContainer}>
      <Alert severity={severity} className={styles.alert}>
        {message}
      </Alert>
    </Box>
  ) : null;
};

export default CustomAlert;
