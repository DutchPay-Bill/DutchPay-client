import { Button } from '@mui/material';
import styles from './Button.module.scss';

const ButtonLogin = () => {
  return (
    <Button className={styles.button} variant="contained" color="primary" fullWidth>
    </Button>
  );
};

export default ButtonLogin;