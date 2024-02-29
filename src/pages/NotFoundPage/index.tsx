import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import styles from './NotFoundPage.module.scss';

export default function NotFoundPage() {
  const [countdown, setCountdown] = useState(9);
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCount) => prevCount - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (countdown === 0) {
      navigate('');
    }
  }, [countdown, navigate]);

  return (
    <Box className={styles.pageNotFound}>
      <Typography variant='h2' className={styles.text}>
        Oops!.
      </Typography>
      <Typography variant='h2' className={styles.text2}>
        404 Page not found.
      </Typography>
      <Typography variant='h2' className={styles.countdown}>
        Redirecting in {countdown} seconds...
      </Typography>
    </Box>
  );
}
