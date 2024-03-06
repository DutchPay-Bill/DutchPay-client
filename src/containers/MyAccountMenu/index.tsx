import React from 'react';
import { Header, Profile } from '../../components';
import { Box } from '@mui/material';
import styles from './MyAccountMenu.module.scss'; 
import Grid from '@mui/material/Unstable_Grid2';

const MyAccountMenu: React.FC = () => {
  const userProfile = {
    name: 'Dinda Yasmin',
    email: '@dindayaasmin',
    pictureUrl: 'https://i.ibb.co/PhCwqdv/image-644.png',
    phone: '+62-812-3456-7890'
  };

  return (
    <Box className={`myAccountPage ${styles.root}`}>
      <Grid xs={6} md={8}>
        <Box className={styles.header}>
          <Header />
        </Box>
      </Grid>
      <Grid xs={6} md={4}>
        <Box className={styles.profile} style={{ marginTop: '2rem' }}>
          <Profile userProfile={userProfile} />
        </Box>
      </Grid>
    </Box>
  );
};

export default MyAccountMenu;