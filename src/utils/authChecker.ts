/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { PublicData } from './globalState';

const useAuthChecker = (interval: number) => {
  const { authenticated, setOpen } = useContext(PublicData);
  const navigate = useNavigate();

  useEffect(() => {
    if (authenticated) {
      setTimeout(() => {
        navigate('/dashboard');
      }, interval)
    } 
    setTimeout(() => {
      if (!authenticated) {
        setTimeout(() => {
          setOpen(true)
        }, 500)
        setTimeout(() => {
          navigate('/login');
        }, interval)
      }
    }, 1000)
  }, [authenticated, interval]);
};

export default useAuthChecker;