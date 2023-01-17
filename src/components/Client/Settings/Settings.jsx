/* eslint-disable react/jsx-one-expression-per-line */
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
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import SettingsLayout from '../../../pages/settings/settings-layout';
import Navbar from '../../Layout/Navbar/Navbar';

import styles from './settings.module.scss';
// import SettingsHead from '../head';

const SettingsHead = dynamic(() => import('../head'));

const Settings = () => {
  const { t } = useTranslation();
  const [changeLanguage, setChangeLanguage] = useState(true);

  // Handle language change
  const handleLanguageChange = (e) => setChangeLanguage(e.target.checked);

  return (
    <>
      <Box className={styles.mobile__menu}>
        <Navbar />
      </Box>

      <SettingsLayout>
        <SettingsHead heading={t('settings:Settings')} />

        <Container>
          <Box className={styles.settings}>
            <Box className={styles.settings__content}>
              <Typography className={styles.heading} variant="h6">
                {t('settings:Your_data')}
              </Typography>

              <List>
                <Link href="/settings/personal-information" className={styles.link}>
                  <ListItemButton className={styles.list} disableRipple>
                    <ListItemText primary={t('settings:Your_personal_information')} />
                    <ArrowForwardIosIcon className={styles.icons} />
                  </ListItemButton>
                </Link>
                <Divider />

                <ListItemButton className={styles.list} disableRipple>
                  <ListItemText primary={t('settings:Change_the_language')} />
                  <Switch checked={changeLanguage} onChange={handleLanguageChange} />
                </ListItemButton>
                <Divider />
              </List>
            </Box>

            <Box className={styles.settings__content}>
              <Typography className={styles.heading} variant="h6">
                {t('settings:Subscription')}
              </Typography>

              <List>
                <ListItemButton className={styles.list} disableRipple>
                  <ListItemText
                    primary={
                      // eslint-disable-next-line react/jsx-wrap-multilines
                      <>
                        {t('settings:Subscription_type')}:
                        <Box className={styles.subscription_type} component="span">
                          {t('settings:protien')}
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
                        {t('settings:Package_type')}:
                        <Box className={styles.subscription_type} component="span">
                          {t('settings:3_snacks')}
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
                          {t('settings:Remaining_time')}:
                          <Box className={styles.subscription_type} component="span">
                            {t('settings:13_days')}
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
                          {t('settings:Prohibited_ingredients')}:
                          <Box className={styles.subscription_type} component="span">
                            {t('settings:fish_eggs')},...
                          </Box>
                        </>
                      }
                    />
                    <ArrowForwardIosIcon className={styles.icons} />
                  </ListItemButton>
                </Link>
                <Divider />

                <ListItemButton className={styles.list} disableRipple>
                  <ListItemText primary={t('settings:Stop_subscription')} />
                  <Switch checked={changeLanguage} onChange={handleLanguageChange} disabled />
                </ListItemButton>
                <Divider />
              </List>
            </Box>

            <Box className={styles.settings__content}>
              <Typography className={styles.heading} variant="h6">
                {t('settings:Delivery')}
              </Typography>

              <List>
                <Link href="/settings/address" className={styles.link}>
                  <ListItemButton className={styles.list} disableRipple>
                    <ListItemText
                      primary={
                        // eslint-disable-next-line react/jsx-wrap-multilines
                        <>
                          {t('settings:Delivery_address')}:
                          <Box className={styles.subscription_type} component="span">
                            {t('settings:home')}
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
                          {t('settings:Delivery_time')}:
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
                {t('settings:Support_and_settings')}
              </Typography>

              <List>
                <Link href="/settings/personal-information" className={styles.link}>
                  <ListItemButton className={styles.list} disableRipple>
                    <ListItemText primary={t('settings:Talk_to_us')} />
                    <CallIcon sx={{ mr: 1 }} />
                    <WhatsAppIcon />
                  </ListItemButton>
                </Link>
                <Divider />

                <Link href="/settings/personal-information" className={styles.link}>
                  <ListItemButton className={styles.list} disableRipple>
                    <ListItemText primary={t('settings:Sign_out')} />
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
