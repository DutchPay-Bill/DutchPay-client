import { Box } from '@mui/material';
import React from 'react';
import Ewallet_Header from '../../components/Ewallet_Header';
import Ewallet_List from '../../components/Ewallet_List';
import styles from './Ewallet.module.scss';
import Grid from '@mui/material/Unstable_Grid2';

const Ewallet: React.FC = () => {
  const userType = {
    pictureUrl1: 'https://i.ibb.co/0rSCpc3/image-655.png',
    pictureUrl2: 'https://i.ibb.co/8BMxdy0/image-656.png',
    pictureUrl3: 'https://i.ibb.co/bWScrgB/Frame-519.png',
    pictureUrl4: 'https://i.ibb.co/W29F5fM/image-659.png',
    pictureUrl5: 'https://i.ibb.co/QmBPMq3/image-660.png'
  };

  return (
    <Box className={`myAccountPage ${styles.root}`}>
      <Grid xs={6} md={8}>
        <Box className={styles.header}>
          <Ewallet_Header />
        </Box>
      </Grid>
      <Box style={{ maxHeight: '100vh', overflowY: 'auto', scrollbarWidth: 'none' }}>
        <Grid xs={6} md={4}>
          <Box className={styles.package} style={{ marginTop: '2rem' }}>
            <Ewallet_List type={userType} />
          </Box>
        </Grid>
      </Box>
    </Box>
  );
};

export default Ewallet;