/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { PublicData } from './globalState';

const useAuthChecker = (interval: number) => {
  const { authenticated, login, setOpen } = useContext(PublicData);
  const navigate = useNavigate();

  useEffect(() => {
    const user = async () => {
      login()
    }
    user()
    setTimeout(() => {
    if (!authenticated) {
      setTimeout(() => {
        setOpen(true)
        navigate('/login');
      }, interval)
      } 
      else {
      setTimeout(() => {
        navigate('/dashboard');
      }, interval)
    }
  }, 500)
  }, [authenticated, interval, navigate]);
};

export default useAuthChecker;