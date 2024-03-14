import { Box, Grid, Typography, Avatar } from '@mui/material';
import styles from './Ewallet_List.module.scss';
import { Link as RouterLink } from 'react-router-dom';

interface EwalletListProps {
    type: {
      pictureUrl1: string;
      pictureUrl2: string;
      pictureUrl3: string;
      pictureUrl4: string;
      pictureUrl5: string;
    };
  }

  const Ewallet_List: React.FC<EwalletListProps> = ({ type }) => {
  return (
    <Box className={styles.root}>
      <Box className={styles.container}>
        <Box className={styles.header}>  
            <Typography className={styles.title}>E Wallet List</Typography>
        </Box>
        <Box className={styles.header}>  
            <Typography className={styles.title2}>connect your instant payment gateway using various e-wallet services</Typography>
        </Box>
        <Box className={styles.content}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={2}>
                    <RouterLink to="#">
                    <Avatar className={styles.walletlink} sx={{ width: 30, height: 30 }} alt="User Avatar" src={type.pictureUrl1} />
                    </RouterLink>
                </Grid>
                <Grid item xs={1} maxWidth={120}>
                  <RouterLink to="#" className={styles.link}>
                    <Typography className={styles.ewallet}>GOPAY</Typography>
                    <Typography className={styles.ewallet2} >+6281242050172 (Dinda Yasmin)</Typography>
                  </RouterLink>
                </Grid>
            </Grid>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={2}>
                    <RouterLink to="#" >
                    <Avatar className={styles.walletlink} sx={{ width: 30, height: 30 }} alt="User Avatar" src={type.pictureUrl2} />
                    </RouterLink>
                </Grid>
                <Grid item xs={1}>
                  <RouterLink to="#" className={styles.link}>
                    <Typography className={styles.ewallet}>OVO</Typography>
                    <Typography className={styles.ewallet2}>+6281242050172 (Dinda Yasmin)</Typography>
                  </RouterLink>
                </Grid>
            </Grid>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={2}>
                    <RouterLink to="#" className={styles.walletlink}>
                    <Avatar className={styles.walletlink} sx={{ width: 30, height: 30 }} alt="User Avatar" src={type.pictureUrl3} />
                    </RouterLink>
                </Grid>
                <Grid item xs={1}>
                  <RouterLink to="#" className={styles.link}>
                    <Typography className={styles.ewallet}>Shopeepay/ Spay Later</Typography>
                    <Typography className={styles.ewallet2}>+6281242050172 (Dinda Yasmin)</Typography>
                  </RouterLink>
                </Grid>
            </Grid>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={2}>
                    <RouterLink to="#" className={styles.walletlink}>
                    <Avatar className={styles.walletlink} sx={{ width: 30, height: 30 }} alt="User Avatar" src={type.pictureUrl4} />
                    </RouterLink>
                </Grid>
                <Grid item xs={1}>
                  <RouterLink to="#" className={styles.link}>
                    <Typography className={styles.ewallet}>DANA</Typography>
                    <Typography className={styles.ewallet2}>+6281242050172 (Dinda Yasmin)</Typography>
                  </RouterLink>
                </Grid>
            </Grid>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

                <Grid item xs={2}>
                    <RouterLink to="#" className={styles.walletlink}>
                    <Avatar className={styles.walletlink} sx={{ width: 30, height: 30 }} alt="User Avatar" src={type.pictureUrl5} />
                    </RouterLink>
                </Grid>
                <Grid item xs={1}>
                  <RouterLink to="#" className={styles.link}>
                    <Typography className={styles.ewallet}>Link Aja</Typography>
                    <Typography className={styles.ewallet2}>Not Activated</Typography>
                  </RouterLink>
                </Grid>
            </Grid>
        </Box>
      </Box>  
    </Box>
  );
}

export default Ewallet_List;