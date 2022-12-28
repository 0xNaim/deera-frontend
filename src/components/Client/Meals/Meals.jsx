import { Container, Typography } from '@mui/material';
import React from 'react';
import styles from './Meals.module.scss';
import MealsList from './MealsList/MealsList';

const Meals = () => (
  <div className={styles.subWrapper}>
    <Container>
      <div className={styles.content}>
        <div className={styles.headerWrapper}>
          <Typography variant="h6" color="inherit" className={styles.title}>
            Meal list
          </Typography>
          <Typography variant="h6" color="inherit" className={styles.subTitle}>
            discover our meals
          </Typography>
        </div>

        <MealsList />
      </div>
    </Container>
  </div>
);

export default Meals;
