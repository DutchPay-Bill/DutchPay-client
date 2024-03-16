/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { PublicData } from './globalState';
import { getUserProfile } from './fetchApi';

const useAuthChecker = (interval: number) => {
  const { authenticated, setOpen, setAuthenticated, setUserData } = useContext(PublicData);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const response = await getUserProfile();
        const data = await response?.json()
        if (!response?.ok) {
          setOpen(true);
          setAuthenticated(false);
          setTimeout(() => {
            navigate('/login');
          }, interval)
        } else {
          setAuthenticated(true);
          setUserData(data)
          setTimeout(() => {
            navigate('/dashboard');
          }, interval)
        }
      } catch (error) {
        console.error('Error while checking authentication:', error);
      }
    };

    checkAuthentication();
  }, [authenticated, setAuthenticated, setOpen, navigate]);
};

export default useAuthChecker;