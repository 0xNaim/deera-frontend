import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import { Box, Button, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import SingleProduct from '../../../../Common/SingleProduct/SingleProduct';
import SingleSubscription from '../../../Subscription/SingleSubscription/SingleSubscription';
import styles from './Details.module.scss';

const Details = ({ data }) => {
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
          <Button variant="outlined" color="primary" className={styles.single__button}>
            Two snacks
          </Button>

          <Button variant="outlined" color="primary" className={styles.single__button}>
            3 snack salad meals
          </Button>

          <Button variant="outlined" color="primary" className={styles.single__button}>
            Snack meal
          </Button>

          <Button variant="outlined" color="primary" className={styles.single__button}>
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
          <Button variant="outlined" color="primary" className={styles.single__button}>
            a week
          </Button>
          <Button variant="outlined" color="primary" className={styles.single__button}>
            Month without friady
          </Button>

          <Button variant="outlined" color="primary" className={styles.single__button}>
            Month without Weekend
          </Button>
          <Button variant="outlined" color="primary" className={styles.single__button}>
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

      <Link href="/payment" style={{ textDecoration: 'none' }}>
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
