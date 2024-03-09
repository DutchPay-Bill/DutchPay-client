import { Box, Grid, Typography } from '@mui/material';
import styles from './SetUp.module.scss';
import WalletIcon from '@mui/icons-material/Wallet';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import LockIcon from '@mui/icons-material/Lock';
import LanguageIcon from '@mui/icons-material/Language';
import NotificationsIcon from '@mui/icons-material/Notifications';

const SetUp: React.FC = () => {
  return (
    <Box className={styles.root}>
      <Box className={styles.container}>
        <Box className={styles.header}>  
            <Typography className={styles.title}>Settings</Typography>
        </Box>
        <Box className={styles.content}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={2}>
                    <WalletIcon/>
                </Grid>
                <Grid item xs={1} maxWidth={120}>
                    <Typography className={styles.ewallet}>E-Wallet</Typography>
                    <Typography className={styles.ewallet2} >connect your instant payment gateway</Typography>
                     <Typography className={styles.ewallet2}> using various e-wallet services</Typography>
                </Grid>
            </Grid>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={2}>
                    <AccountBalanceIcon/>
                </Grid>
                <Grid item xs={1}>
                    <Typography className={styles.ewallet}>Bank Account</Typography>
                    <Typography className={styles.ewallet2}>payment gateway using manual transfer</Typography>
                    <Typography className={styles.ewallet2}>to your bank account</Typography>
                </Grid>
            </Grid>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={2}>
                    <LockIcon/>
                </Grid>
                <Grid item xs={1}>
                    <Typography className={styles.ewallet}>Account Security</Typography>
                    <Typography className={styles.ewallet2}>Password, and self verifications</Typography>
                </Grid>
            </Grid>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={2}>
                    <NotificationsIcon/>
                </Grid>
                <Grid item xs={1}>
                    <Typography className={styles.ewallet}>Notifications</Typography>
                    <Typography className={styles.ewallet2}>Set & manage your notificatoins pop up,</Typography>
                    <Typography className={styles.ewallet2}>messaages, etc.</Typography>
                </Grid>
            </Grid>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={2}>
                    <LanguageIcon/>
                </Grid>
                <Grid item xs={1}>
                    <Typography className={styles.ewallet}>Privacy</Typography>
                    <Typography className={styles.ewallet2}>Set your privacy & self information in</Typography>
                    <Typography className={styles.ewallet2}>DutchPay</Typography>
                </Grid>
            </Grid>
        </Box>
      </Box>  
    </Box>
  );
}

export default SetUp;