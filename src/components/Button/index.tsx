// ButtonLogin.tsx
import React from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

interface ButtonLoginProps {
  buttonText: string;
  to?: string; // Route to navigate to
}

const ButtonLogin: React.FC<ButtonLoginProps> = ({ buttonText, to }) => {
  return (
    <Button
      className={styles.button}
      component={to ? Link : 'button'}
      to={to}
      variant="contained"
      fullWidth
    >
      {buttonText}
    </Button>
  );
};

export default ButtonLogin;
