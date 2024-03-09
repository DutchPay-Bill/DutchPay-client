import React from 'react';
import styles from './Profile.module.scss';
import { Avatar, Typography, Box, Grid } from '@mui/material';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import EmailIcon from '@mui/icons-material/Email';
import { Link as RouterLink } from 'react-router-dom';

interface UserProfile {
  name: string;
  email: string;
  pictureUrl: string;
  phone: string;
  EmailConnect: string;
}

interface ProfileProps {
  userProfile: UserProfile | null;
}

const Profile: React.FC<ProfileProps> = ({ userProfile }) => {
  return (
    <Box className={styles.root}>
      {userProfile ? (
        <Grid container spacing={1}>
            <Grid item>
              <Avatar sx={{ width: 75, height: 75 }} alt={userProfile.name} src={userProfile.pictureUrl} className={styles.profilePicture} />
            </Grid>
            <Grid item>
                <Box className={styles.profileInfo}>
                  <Typography className={styles.profileName} color={'white'}>
                    {userProfile.name}
                  </Typography>
                  <Grid >
                      <Typography className={styles.profileEmail} color={'white'} >
                        {userProfile.email}
                      </Typography>
                  </Grid>
                </Box>
                <Grid container alignItems="center" spacing={1}>
                      <Grid item><PhoneAndroidIcon className={styles.profileIconPhone} /></Grid>
                      <Grid item>
                        <Typography className={styles.profilePhone} color={'white'}>{userProfile.phone}</Typography>
                      </Grid>
                  </Grid>
                <Grid container alignItems="center" spacing={1}>
                      <Grid item><EmailIcon className={styles.profileIconPhone} /></Grid>
                      <Grid item>
                        <Typography color={'white'} className={styles.profileEmailConnect}>{userProfile.EmailConnect}</Typography>
                      </Grid>
                 </Grid>
            </Grid>
            <Grid item xs>
              <RouterLink to="/change-profile" className={styles.editButton}><BorderColorIcon/></RouterLink>
            </Grid>
        </Grid>
      ) : (
        <Typography>Loading...</Typography>
      )}
    </Box>
  );
};

export default Profile;