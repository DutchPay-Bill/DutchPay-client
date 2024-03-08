import { Avatar, Box, Grid, Typography } from '@mui/material'
import styles from './Dashboard.module.scss'
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import dummyAvatar from '../../assets/images/dummyavatar.jpg'

export default function Dashboard() {
  return (
    <>
      <Box className={styles.dashboardMenu}>
        <Box className={styles.profileContainer}>
          <Grid container spacing={0} className={styles.notificationGrid}>
            <Grid item xs={6}>
              <NotificationsIcon className={styles.icons} />
            </Grid>
            <Grid item xs={6} className={styles.gridItem}>
              <Box className={styles.notificationBox}>
                <Typography className={styles.notificationNumber}>1</Typography>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <SettingsIcon className={styles.icons} />
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
              <Avatar
                className={styles.avatar}
                src={dummyAvatar}
                alt="avatar"
              />
              {/* Status color */}
              <Box className={styles.status}>
                <Box className={styles.status2}>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>

        <Typography>

        </Typography>

        <Box>
          <Typography>

          </Typography>
        </Box>
      </Box>
    </>
  )
}