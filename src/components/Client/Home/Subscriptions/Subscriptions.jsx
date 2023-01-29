import { Container, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import SingleProduct from '@components/Common/SingleProduct/SingleProduct';
import { subscriptionsData } from '@components/Client/fakedata/data';
import styles from './Subscriptions.module.scss';

const Subscriptions = () => {
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

  const { t } = useTranslation();
  return (
    <div className={styles.subWrapper}>
      <Container>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="Center"
          className={styles.headerWrapper}
        >
          <Typography variant="h6" color="inherit" className={styles.headerTitle}>
            {t('home:subscriptions_title')}
          </Typography>
          <div className={styles.headerView}>
            <Link href="/">
              <Typography variant="subtitle2" color="inherit">
                {t('home:view_all')}
              </Typography>
            </Link>
          </div>
        </Stack>
        <div className={styles.bodyText}>
          <Typography variant="subtitle1" color="inherit">
            {t('home:subscriptions_subTitle')}
          </Typography>
        </div>

        <Carousel arrows={false} responsive={responsive}>
          {subscriptionsData?.map((item) => (
            <SingleProduct key={item.id} cart={item} />
          ))}
        </Carousel>
      </Container>
    </div>
  );
};

export default Subscriptions;
