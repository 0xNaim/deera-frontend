/* eslint-disable object-curly-newline */
import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Heroarea.module.scss';

const Heroarea = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.heroAreaWrapper}>
      <Container sx={{ padding: { xs: 0, sm: '24px' } }}>
        <Grid container justifyContent="center" alignItems="center">
          <Grid item md={6} sm={12} xs={12}>
            <Box className={styles.mobileImage}>
              <img src="/assets/client/Hero-Section.svg" alt="heroarea" />
            </Box>
          </Grid>
          <Grid item md={1} sm={0} xs={0} />
          <Grid item md={5} sm={12} xs={12}>
            <Box className={styles.singleBox}>
              <Typography variant="h5" color="inherit" className={styles.titleWrapper}>
                {t('home:hero_title')}
              </Typography>
              <Typography variant="subtitle1" color="inherit" className={styles.subTitleWrapper}>
                {t('home:hero_subTitle')}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Heroarea;
