import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Box, Button, Divider, Input, MenuItem, Select, SelectChangeEvent, Typography } from "@mui/material";
import logo from '../../assets/images/app-loading/logo-4.png';
import googleLogo from '../../assets/images/google.svg';
import appleLogo from '../../assets/images/apple.svg';
import styles from './LoginMenu.module.scss';
import { ButtonCustom } from '../../components';
import { ChangeEvent, useState } from 'react';
import { auth } from '../../config/firebaseAuth';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';

const dummyCodes = [
  { value: '+62' },
  { value: '+1' },
  { value: '+44' },
  { value: '+81' },
];

export default function LoginMenu() {
  const [ phone , setPhone ] = useState("")
  const [ countryCode, setCountryCode ] = useState('+62');

  const navigate = useNavigate()

  const handleCountryCodeChange = (event: SelectChangeEvent) => {
    setCountryCode(event.target.value);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>)=> {
    const {name, value} = event.target
    if(name === "phone"){
      setPhone(value)
    }
  }

  const sendOtp = async ()=> {
    try {
      const phoneNumber = countryCode + phone;
      const recaptcha = new RecaptchaVerifier(auth, "captcha", {
        'size': 'invisible',
        'callback': function(response: unknown) {
          console.log(response);
        },
      })
      const confirmation = await signInWithPhoneNumber(auth, phoneNumber, recaptcha)
      if(confirmation){        
        setTimeout(()=> {
          navigate('/dashboard')
        }, 1000)
      }
      console.log('phone', phoneNumber )
      console.log('confirm', confirmation )
    } catch (error) {
      console.error(error)
    }
  }
  
  return (
    <Box className={styles.loginMenu}>
      <img className={styles.logo} src={logo} alt="Dutch Pay Logo" />

      <Box className={styles.phoneNumberSection}>
        <Select defaultValue={'+62'} className={styles.phoneNumberSelect} onChange={handleCountryCodeChange}>
          {dummyCodes.map((country) => (
            <MenuItem key={country.value} value={country.value}>
              {country.value}
            </MenuItem>
          ))}
        </Select>
        <Input
          autoComplete='off'
          disableUnderline
          className={styles.phoneNumberInput}
          placeholder="8121605XXXX"
          value={phone}
          name='phone'
          onChange={handleInputChange}
        />
      </Box>
      <ButtonCustom buttonText="Log in" onClick={sendOtp} id='captcha'/>
      
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
