/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { PublicData } from './globalState';

const useAuthChecker = (interval: number) => {
  const { authenticated, login } = useContext(PublicData);
  const navigate = useNavigate();

  useEffect(() => {
    const user = async () => {
      login()
    }
    user()
    if (!authenticated) {
      setTimeout(() => {
        navigate('/login');
      }, interval)
    } else {
      setTimeout(() => {
        navigate('/dashboard');
      }, interval)
    }
  }, [authenticated, interval, navigate]);
};

export default useAuthChecker;