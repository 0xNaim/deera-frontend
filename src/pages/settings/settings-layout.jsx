import { Box, Button, Divider, Grid, List, ListItemButton, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import Language from '../../components/Layout/Navbar/Language';
import styles from './settings-layout.module.scss';

const SettingsLayout = ({ children }) => (
  <Grid container>
    <Grid className={styles.sidebar} item xs={0} sm={3} md={2}>
      <Box className={styles.logo__wrapper}>
        <Image src="/assets/logo.svg" alt="" width={140} height={40} />
      </Box>
      <Divider />

      <List className={styles.sidebar__list}>
        <Link className={styles.sidebar__link} href="/">
          <ListItemButton className={styles.sidebar__item}>
            <Typography>Main</Typography>
          </ListItemButton>
        </Link>

        <Link className={styles.sidebar__link} href="/">
          <ListItemButton className={styles.sidebar__item}>
            <Typography>Subscriptions</Typography>
          </ListItemButton>
        </Link>

        <Link className={styles.sidebar__link} href="/">
          <ListItemButton className={styles.sidebar__item}>
            <Typography>Meals</Typography>
          </ListItemButton>
        </Link>

        <Link className={styles.sidebar__link} href="/">
          <ListItemButton className={styles.sidebar__item}>
            <Typography>Help Center</Typography>
          </ListItemButton>
        </Link>

        <Box className={styles.sidebar__link}>
          <ListItemButton disableRipple className={styles.sidebar__item}>
            <Language />
          </ListItemButton>
        </Box>

        <Link className={styles.sidebar__link} href="/">
          <ListItemButton className={styles.sidebar__item}>
            <Button className={styles.sidebar__btn} variant="contained">
              Control Panel
            </Button>
          </ListItemButton>
        </Link>
      </List>
    </Grid>

    <Grid item xs={12} sm={9} md={10}>
      {children}
    </Grid>
  </Grid>
);

export default SettingsLayout;
