import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import styles from "./GoogleAuth.module.scss";
import logo from "../../assets/images/app-loading/logo-4.png";

export default function GoogleAuthFail() {
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
      navigate("/login");
    }
  }, [countdown, navigate]);

  return (
    <Box className={styles.pageNotFound}>
      <Box className={styles.textContainer}>
        <Typography variant="h2" className={styles.text}>
          Oops!
        </Typography>
        <img src={logo} alt="Dutch Pay Logo" className={styles.logo} />
        <Typography variant="h2" className={styles.text2}>
          Authentication Failed
        </Typography>
        <Typography variant="h2" className={styles.countdown}>
          Redirecting in {countdown} seconds...
        </Typography>
      </Box>
    </Box>
  );
}
