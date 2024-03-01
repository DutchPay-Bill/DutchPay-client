import {
  Box,
  TextField
} from '@mui/material';
import styles from './LoginForm.module.scss';
import { ButtonLogin } from '../../components';

const LoginForm = () => {
  return (
    <Box className={styles.form}>
      <TextField className={styles.textfield} label="Username" variant="outlined" fullWidth margin="normal" />
      <TextField className={styles.textfield} label="Password" type="password" variant="outlined" fullWidth margin="normal" />
      <ButtonLogin />
    </Box>
  );
};

export default LoginForm;