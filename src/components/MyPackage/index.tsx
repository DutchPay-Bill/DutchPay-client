import React from 'react';
import styles from './MyPackage.module.scss';
import { Box, Grid } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const MyPackage: React.FC = () => {
  return (
    <Box className={styles.root}>
      <Grid container spacing={16} columns={16}>
        <Grid item xs={8}>
          <h2 className={styles.title}>My Package</h2>
        </Grid>
        <Grid item xs={8} className={styles.plansgrid}>
            <RouterLink className={styles.plans}  to="#">View Plans</RouterLink>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MyPackage;