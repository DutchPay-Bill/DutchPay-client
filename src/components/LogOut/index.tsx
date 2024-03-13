import React from 'react';
import { Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import styles from './LogOut.module.scss';

const LogOut: React.FC = () => {
  return (
    <RouterLink to="/login" className={styles.root}>
      <Typography variant="body1" className={styles.title}>
        Log out
      </Typography>
    </RouterLink>
  );
};

export default LogOut;