import { Container, Grid, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { subscriptionData } from '@components/Client/fakedata/data';
import SingleSubscription from './SingleSubscription/SingleSubscription';
import styles from './Subscription.module.scss';

const Subscription = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.subWrapper}>
      <Container>
        <div className={styles.content}>
          <div className={styles.headerWrapper}>
            <Typography variant="h6" color="inherit" className={styles.title}>
              {t('common:subscriptions_title')}
            </Typography>
            <Typography variant="h6" color="inherit" className={styles.subTitle}>
              {t('common:subscriptions_subtitle')}
            </Typography>
          </div>

          {/* <MealsList /> */}
          <Grid container spacing={2} className={styles.content__wrapper}>
            {subscriptionData?.map((item) => (
              <Grid item md={4} sm={6} xs={12} key={item.id} sx={{ marginBottom: '15px' }}>
                <Link href={`/subscriptions/${item?.slug}`} style={{ textDecoration: 'none' }}>
                  <SingleSubscription cart={item} />
                </Link>
              </Grid>
            ))}
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default Subscription;
