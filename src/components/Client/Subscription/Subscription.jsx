import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { subscriptionData } from '../fakedata/data';
import SingleSubscription from './SingleSubscription/SingleSubscription';
import styles from './Subscription.module.scss';
// import MealsList from './MealsList/MealsList';

const Subscription = () => (
  <div className={styles.subWrapper}>
    <Container>
      <div className={styles.content}>
        <div className={styles.headerWrapper}>
          <Typography variant="h6" color="inherit" className={styles.title}>
            List of subscriptions
          </Typography>
          <Typography variant="h6" color="inherit" className={styles.subTitle}>
            Browse and select existing subscriptions.
          </Typography>
        </div>

        {/* <MealsList /> */}
        <Grid container spacing={2} className={styles.content__wrapper}>
          {subscriptionData?.map((item) => (
            <Grid item md={4} sm={6} xs={12} key={item.id} sx={{ marginBottom: '15px' }}>
              <SingleSubscription cart={item} />
            </Grid>
          ))}
        </Grid>
      </div>
    </Container>
  </div>
);

export default Subscription;
