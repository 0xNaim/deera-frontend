import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CallIcon from '@mui/icons-material/Call';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import {
  Box,
  Container,
  Divider,
  List,
  ListItemButton,
  ListItemText,
  Switch,
  Typography,
} from '@mui/material';
import Link from 'next/link';
import { useState } from 'react';
import SettingsHead from '../../components/Client/head';
import Navbar from '../../components/Layout/Navbar/Navbar';
import SettingsLayout from './settings-layout';
import styles from './settings.module.scss';

const Settings = () => {
  const [changeLanguage, setChangeLanguage] = useState(true);

  // Handle language change
  const handleLanguageChange = (e) => setChangeLanguage(e.target.checked);

  return (
    <>
      <Box className={styles.mobile__menu}>
        <Navbar />
      </Box>

      <SettingsLayout>
        <SettingsHead heading="Settings" />

        <Container>
          <Box className={styles.settings}>
            <Box className={styles.settings__content}>
              <Typography className={styles.heading} variant="h6">
                Your data
              </Typography>

              <List>
                <Link href="/settings/personal-information" className={styles.link}>
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
            </Box>

            <Box className={styles.settings__content}>
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

                <Link href="/settings/personal-information" className={styles.link}>
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

                <Link href="/settings/dislike-list" className={styles.link}>
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
            </Box>

            <Box className={styles.settings__content}>
              <Typography className={styles.heading} variant="h6">
                Delivery
              </Typography>

              <List>
                <Link href="/settings/address" className={styles.link}>
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

                <Link href="/settings/delivery-time" className={styles.link}>
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
            </Box>

            <Box className={styles.settings__content}>
              <Typography className={styles.heading} variant="h6">
                Support and settings
              </Typography>

              <List>
                <Link href="/settings/personal-information" className={styles.link}>
                  <ListItemButton className={styles.list} disableRipple>
                    <ListItemText primary="Talk to us" />
                    <CallIcon sx={{ mr: 1 }} />
                    <WhatsAppIcon />
                  </ListItemButton>
                </Link>
                <Divider />

                <Link href="/settings/personal-information" className={styles.link}>
                  <ListItemButton className={styles.list} disableRipple>
                    <ListItemText primary="Sign out" />
                    <ArrowForwardIosIcon className={styles.icons} />
                  </ListItemButton>
                </Link>
                <Divider />
              </List>
            </Box>
          </Box>
        </Container>
      </SettingsLayout>
    </>
  );
};

export default Settings;
