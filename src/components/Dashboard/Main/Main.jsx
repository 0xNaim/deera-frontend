/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-wrap-multilines */
import VisibilityIcon from '@mui/icons-material/Visibility';
import {
  Card,
  Container,
  Divider,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material';
import dynamic from 'next/dynamic';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from '@components/Dashboard/common/Header/Header';
import { bestCustomer, mostPopularMeals } from '../fakedata';
import styles from './Main.module.scss';
import MainDIalog from './MainDIalog/MainDIalog';
// import SalesStatistics from './SalesStatistics/SalesStatistics';

const Services = dynamic(() => import('./Services/Services'));
const SalesStatistics = dynamic(() => import('./SalesStatistics/SalesStatistics'));

// import Services from './Services/Services';

const Main = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.wrapper}>
      <Header title={t('dSidebar:main')} />
      {/* <CustomTable /> */}
      <Container>
        <Services />
        <SalesStatistics />
        {/* customer details */}
        <Grid container spacing={1} className={styles.custom_details}>
          <Grid item md={6} sm={12} xs={12}>
            <Typography variant="h6" color="inherit" className={styles.custom_details_title}>
              {t('dMain:Best_customer')}
            </Typography>

            <Card className={styles.card}>
              <List>
                {bestCustomer?.map((value, index) => (
                  <React.Fragment key={value?.customer_id}>
                    <ListItem
                      secondaryAction={
                        <MainDIalog
                          data={value}
                          btnContent={
                            <IconButton aria-label="view" className={styles.icon_view}>
                              <VisibilityIcon />
                            </IconButton>
                          }
                        />
                      }
                    >
                      <ListItemText
                        primary={
                          <Typography
                            variant="h6"
                            color="inherit"
                            className={styles.customer_title}
                          >
                            {index + 1}. {value?.name}
                          </Typography>
                        }
                      />
                    </ListItem>
                    {bestCustomer?.length !== index + 1 && <Divider />}
                  </React.Fragment>
                ))}
              </List>
            </Card>
          </Grid>
          <Grid item md={6} sm={12} xs={12}>
            <Typography variant="h6" color="inherit" className={styles.custom_details_title}>
              {t('dMain:Most_popular_meals')}
            </Typography>
            <Card className={styles.card}>
              <List>
                {mostPopularMeals?.map((value, index) => (
                  <React.Fragment key={value?.customer_id}>
                    <ListItem
                      secondaryAction={
                        <Typography
                          variant="h6"
                          color="inherit"
                          className={styles.customer_requests_title}
                        >
                          {value?.requests}
                        </Typography>
                      }
                    >
                      <ListItemText
                        primary={
                          <Typography
                            variant="h6"
                            color="inherit"
                            className={styles.customer_title}
                          >
                            {index + 1}. {value?.name}
                          </Typography>
                        }
                      />
                    </ListItem>
                    {mostPopularMeals?.length !== index + 1 && <Divider />}
                  </React.Fragment>
                ))}
              </List>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Main;
