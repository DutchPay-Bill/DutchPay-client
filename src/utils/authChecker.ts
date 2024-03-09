// src/hooks/useTokenChecker.ts

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useCookiesChecker = (interval: number) => {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {

    const storedAccessToken = document.cookie
      .split('; ')
      .find((row) => row.startsWith('access_token='))
      ?.split('=')[1];

    setAccessToken(storedAccessToken || null);
    if (!storedAccessToken) {
        setTimeout(() => {
        navigate('/login');
      }, interval)
      }else {
        setTimeout(() => {
          navigate('/dashboard');
        }, interval)
      }
  }, [interval, navigate]);

  const isAuthenticated = () => {
    return !!accessToken;
  };

  return {
    accessToken,
    isAuthenticated,
  };
};

export default useCookiesChecker;