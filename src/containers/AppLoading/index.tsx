/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import Box from '@mui/material/Box'
import {
  LoadingBackground1,
  LoadingBackground2,
  LoadingBackground3,
  LoadingBackground4,
} from "../../components";
import "./AppLoading.scss";
import useAuthChecker from "../../utils/authChecker";

const loadingComponents = [
  <LoadingBackground1 />,
  <LoadingBackground2 />,
  <LoadingBackground3 />,
  <LoadingBackground4 />,
];

export default function AppLoading() {
  useAuthChecker(6400)
  const [currentComponentIndex, setCurrentComponentIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setFadeIn(false);
      setTimeout(() => {
        setCurrentComponentIndex(prevIndex => {
          const nextIndex = prevIndex + 1;
          if (nextIndex === loadingComponents.length - 1) {
            clearInterval(intervalId);
          }
          setFadeIn(true);
          return nextIndex;
        });
      }, 300);
    }, 1200);
    return () => clearInterval(intervalId);
  }, []);
  
  const renderCurrentComponent = () => {
    return (
      <div className={`fade ${fadeIn ? "fade-in" : "fade-out"}`}>
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
