import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CallIcon from '@mui/icons-material/Call';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  List,
  ListItemButton,
  ListItemText,
  Paper,
  Switch,
  Typography,
} from '@mui/material';
import Link from 'next/link';
import { useState } from 'react';
import Layout from '../../components/Layout';
import styles from './settings.module.scss';

const Settings = () => {
  const [changeLanguage, setChangeLanguage] = useState(true);

  const handleLanguageChange = (e) => setChangeLanguage(e.target.checked);

  return (
    <Layout>
      <Container className={styles.container}>
        <Box className={styles.btn__wrapper}>
          <Button variant="outlined" size="small">
            Choose meals
          </Button>
        </Box>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4} className={styles.item}>
            <Paper
              className={styles.content__wrapper}
              sx={{
                boxShadow: {
                  xs: 0,
                  md: 1,
                },
              }}
            >
              <Typography className={styles.heading} variant="h6">
                Your data
              </Typography>

              <List>
                <Link href="/personal-information" className={styles.link}>
                  <ListItemButton className={styles.list} disableRipple>
                    <ListItemText primary="Your personal information" />
                    <ArrowForwardIosIcon className={styles.icons} />
                  </ListItemButton>
                </Link>
                <Divider />

                <ListItemButton className={styles.list} disableRipple>
                  <ListItemText primary="Change the language" />
                  <Switch checked={changeLanguage} onChange={handleLanguageChange} />
                </ListItemButton>
                <Divider />
              </List>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={6} md={4} className={styles.item}>
            <Paper
              className={styles.content__wrapper}
              sx={{
                boxShadow: {
                  xs: 0,
                  md: 1,
                },
              }}
            >
              <Typography className={styles.heading} variant="h6">
                Subscription
              </Typography>

              <List>
                <ListItemButton className={styles.list} disableRipple>
                  <ListItemText
                    primary={
                      // eslint-disable-next-line react/jsx-wrap-multilines
                      <>
                        Subscription type:
                        <Box className={styles.subscription_type} component="span">
                          {' '}
                          protien
                        </Box>
                      </>
                    }
                  />
                </ListItemButton>
                <Divider />

                <ListItemButton className={styles.list} disableRipple>
                  <ListItemText
                    primary={
                      // eslint-disable-next-line react/jsx-wrap-multilines
                      <>
                        Package type:
                        <Box className={styles.subscription_type} component="span">
                          {' '}
                          3 snacks
                        </Box>
                      </>
                    }
                  />
                </ListItemButton>
                <Divider />

                <Link href="/personal-information" className={styles.link}>
                  <ListItemButton className={styles.list} disableRipple>
                    <ListItemText
                      primary={
                        // eslint-disable-next-line react/jsx-wrap-multilines
                        <>
                          Remaining time:
                          <Box className={styles.subscription_type} component="span">
                            {' '}
                            13 days
                          </Box>
                        </>
                      }
                    />
                    <ArrowForwardIosIcon className={styles.icons} />
                  </ListItemButton>
                </Link>
                <Divider />

                <Link href="/personal-information" className={styles.link}>
                  <ListItemButton className={styles.list} disableRipple>
                    <ListItemText
                      primary={
                        // eslint-disable-next-line react/jsx-wrap-multilines
                        <>
                          Prohibited ingredients:
                          <Box className={styles.subscription_type} component="span">
                            fish, eggs,...
                          </Box>
                        </>
                      }
                    />
                    <ArrowForwardIosIcon className={styles.icons} />
                  </ListItemButton>
                </Link>
                <Divider />

                <ListItemButton className={styles.list} disableRipple>
                  <ListItemText primary="Stop subscription" />
                  <Switch checked={changeLanguage} onChange={handleLanguageChange} disabled />
                </ListItemButton>
                <Divider />
              </List>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4} className={styles.item}>
            <Paper
              className={styles.content__wrapper}
              sx={{
                boxShadow: {
                  xs: 0,
                  md: 1,
                },
              }}
            >
              <Typography className={styles.heading} variant="h6">
                Delivery
              </Typography>

              <List>
                <Link href="/personal-information" className={styles.link}>
                  <ListItemButton className={styles.list} disableRipple>
                    <ListItemText
                      primary={
                        // eslint-disable-next-line react/jsx-wrap-multilines
                        <>
                          Delivery address:
                          <Box className={styles.subscription_type} component="span">
                            home
                          </Box>
                        </>
                      }
                    />
                    <ArrowForwardIosIcon className={styles.icons} />
                  </ListItemButton>
                </Link>
                <Divider />

                <Link href="/personal-information" className={styles.link}>
                  <ListItemButton className={styles.list} disableRipple>
                    <ListItemText
                      primary={
                        // eslint-disable-next-line react/jsx-wrap-multilines
                        <>
                          Delivery time:
                          <Box className={styles.subscription_type} component="span">
                            6-8 am
                          </Box>
                        </>
                      }
                    />
                    <ArrowForwardIosIcon className={styles.icons} />
                  </ListItemButton>
                </Link>
                <Divider />
              </List>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4} className={styles.item}>
            <Paper
              className={styles.content__wrapper}
              sx={{
                boxShadow: {
                  xs: 0,
                  md: 1,
                },
              }}
            >
              <Typography className={styles.heading} variant="h6">
                Support and settings
              </Typography>

              <List>
                <Link href="/personal-information" className={styles.link}>
                  <ListItemButton className={styles.list} disableRipple>
                    <ListItemText primary="Talk to us" />
                    <CallIcon sx={{ mr: 1 }} />
                    <WhatsAppIcon />
                  </ListItemButton>
                </Link>
                <Divider />

                <Link href="/personal-information" className={styles.link}>
                  <ListItemButton className={styles.list} disableRipple>
                    <ListItemText primary="Sign out" />
                    <ArrowForwardIosIcon className={styles.icons} />
                  </ListItemButton>
                </Link>
                <Divider />
              </List>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};

export default Settings;
