/* eslint-disable object-curly-newline */
import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import styles from './Heroarea.module.scss';

const Heroarea = () => (
  <div className={styles.heroAreaWrapper}>
    <Box className={styles.mobileImage}>
      <img src="/assets/client/heroarea.jpg" alt="heroarea" />
    </Box>
    <Container>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item md={8} sm={12} xs={12}>
          <Box className={styles.singleBox}>
            <Typography variant="h5" color="inherit" className={styles.titleWrapper}>
              The best subscriptions for a healthy life
            </Typography>
            <Typography variant="subtitle1" color="inherit" className={styles.subTitleWrapper}>
              Join us for the best and tailored meals every customer&apos;s need
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  </div>
);

export default Heroarea;
