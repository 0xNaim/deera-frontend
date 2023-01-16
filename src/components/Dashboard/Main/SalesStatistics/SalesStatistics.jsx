import PaymentsIcon from '@mui/icons-material/Payments';
import { Box, Card, Stack } from '@mui/material';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import React from 'react';
import * as Cookies from '../../../../hooks/cookies';
import styles from './SalesStatistics.module.scss';

const SalesStatistics = () => {
  const currentLanguageCode = Cookies.getLanguage();

  console.log(currentLanguageCode);

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <Typography variant="h6" color="inherit" className={styles.header_title}>
          Sales Statistics
        </Typography>
      </div>
      <Grid container spacing={1}>
        <Grid item md={6} sm={12} xs={12}>
          <Card className={styles.card}>
            <Stack direction="row" justifyContent="space-between">
              <Box className={styles.left_side}>
                <Box
                  className={styles.left_icon}
                  sx={{
                    marginLeft: currentLanguageCode === 'ar' && 1.5,
                    marginRight: currentLanguageCode !== 'ar' && 1.5,
                  }}
                >
                  <PaymentsIcon sx={{ fill: '#10b981', width: 24, height: 24 }} />
                </Box>
                <div>
                  <Typography variant="h6" color="inherit" className={styles.left_total}>
                    Total sales
                  </Typography>
                  <Typography variant="h6" color="inherit" className={styles.left_subTitle}>
                    1200.00 Kuwait dinars
                  </Typography>
                </div>
              </Box>
              <Box className={styles.right_side}>
                <Image src="/assets/up.svg" alt="service" width={24} height={24} />
                <Typography
                  variant="h6"
                  color="inherit"
                  className={styles.right_title}
                  sx={{
                    marginRight: currentLanguageCode === 'ar' && 1,
                    marginLeft: currentLanguageCode !== 'ar' && 1,
                  }}
                >
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
                <Box
                  className={styles.left_icon}
                  style={{ background: '#FECACA' }}
                  sx={{
                    marginLeft: currentLanguageCode === 'ar' && 1.5,
                    marginRight: currentLanguageCode !== 'ar' && 1.5,
                  }}
                >
                  {/* <PaymentsIcon style={{ color: '#DC2626' }} /> */}
                  <Image
                    src="/assets/dashboard/soldIcon.svg"
                    alt="Sold Icon"
                    width={24}
                    height={24}
                  />
                </Box>
                <div>
                  <Typography variant="h6" color="inherit" className={styles.left_total}>
                    Total orders sold
                  </Typography>
                  <Typography variant="h6" color="inherit" className={styles.left_subTitle}>
                    500 requests
                  </Typography>
                </div>
              </Box>
              <Box className={styles.right_side}>
                <Image src="/assets/up.svg" alt="service" width={25} height={25} />
                <Typography
                  variant="h6"
                  color="inherit"
                  className={styles.right_title}
                  sx={{
                    marginRight: currentLanguageCode === 'ar' && 1,
                    marginLeft: currentLanguageCode !== 'ar' && 1,
                  }}
                >
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
