import React from 'react';
import styles from './Profile.module.scss';
import { Avatar, Typography, Box, Grid } from '@mui/material';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { Link as RouterLink } from 'react-router-dom';

interface UserProfile {
  name: string;
  email: string;
  pictureUrl: string;
  phone: string;
}

interface ProfileProps {
  userProfile: UserProfile | null;
}

const Profile: React.FC<ProfileProps> = ({ userProfile }) => {
  return (
    <Box>
      {userProfile ? (
        <Grid container spacing={1}>
            <Grid item>
              <Avatar sx={{ width: 56, height: 56 }} alt={userProfile.name} src={userProfile.pictureUrl} className={styles.profilePicture} />
            </Grid>
            <Grid item>
              <Box className={styles.profileInfo}>
                <Typography className={styles.profileName} color={'white'}>
                  {userProfile.name}
                </Typography>
                <Grid>
                    <Typography className={styles.profileEmail} color={'white'} >
                      {userProfile.email}
                    </Typography>
                </Grid>
              </Box>
              <Box className={styles.profilePhone}>
                <PhoneAndroidIcon/>
                <Typography color={'white'} className={styles.profilePhone}>{userProfile.phone} </Typography>
              </Box>
              </Grid>
            <Grid item xs>
              <RouterLink to="#" className={styles.editButton}><BorderColorIcon/></RouterLink>
            </Grid>
        </Grid>
      ) : (
        <Typography>Loading...</Typography>
      )}
    </Box>
  );
};

export default Profile;