import React, { useContext } from 'react';
import { Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import styles from './LogOut.module.scss';
import { PublicData } from '../../utils/globalState';

const LogOut: React.FC = () => {
  const { logout } = useContext(PublicData);
  return (
    <RouterLink onClick={logout} to="/login" className={styles.root}>
      <Typography variant="body1" className={styles.title}>
        Log out
      </Typography>
    </RouterLink>
  );
};

export default LogOut;