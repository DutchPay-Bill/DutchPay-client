  import React from 'react';
  import {  Header, 
            Profile, 
            MyPackage, 
            UserType, 
            SetUp, 
            LogOut 
         } 
  from '../../components';
  import { Box } from '@mui/material';
  import styles from './MyAccountMenu.module.scss'; 
  import Grid from '@mui/material/Unstable_Grid2';

  const MyAccountMenu: React.FC = () => {
    const userProfile = {
      name: 'Dinda Yasmin',
      email: '@dindayaasmin',
      pictureUrl: 'https://i.ibb.co/PhCwqdv/image-644.png',
      phone: '+62-812-3456-7890',
      EmailConnect: 'Not connected'
    };

    const userType = {
      pictureUrl1:'https://static.vecteezy.com/system/resources/previews/009/292/244/original/default-avatar-icon-of-social-media-user-vector.jpg',
      pictureUrl2:'https://i.ibb.co/MpbYvMQ/Frame-570.png'
    }

    return (
      <Box className={`myAccountPage ${styles.root}`}>
        <Grid xs={6} md={8}>
          <Box className={styles.header}>
            <Header/>
          </Box>
        </Grid>
        <Box style={{ maxHeight: '100vh', overflowY: 'auto', scrollbarWidth: 'none' }}>
            <Grid xs={6} md={4}>
              <Box className={styles.profile} style={{ marginTop: '6rem' }}>
                <Profile userProfile={userProfile} />
              </Box>
            </Grid>
            <Grid xs={6} md={4}>
              <Box className={styles.package} style={{ marginTop: '2rem' }}>
                <MyPackage />
              </Box>
            </Grid>
            <Grid xs={6} md={4}>
              <Box className={styles.package} style={{ marginTop: '2rem' }}>
                <UserType type={userType} />
              </Box>
            </Grid>
            <Grid xs={6} md={4}>
              <Box className={styles.package} style={{ marginTop: '2rem' }}>
                <SetUp/>
              </Box>
            </Grid>
            <Grid xs={6} md={4}>
              <Box className={styles.logout} style={{ marginTop: '2rem' }}>
                <LogOut/>
              </Box>
            </Grid>
        </Box>
      </Box>
    );
  };

  export default MyAccountMenu;