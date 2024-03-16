/* eslint-disable react-hooks/exhaustive-deps */
import { Avatar, Grid, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import styles from './Dashboard.module.scss'
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import dummyAvatar from '../../assets/images/dummyavatar.jpg'
import { Link } from 'react-router-dom';
import { RecentBill, BillHistory } from '../../components';
import useAuthChecker from '../../utils/authChecker';
import { PublicData } from '../../utils/globalState';
import { useContext } from 'react';
import CustomAlert from '../../components/Alert';

export default function DashboardProfile() {
  const { open, setOpen } = useContext(PublicData);
  useAuthChecker(2000)
  return (
    <>
      <Box className={styles.dashboardMenu}>
        <CustomAlert severity={'error'} message={'Unauthorized, Redirecting to login page...'} open={open} setOpen={setOpen} />
        <Box className={styles.profileContainer}>
          <Grid container spacing={0} className={styles.notificationGrid}>
            <Grid item xs={6}>
              <NotificationsIcon className={styles.notificationIcon} />
            </Grid>
            <Grid item xs={6} className={styles.gridItem}>
              <Box className={styles.notificationBox}>
                <Typography className={styles.notificationNumber}>1</Typography>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Link to='/my-account'>
                <SettingsIcon className={styles.settingIcon} />
              </Link>
            </Grid>
            <Grid item xs={6}>
              <Typography className={styles.notificationText}>
                bill entries left
              </Typography>
            </Grid>
          </Grid>
          <Box className={styles.profileBox}>
            <Box className={styles.userInfoBox}>
              <Typography className={styles.greetingText}>Hello,</Typography>
              <Typography className={styles.userName}>Dinda Yasmin</Typography>
              <Typography className={styles.userHandle}>@dindayasmin</Typography>
            </Box>
            <Box>
              <Link to="/my-account">
                <Avatar
                  className={styles.avatar}
                  src={dummyAvatar}
                  alt="avatar"
                />
              </Link>
              {/* Status color */}
              <Box className={styles.status}>
                <Box className={styles.status2}>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <RecentBill />
        <BillHistory />
      </Box>
    </>
  )
}