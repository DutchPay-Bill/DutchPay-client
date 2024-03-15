import React from 'react';
import { Box, Typography } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import styles from './Ewallet_Header.module.scss';
import { Link as RouterLink } from 'react-router-dom';

const Ewallet_Header: React.FC = () => {
  return (
    <Box component="header" className={styles.root}> 
      <Box component="nav" className={styles.toolbar}> 
        <RouterLink to="/myaccount" className={styles.backbutton}><ArrowBackIosIcon/> </RouterLink>
      </Box>
      <Typography variant="h6" fontWeight='bolder' className={styles.title} color='white'>
          E Wallet
      </Typography>
    </Box>
  );
};

export default Ewallet_Header;


