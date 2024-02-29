// ButtonLogin.tsx
import React from 'react';
import { Button } from '@mui/material';
import styles from './Button.module.scss';

interface ButtonLoginProps {
  buttonText: string;
}

const ButtonLogin: React.FC<ButtonLoginProps> = ({ buttonText }) => {
  return (
    <Button className={styles.button} variant="contained" fullWidth>
      {buttonText}
    </Button>
  );
};

export default ButtonLogin;
