import { Link as RouterLink } from 'react-router-dom';
import { Box, Button, Divider, Input, MenuItem, Select, Typography } from "@mui/material";
import styles from './LoginMenu.module.scss';
import { ButtonLogin } from "../../components";
import logo from '../../assets/images/app-loading/logo-4.png';
import googleLogo from '../../assets/images/google.svg';
import appleLogo from '../../assets/images/apple.svg';

export default function LoginMenu() {
  const dummyCodes = [
    { value: '+62' },
    { value: '+1' },
    { value: '+44' },
    { value: '+81' },
  ];
  return (
    <Box className={styles.loginMenu}>
      <img className={styles.logo} src={logo} alt="Dutch Pay Logo" />

      <Box className={styles.phoneNumberSection}>
        <Select defaultValue={'+62'} className={styles.phoneNumberSelect}>
          {dummyCodes.map((country) => (
            <MenuItem key={country.value} value={country.value}>
              {country.value}
            </MenuItem>
          ))}
        </Select>

        <Input
          className={styles.phoneNumberInput}
          defaultValue="8121605XXXX"
        />
      </Box>
      <ButtonLogin buttonText="Log in" />

      <Divider className={styles.divider}>or</Divider>

      <Box className={styles.socialLoginSection}>
        <Button className={styles.socialLoginButton}>
          <img className={styles.icon} src={googleLogo} alt="Google Logo" /> Login with Gmail
        </Button>
        <Button className={styles.socialLoginButton}>
          <img className={styles.icon} src={appleLogo} alt="Apple Logo" /> Login with Apple
        </Button>
      </Box>

      <Typography className={styles.text}>
        Not registered yet? <RouterLink to="/register" className={styles.signInLink}>Sign up</RouterLink>
      </Typography>
    </Box>
  );
}
