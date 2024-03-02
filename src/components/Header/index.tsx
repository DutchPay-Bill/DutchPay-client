import React from 'react';
import { Box, Typography } from '@material-ui/core'; 
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import styles from './header.module.scss';

const Header: React.FC = () => {
  return (
    <Box component="header" className={styles.root}> 
      <Box component="nav" className={styles.toolbar}> 
        <ArrowBackIosIcon  /> 
        <Typography variant="h6" className={styles.title}>
          My Account
        </Typography>
      </Box>
    </Box>
  );
};

export default Header;
