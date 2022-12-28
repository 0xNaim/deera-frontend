import { Card, Typography } from '@mui/material';
import React from 'react';
import styles from './SingleSubscription.module.scss';

const SingleSubscription = ({ cart }) => (
  <Card className={styles.cardWrapper}>
    <img src={cart?.image} alt={cart?.title} />
    <Typography variant="h6" color="inherit" className={styles.title}>
      {cart?.title}
    </Typography>
    <Typography variant="h6" color="inherit" className={styles.subTitle}>
      {cart?.subTitle}
    </Typography>

    {/* <Stack className={styles.pkgWrapper}>
      <Typography variant="h6" color="inherit" className={styles.pkg__title}>
        Choose package
      </Typography>
      <Stack direction="row" spacing={1} className={styles.pkg__button__wrapper}>
        <Button variant="outlined" color="primary" className={styles.single__button}>
          Two snacks
        </Button>
        <Button variant="outlined" color="primary" className={styles.single__button}>
          3 snack salad meals
        </Button>
      </Stack>
      <Stack direction="row" spacing={1} className={styles.pkg__button__wrapper}>
        <Button variant="outlined" color="primary" className={styles.single__button}>
          Snack meal
        </Button>
        <Button variant="outlined" color="primary" className={styles.single__button}>
          Two snack salad meals
        </Button>
      </Stack>
    </Stack> */}
    {/* <Stack className={styles.durationWrapper}>
      <Typography variant="h6" color="inherit" className={styles.duration__title}>
        Choose package
      </Typography>
      <Stack direction="row" spacing={1} className={styles.duration__button__wrapper}>
        <Button variant="outlined" color="primary" className={styles.single__button}>
          a week
        </Button>
        <Button variant="outlined" color="primary" className={styles.single__button}>
          Month without friady
        </Button>
      </Stack>
      <Stack direction="row" spacing={1} className={styles.duration__button__wrapper}>
        <Button variant="outlined" color="primary" className={styles.single__button}>
          Month without Weekend
        </Button>
        <Button variant="outlined" color="primary" className={styles.single__button}>
          14 days without Friday
        </Button>
      </Stack>
    </Stack> */}
    {/* <Stack className={styles.deliverWrapper}>
      <h1>hello</h1>
    </Stack>
    <Stack className={styles.totalWrapper}>
      <h1>hello</h1>
    </Stack> */}
  </Card>
);

export default SingleSubscription;
