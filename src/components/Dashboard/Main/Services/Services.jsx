import { Box, Card, Grid, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import styles from './Services.module.scss';

const Services = () => (
  <div className={styles.wrapper}>
    <Grid container spacing={2}>
      <Grid item md={3} sm={6} xs={12}>
        <Card className={styles.card}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            className={styles.card_content}
          >
            <Box className={styles.left_side}>
              <Image src="/assets/up.svg" alt="service" width={30.5} height={30.5} />
              <Typography variant="h6" color="inherit" className={styles.left_title}>
                12
              </Typography>
              <Typography variant="subtitle2" color="inherit" className={styles.left_subtitle}>
                Order
              </Typography>
            </Box>
            <Box className={styles.right_side}>
              <div className={styles.right_image}>
                <Image src="/assets/drivers.svg" alt="" width={34} height={34} />
              </div>
              <Typography variant="h6" color="inherit" className={styles.right_title}>
                Drivers
              </Typography>
            </Box>
          </Stack>
        </Card>
      </Grid>
      <Grid item md={3} sm={6} xs={12}>
        <Card className={styles.card}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            className={styles.card_content}
          >
            <Box className={styles.left_side}>
              <Image src="/assets/up.svg" alt="service" width={30.5} height={30.5} />
              <Typography variant="h6" color="inherit" className={styles.left_title}>
                90
              </Typography>
              <Typography variant="subtitle2" color="inherit" className={styles.left_subtitle}>
                Client
              </Typography>
            </Box>
            <Box className={styles.right_side}>
              <div className={styles.right_image}>
                <Image src="/assets/customers2.svg" alt="" width={34} height={34} />
              </div>
              <Typography variant="h6" color="inherit" className={styles.right_title}>
                Customers
              </Typography>
            </Box>
          </Stack>
        </Card>
      </Grid>
      <Grid item md={3} sm={6} xs={12}>
        <Card className={styles.card}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            className={styles.card_content}
          >
            <Box className={styles.left_side}>
              <Image src="/assets/up.svg" alt="service" width={30.5} height={30.5} />
              <Typography variant="h6" color="inherit" className={styles.left_title}>
                10
              </Typography>
              <Typography variant="subtitle2" color="inherit" className={styles.left_subtitle}>
                Employees
              </Typography>
            </Box>
            <Box className={styles.right_side}>
              <div className={styles.right_image}>
                <Image src="/assets/employees2.svg" alt="" width={34} height={34} />
              </div>
              <Typography variant="h6" color="inherit" className={styles.right_title}>
                Employees
              </Typography>
            </Box>
          </Stack>
        </Card>
      </Grid>
      <Grid item md={3} sm={6} xs={12}>
        <Card className={styles.card}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            className={styles.card_content}
          >
            <Box className={styles.left_side}>
              <Image src="/assets/up.svg" alt="service" width={30.5} height={30.5} />
              <Typography variant="h6" color="inherit" className={styles.left_title}>
                12
              </Typography>
              <Typography variant="subtitle2" color="inherit" className={styles.left_subtitle}>
                Order
              </Typography>
            </Box>
            <Box className={styles.right_side}>
              <div className={styles.right_image}>
                <Image src="/assets/requests2.svg" alt="" width={34} height={34} />
              </div>
              <Typography variant="h6" color="inherit" className={styles.right_title}>
                Requests
              </Typography>
            </Box>
          </Stack>
        </Card>
      </Grid>
    </Grid>
  </div>
);

export default Services;
