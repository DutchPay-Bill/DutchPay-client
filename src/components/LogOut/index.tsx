import React, { useContext } from 'react';
import { Typography } from '@mui/material';
import styles from './LogOut.module.scss';
import { PublicData } from '../../utils/globalState';

const LogOut: React.FC = () => {
  const { logout } = useContext(PublicData);

  const handleLogout = () => {
    logout();
    window.location.href = "/login";
  };

  return (
    <div className={styles.root} onClick={handleLogout}>
      <Typography variant="body1" className={styles.title}>
        Log out
      </Typography>
    </div>
  );
};

export default LogOut;
