import { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { LoadingBackground1, LoadingBackground2, LoadingBackground3, LoadingBackground4 } from '../../components';
import LoginMenu from '../LoginMenu';
import './AppLoading.scss';

const loadingComponents = [
  <LoadingBackground1 />,
  <LoadingBackground2 />,
  <LoadingBackground3 />,
  <LoadingBackground4 />,
  <LoginMenu />
];

export default function AppLoading() {
  const [currentComponentIndex, setCurrentComponentIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Start the fade-out effect
      setFadeIn(false);
      setTimeout(() => {
        setCurrentComponentIndex((prevIndex) => {
          const nextIndex = prevIndex + 1;

          // Stop the interval when reaching the last component (LoginMenu)
          if (nextIndex === loadingComponents.length - 1) {
            clearInterval(intervalId);
          }

          // Start the fade-in effect for the next component
          setFadeIn(true);
          return nextIndex;
        });
      }, 300);
    }, 1200);

    return () => clearInterval(intervalId);
  }, []);

  // Function to render the current loading component with the fade-in or fade-out effect
  const renderCurrentComponent = () => {
    return (
      <div className={`fade ${fadeIn ? 'fade-in' : 'fade-out'}`}>
        {loadingComponents[currentComponentIndex]}
      </div>
    );
  };

  return (
    <>
      <Box>{renderCurrentComponent()}</Box>
    </>
  );
}
