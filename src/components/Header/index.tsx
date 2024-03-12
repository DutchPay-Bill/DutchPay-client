import React from "react";
import { Box, Typography } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import styles from "./header.module.scss";
import { Link as RouterLink } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <Box component="header" className={styles.root}>
      <Box component="nav" className={styles.toolbar}>
        <RouterLink to="/dashboard" className={styles.backbutton}>
          <ArrowBackIosIcon />{" "}
        </RouterLink>
      </Box>
      <Typography variant="h6" className={styles.title}>
        My Account
      </Typography>
    </Box>
  );
};

export default Header;
