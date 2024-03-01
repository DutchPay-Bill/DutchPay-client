import { Link as RouterLink } from 'react-router-dom';
import { Box, Button, Divider, MenuItem, Select, TextField, Typography } from "@mui/material";
import styles from './LoginMenu.module.scss';
import { ButtonLogin } from "../../components";
import logo from '../../assets/images/app-loading/logo-4.png';
import googleLogo from '../../assets/images/google.svg';
import appleLogo from '../../assets/images/apple.svg';

export function LoginMenu() {
  return (
    <Box className={styles.loginMenu}>
      <img className={styles.logo} src={logo} alt="Dutch Pay Logo" />

      <Box className={styles.phoneNumberSection}>
        <Select defaultValue="+62" className={styles.phoneNumberSelect}>
          <MenuItem value="+62">+62</MenuItem>
          <MenuItem value="+23">+23</MenuItem>
        </Select>
        <TextField className={styles.phoneNumberInput} />
      </Box>
      <ButtonLogin buttonText="Login" />

      <Divider className={styles.divider}> or </Divider>

      <Box className={styles.socialLoginSection}>
        <Button className={styles.socialLoginButton}>
          <img className={styles.icon} src={googleLogo} alt="Google Logo" /> Login with Gmail
        </Button>
        <Button className={styles.socialLoginButton}>
          <img className={styles.icon} src={appleLogo} alt="Apple Logo" /> Login with Apple
        </Button>
      </Box>

      <Typography className={styles.text}>
        Not registered yet? <RouterLink to="/register" className={styles.signInLink}>Sign in</RouterLink>
      </Typography>
    </Box>
  );
}
