import React from 'react';
import { Header, Profile } from '../../components';
import { Box } from '@mui/material';
import styles from './MyAccountMenu.module.scss'; 


const MyAccountMenu: React.FC = () => {

  const userProfile = {
    name: 'Dinda Yasmin',
    email: '@dindayaasmin',
    pictureUrl: 'https://example.com/profile.jpg',
    phone: '+62-812-3456-7890'
  };

  return (
    <Box className={`myAccountPage ${styles.root}`}>
      <Header />
      <Box className={styles.profile}>
        <Profile userProfile={userProfile} />
      </Box>
    </Box>
  );
};

export default MyAccountMenu;
