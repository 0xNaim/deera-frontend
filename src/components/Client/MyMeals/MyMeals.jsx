import { Button, Container, Stack, Typography } from '@mui/material';
import React from 'react';
import styles from './MyMeals.module.scss';
import MyMealsList from './MyMealsList/MyMealsList';

const MyMeals = () => (
  <div className={styles.wrapper}>
    <Container>
      <Stack direction="row" justifyContent="space-between" className={styles.header}>
        <Typography variant="h6" color="inherit" className={styles.header_title}>
          My meals
        </Typography>
        <Button variant="outlined" color="primary" className={styles.header_button}>
          My account
        </Button>
      </Stack>
      <MyMealsList />
    </Container>
  </div>
);

export default MyMeals;
