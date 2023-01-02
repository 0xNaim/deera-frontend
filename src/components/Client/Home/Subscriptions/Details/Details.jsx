import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import { Box, Button, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import SingleProduct from '../../../../Common/SingleProduct/SingleProduct';
import SingleSubscription from '../../../Subscription/SingleSubscription/SingleSubscription';
import styles from './Details.module.scss';

const Details = ({ data }) => {
  const [choosePackage, setChoosePackage] = useState('');
  const [chooseDuration, setChooseDuration] = useState('');

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1.3,
    },
  };
  return (
    <Box className={styles.detailsWrapper}>
      <SingleSubscription cart={data} />

      <div className={styles.pkgWrapper}>
        <Typography variant="h6" color="inherit" className={styles.pkg__title}>
          Choose package
        </Typography>

        <div className={styles.pkg__button__wrapper}>
          <Button
            variant="outlined"
            color="primary"
            className={styles.single__button}
            onClick={() => setChoosePackage('two-snacks')}
            style={{
              background: choosePackage === 'two-snacks' ? '#f2a515' : 'transparent',
              color: choosePackage === 'two-snacks' ? '#ffffff' : '#9ca3af',
            }}
          >
            Two snacks
          </Button>

          <Button
            variant="outlined"
            color="primary"
            className={styles.single__button}
            onClick={() => setChoosePackage('3-snack-salad-meals')}
            style={{
              background: choosePackage === '3-snack-salad-meals' ? '#f2a515' : 'transparent',
              color: choosePackage === '3-snack-salad-meals' ? '#ffffff' : '#9ca3af',
            }}
          >
            3 snack salad meals
          </Button>

          <Button
            variant="outlined"
            color="primary"
            className={styles.single__button}
            onClick={() => setChoosePackage('snack-meal')}
            style={{
              background: choosePackage === 'snack-meal' ? '#f2a515' : 'transparent',
              color: choosePackage === 'snack-meal' ? '#ffffff' : '#9ca3af',
            }}
          >
            Snack meal
          </Button>

          <Button
            variant="outlined"
            color="primary"
            className={styles.single__button}
            onClick={() => setChoosePackage('two-snack-salad-meals')}
            style={{
              background: choosePackage === 'two-snack-salad-meals' ? '#f2a515' : 'transparent',
              color: choosePackage === 'two-snack-salad-meals' ? '#ffffff' : '#9ca3af',
            }}
          >
            Two snack salad meals
          </Button>
        </div>
      </div>

      <div className={styles.meals__package__wrapper}>
        <Typography variant="h6" color="inherit" className={styles.meals__package__title}>
          Meals in this package
        </Typography>
        <Carousel arrows={false} responsive={responsive}>
          {data?.meals?.map((item) => (
            <SingleProduct key={item.id} cart={item} />
          ))}
        </Carousel>
      </div>

      <div className={styles.durationWrapper}>
        <Typography variant="h6" color="inherit" className={styles.duration__title}>
          Choose duration
        </Typography>
        <div className={styles.duration__button__wrapper}>
          <Button
            variant="outlined"
            color="primary"
            className={styles.single__button}
            onClick={() => setChooseDuration('a-week')}
            style={{
              background: chooseDuration === 'a-week' ? '#f2a515' : 'transparent',
              color: chooseDuration === 'a-week' ? '#ffffff' : '#9ca3af',
            }}
          >
            a week
          </Button>
          <Button
            variant="outlined"
            color="primary"
            className={styles.single__button}
            onClick={() => setChooseDuration('month-without-friday')}
            style={{
              background: chooseDuration === 'month-without-friday' ? '#f2a515' : 'transparent',
              color: chooseDuration === 'month-without-friday' ? '#ffffff' : '#9ca3af',
            }}
          >
            Month without friday
          </Button>

          <Button
            variant="outlined"
            color="primary"
            className={styles.single__button}
            onClick={() => setChooseDuration('month-without-weekend')}
            style={{
              background: chooseDuration === 'month-without-weekend' ? '#f2a515' : 'transparent',
              color: chooseDuration === 'month-without-weekend' ? '#ffffff' : '#9ca3af',
            }}
          >
            Month without Weekend
          </Button>
          <Button
            variant="outlined"
            color="primary"
            className={styles.single__button}
            onClick={() => setChooseDuration('14-days-without-friday')}
            style={{
              background: chooseDuration === '14-days-without-friday' ? '#f2a515' : 'transparent',
              color: chooseDuration === '14-days-without-friday' ? '#ffffff' : '#9ca3af',
            }}
          >
            14 days without Friday
          </Button>
        </div>
      </div>

      <Stack direction="row" spacing={1} alignItems="center" className={styles.deliverWrapper}>
        <DeliveryDiningIcon />
        <Typography variant="subtitle2" color="inherit" component="p">
          Free daily delivery
        </Typography>
      </Stack>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        className={styles.totalWrapper}
      >
        <Typography variant="subtitle2" color="inherit" component="p" className={styles.total}>
          Total
        </Typography>
        <Typography
          variant="subtitle2"
          color="inherit"
          component="p"
          className={styles.total__price}
        >
          105 D.K
        </Typography>
      </Stack>

      <Link href="/sign-in" style={{ textDecoration: 'none' }}>
        <Button
          variant="contained"
          color="primary"
          style={{ textDecoration: 'none' }}
          className={styles.subscribe__page}
        >
          Subscribe
        </Button>
      </Link>
    </Box>
  );
};

export default Details;
