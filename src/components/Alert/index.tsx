import { useEffect, useState } from "react";
import Alert from "@mui/material/Alert";
import styles from "./Alert.module.scss";

interface AlertProps {
  severity: "error" | "warning" | "info" | "success";
  message: string;
  autoCloseDuration?: number;
}

const CustomAlert: React.FC<AlertProps> = ({
  severity,
  message,
  autoCloseDuration = 3000,
}) => {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(false);
    }, autoCloseDuration);

    return () => {
      clearTimeout(timer);
    };
  }, [autoCloseDuration]);
  return open ? (
    <Alert severity={severity} className={styles.alert}>
      {message}
    </Alert>
  ) : null;
};

export default CustomAlert;
