import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import styles from "./GoogleAuth.module.scss";

export default function GoogleAuthSuccess() {
  const [countdown, setCountdown] = useState(3);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCount) => prevCount - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (countdown === 0) {
      navigate("/dashboard");
    }
  }, [countdown, navigate]);

  return (
    <Box className={styles.pageNotFound}>
      <Typography variant="h2" className={styles.text}>
        Welcome!
      </Typography>
      <Typography variant="h2" className={styles.text2}>
        Authentication Successful
      </Typography>
      <Typography variant="h2" className={styles.countdown}>
        Redirecting in {countdown} seconds...
      </Typography>
    </Box>
  );
}
