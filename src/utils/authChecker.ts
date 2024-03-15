/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { PublicData } from './globalState';

const useAuthChecker = (interval: number) => {
  const { authenticated, login, setOpen } = useContext(PublicData);
  const navigate = useNavigate();

  useEffect(() => {
    const user = async () => {
      await login()
    }
    user()
    setTimeout(() => {
    if (!authenticated) {
      setTimeout(() => {
        setOpen(true)
      }, 200)
      setTimeout(() => {
        navigate('/login');
      }, interval)
      } 
      else {
      setTimeout(() => {
        navigate('/dashboard');
      }, interval)
    }
  }, 1000)
  }, [authenticated, interval, navigate]);
};

export default useAuthChecker;