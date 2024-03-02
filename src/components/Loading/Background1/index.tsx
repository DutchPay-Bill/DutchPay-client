import { Box, Typography } from '@mui/material'
import styles from './LoadingBackground1.module.scss'
import dutchpayLogo from '../../../assets/images/app-loading/logo-1.png'

export default function LoadingBackground1() {
  return (
    <Box className={styles.background}>
      <img className={styles.logo} src={dutchpayLogo} alt="Dutch Pay Logo" />
      <Box className={styles.textContainer}>
        <Typography className={styles.text1}>
          Dutch pay.
        </Typography>
        <Typography className={styles.text2}>
          share, split stress-free!
        </Typography>
      </Box>
    </Box>
  )
}