import { Box, Grid, Typography, Avatar } from '@mui/material';
import styles from './UserType.module.scss';

interface UserTypeProps {
  type: {
    pictureUrl1: string;
    pictureUrl2: string;
  };
}

const UserType: React.FC<UserTypeProps> = ({ type }) => {
  return (
    <Box className={styles.root}>
      <Grid container spacing={4}>
        <Grid item xs={4}>
          <Typography className={styles.type}>Type</Typography>
          <Grid item>
            <Grid className={styles.avatar1}>
                <Avatar sx={{ width: 50, height: 50 }} alt="User Avatar" src={type.pictureUrl1}  />
            </Grid>
            <Grid item>
                <Typography className={styles.freeuser}>Free User</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={4}>
            <Typography className={styles.bill}>Bill Entries</Typography>
            <Grid item className={styles.avatar2}>
                <Avatar sx={{ width: 50, height: 50 }} alt="User Avatar" src={type.pictureUrl2}/>
            </Grid>
            <Grid item>
                <Typography className={styles.billperday}>bill per day</Typography>
            </Grid>
        </Grid>
        <Grid item xs={4}>
          <Typography className={styles.fee}>Fee</Typography>
          <Grid item>
            <Typography className={styles.fee1}>Rp 0,-</Typography>
          </Grid>
          <Grid item>
            <Typography className={styles.fee2}>charged on</Typography>
          </Grid>
          <Typography className={styles.fee3}>13/12/2023</Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default UserType;