import { Avatar, Box, Grid, Typography } from '@mui/material';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import dummyAvatar from '../../assets/images/dummyavatar.jpg';
import styles from './RecentBill.module.scss';

export default function RecentBill() {
  return (
    <>
      <Box className={styles.recentBill}>
        <Typography className={styles.title}>
          Recent Bill
        </Typography>
        <Box className={styles.billDetails}>
          <Box className={styles.billInfo}>
            <Typography className={styles.billName}>
              Hangout Resto Jakarta
            </Typography>
            <Typography className={styles.viewDetails}>
              View Details
            </Typography>
          </Box>
          <Box className={styles.receivables}>
            <Box className={styles.receivablesInfo}>
              <Typography className={styles.receivablesTitle}>
                My Receivables
              </Typography>
              <Box className={styles.boxAmounts}>
                <Typography className={styles.receivablesAmount1}>
                  Rp 320.000,-
                </Typography>
                <Typography className={styles.receivablesText}>
                  out of
                </Typography>
                <Typography className={styles.receivablesAmount2}>
                  Rp 480.000,-
                </Typography>
              </Box>
            </Box>
            <Box className={styles.pendingInfo}>
              <Typography className={styles.pendingTitle}>
                Pending Participant
              </Typography>
              <Typography className={styles.pendingCount}>
                4/6
              </Typography>
              <Typography className={styles.copyBillUrl}>
                Copy Bill URL
                <Box className={styles.backgroundIcon}>
                  <InsertLinkIcon className={styles.icon} />
                </Box>
              </Typography>
            </Box>
          </Box>
          <Box className={styles.userDetails}>
            <Grid container spacing={0.2} className={styles.boxUser}>
              {dummyUserData.map((user) => (
                <Grid item key={user.id}>
                  <Avatar
                    className={styles.user}
                    src={user.avatarSrc}
                    alt={`avatar-${user.alt}`}
                  />
                </Grid>
              ))}
            </Grid>
            <Typography className={styles.date}>
              21-12-2023
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}

const dummyUserData = [
  { id: 1, avatarSrc: dummyAvatar, alt: 'avatar' },
  { id: 2, avatarSrc: dummyAvatar, alt: 'avatar' },
  { id: 3, avatarSrc: dummyAvatar, alt: 'avatar' },
  { id: 4, avatarSrc: dummyAvatar, alt: 'avatar' },
  { id: 5, avatarSrc: dummyAvatar, alt: 'avatar' },
  { id: 6, avatarSrc: dummyAvatar, alt: 'avatar' },
];