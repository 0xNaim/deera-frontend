import { Container, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Meals.module.scss';
import MealsList from './MealsList/MealsList';

const Meals = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.subWrapper}>
      <Container>
        <div className={styles.content}>
          <div className={styles.headerWrapper}>
            <Typography variant="h6" color="inherit" className={styles.title}>
              {t('common:meal_title')}
            </Typography>
            <Typography variant="h6" color="inherit" className={styles.subTitle}>
              {t('common:meal_subtitle')}
            </Typography>
          </div>

          <MealsList />
        </div>
      </Container>
    </div>
  );
};

export default Meals;
