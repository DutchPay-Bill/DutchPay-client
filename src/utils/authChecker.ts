// src/hooks/useTokenChecker.ts

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useCookiesChecker = () => {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {

    const storedAccessToken = document.cookie
      .split('; ')
      .find((row) => row.startsWith('access_token='))
      ?.split('=')[1];

    setAccessToken(storedAccessToken || null);
    setTimeout(() => {
      if (!storedAccessToken) {
        navigate('/login');
      }else {
        navigate('/dashboard');
      }
    }, 5200)
  }, [navigate]);

  const isAuthenticated = () => {
    return !!accessToken;
  };

  return {
    accessToken,
    isAuthenticated,
  };
};

export default useCookiesChecker;