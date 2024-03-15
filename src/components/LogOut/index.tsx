import React from "react";
import { Typography } from "@mui/material";
import styles from "./LogOut.module.scss";
import { userLogout } from "../../utils/fetchApi";

const LogOut: React.FC = () => {
  const handleLogout = async () => {
    try {
      const response = await userLogout();
      console.log("test", response);
      if (response?.ok) {
        window.location.href = "/login";
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.root} onClick={handleLogout}>
      <Typography variant="body1" className={styles.title}>
        Log out
      </Typography>
    </div>
  );
};

export default LogOut;
