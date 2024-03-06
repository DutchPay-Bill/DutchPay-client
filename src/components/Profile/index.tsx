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
    <Box className={styles.profile}>
      {userProfile ? (
        <Grid container spacing={3}>
            <Grid item>
              <Avatar alt={userProfile.name} src={userProfile.pictureUrl} className={styles.profilePicture} />
            </Grid>
            <Grid item>
              <Box className={styles.profileInfo}>
                <Typography className={styles.profileName}>
                  {userProfile.name}
                </Typography>
                <Grid>
                    <Typography className={styles.profileEmail} >
                      {userProfile.email}
                    </Typography>
                </Grid>
              </Box>
              <Box className={styles.profilePhone}>
                <PhoneAndroidIcon />
                <Typography className={styles.profilePhone}>{userProfile.phone}</Typography>
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