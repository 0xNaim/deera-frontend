/* eslint-disable react/jsx-one-expression-per-line */
import PaymentsIcon from '@mui/icons-material/Payments';
import { Box, Card, Stack } from '@mui/material';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './SalesStatistics.module.scss';

const SalesStatistics = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <Typography variant="h6" color="inherit" className={styles.header_title}>
          {/* Sales Statistics */}
          {t('dMain:Sales_Statistics')}
        </Typography>
      </div>
      <Grid container spacing={1}>
        <Grid item md={6} sm={12} xs={12}>
          <Card className={styles.card}>
            <Stack direction="row" justifyContent="space-between">
              <Box className={styles.left_side}>
                <div className={styles.left_icon}>
                  <PaymentsIcon sx={{ fill: '#10b981', width: 24, height: 24 }} />
                </div>
                <div>
                  <Typography variant="h6" color="inherit" className={styles.left_total}>
                    {/* Total sales */}
                    {t('dMain:total_sales')}
                  </Typography>
                  <Typography variant="h6" color="inherit" className={styles.left_subTitle}>
                    1200.00 {t('dMain:kuwait_dollar')}
                  </Typography>
                </div>
              </Box>
              <Box className={styles.right_side}>
                <Image src="/assets/up.svg" alt="service" width={24} height={24} />
                <Typography variant="h6" color="inherit" className={styles.right_title}>
                  20%
                </Typography>
              </Box>
            </Stack>
          </Card>
        </Grid>
        <Grid item md={6} sm={12} xs={12}>
          <Card className={styles.card}>
            <Stack direction="row" justifyContent="space-between">
              <Box className={styles.left_side}>
                <div className={styles.left_icon} style={{ background: '#FECACA' }}>
                  {/* <PaymentsIcon style={{ color: '#DC2626' }} /> */}
                  <Image
                    src="/assets/dashboard/soldIcon.svg"
                    alt="Sold Icon"
                    width={24}
                    height={24}
                  />
                </div>
                <div>
                  <Typography variant="h6" color="inherit" className={styles.left_total}>
                    {/* Total orders sold */}
                    {t('dMain:Total_orders_sold')}
                  </Typography>
                  <Typography variant="h6" color="inherit" className={styles.left_subTitle}>
                    500 {t('dMain:Requests')}
                  </Typography>
                </div>
              </Box>
              <Box className={styles.right_side}>
                <Image src="/assets/up.svg" alt="service" width={25} height={25} />
                <Typography variant="h6" color="inherit" className={styles.right_title}>
                  30%
                </Typography>
              </Box>
            </Stack>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default SalesStatistics;
