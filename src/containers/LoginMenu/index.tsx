import { Link as RouterLink, useNavigate } from "react-router-dom";
import {
  Button,
  Divider,
  Input,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import logo from "../../assets/images/app-loading/logo-4.png";
import googleLogo from "../../assets/images/google.svg";
import appleLogo from "../../assets/images/apple.svg";
import styles from "./LoginMenu.module.scss";
import { ButtonCustom } from "../../components";
import { ChangeEvent, useState } from "react";
import { phoneLogin } from "../../utils/fetchApi";
import CustomAlert from "../../components/Alert";
import { API_URL } from "../../utils/access";

const dummyCodes = [
  { value: "+62" },
  { value: "+1" },
  { value: "+44" },
  { value: "+81" },
];

export default function LoginMenu() {
  const [countryCode, setCountryCode] = useState("+62");
  const [phone, setPhone] = useState("");
  const [password, setPasword] = useState("");
  const [alertSeverity, setAlertSeverity] = useState<
    "success" | "error" | "info" | "warning" | undefined
  >(undefined);
  const [alertMessage, setAlertMessage] = useState<string>("");
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const handleCountryCodeChange = (event: SelectChangeEvent) => {
    setCountryCode(event.target.value);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === "phone") {
      if (/^\d*$/.test(value)) {
        setPhone(value);
      }
    } else if (name === "password") {
      setPasword(value);
    }
  };

  const handleLoginSubmit = async () => {
    try {
      const selectedValue = countryCode.replace("+", "");
      const phone_number = selectedValue + phone;
      const value = { phone_number, password };
      const response = await phoneLogin(value);
      setTimeout(() => {
        if (response?.ok) {
          setOpen(true);
          setAlertSeverity("success");
          setAlertMessage("Login successful. Redirecting to dashboard");
          setTimeout(() => {
            navigate("/dashboard");
          }, 2000);
        }
      }, 1500);
    } catch (error) {
      console.error(error);
      if (error instanceof Response) {
        const result = await error.json();
        setOpen(true);
        setAlertSeverity("error");
        setAlertMessage(result.message);
      }
    }
  };

  const handleGoogleLogin = () => {
    window.location.href = API_URL + "/v1/auth/google";
  };

  return (
    <Box className={styles.loginMenu}>
      {alertSeverity && alertMessage && (
        <CustomAlert
          severity={alertSeverity}
          message={alertMessage}
          open={open}
          setOpen={setOpen}
        />
      )}
      <img className={styles.logo} src={logo} alt="Dutch Pay Logo" />

      <Box className={styles.phoneNumberSection}>
        <Select
          defaultValue={"+62"}
          className={styles.phoneNumberSelect}
          onChange={handleCountryCodeChange}
        >
          {dummyCodes.map((country) => (
            <MenuItem key={country.value} value={country.value}>
              {country.value}
            </MenuItem>
          ))}
        </Select>
        <Input
          autoComplete="off"
          disableUnderline
          className={styles.phoneNumberInput}
          placeholder="8121605XXXX"
          value={phone}
          name="phone"
          onChange={handleInputChange}
        />
      </Box>

      <Box className={styles.password}>
        <Input
          fullWidth
          placeholder="Input Password"
          autoComplete="off"
          disableUnderline
          aria-label="password"
          type="password"
          name="password"
          value={password}
          className={styles.passwordInput}
          onChange={handleInputChange}
          inputProps={{
            style: { textAlign: "center" },
          }}
        />
      </Box>

      <ButtonCustom
        buttonText="Log in"
        onClick={handleLoginSubmit}
        id="captcha"
      />

      <Divider className={styles.divider}>or</Divider>

      <Box className={styles.socialLoginSection}>
        <Button
          className={styles.socialLoginButton}
          onClick={handleGoogleLogin}
        >
          <img className={styles.icon} src={googleLogo} alt="Google Logo" />{" "}
          Login with Gmail
        </Button>
        <Button className={styles.socialLoginButton}>
          <img className={styles.icon} src={appleLogo} alt="Apple Logo" /> Login
          with Apple
        </Button>
      </Box>

      <Typography className={styles.text}>
        Not registered yet?{" "}
        <RouterLink to="/register" className={styles.signInLink}>
          Sign up
        </RouterLink>
      </Typography>
    </Box>
  );
}
