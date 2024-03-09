import { Typography } from '@mui/material'
import Box from '@mui/material/Box'
import styles from './LoadingBackground4.module.scss'
import dutchpayLogo from '../../../assets/images/app-loading/logo-4.png'

export default function LoadingBackground4() {
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