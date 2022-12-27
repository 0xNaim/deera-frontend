/* eslint-disable object-curly-newline */
/* eslint-disable react/destructuring-assignment */
import MenuIcon from '@mui/icons-material/Menu';
import { Box, Button, Collapse, IconButton, List, Stack, Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';
import Language from './Language';
import styles from './Navbar.module.scss';

function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const Navbar = (props) => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar className={styles.appBarWrapper}>
          <Toolbar>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              className={styles.navWrapper}
            >
              <Box className={styles.leftNav}>
                <Image src="/assets/logo.svg" alt="" width={150} height={40} />
              </Box>
              <div className={styles.menuOpenButton}>
                <IconButton onClick={handleClick}>
                  <MenuIcon />
                </IconButton>
              </div>
              <Box className={styles.rightNav}>
                <Stack direction="row" spacing={4} alignItems="center">
                  <Box className={styles.singleMenu}>
                    <Link href="/">
                      <Typography variant="subtitle1" color="inherit">
                        Main
                      </Typography>
                    </Link>
                  </Box>
                  <Box className={styles.singleMenu}>
                    <Link href="/subscription">
                      <Typography variant="subtitle1" color="inherit">
                        Subscription
                      </Typography>
                    </Link>
                  </Box>
                  <Box className={styles.singleMenu}>
                    <Link href="/meals">
                      <Typography variant="subtitle1" color="inherit">
                        Meals
                      </Typography>
                    </Link>
                  </Box>
                  <Box className={styles.singleMenu}>
                    <Link href="/help-center">
                      <Typography variant="subtitle1" color="inherit">
                        Help Center
                      </Typography>
                    </Link>
                  </Box>
                  <Box className={styles.singleMenu}>
                    <Language />
                  </Box>
                  <Box className={styles.singleMenu}>
                    <Link href="/control-panel">
                      <Button variant="contained" color="inherit">
                        Control Panel
                      </Button>
                    </Link>
                  </Box>
                </Stack>
              </Box>
            </Stack>
          </Toolbar>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <Box className={styles.mobileNav}>
                <Stack direction="column" spacing={0} alignItems="center">
                  <Box className={styles.singleMenu}>
                    <Link href="/">
                      <Typography variant="subtitle1" color="inherit">
                        Main
                      </Typography>
                    </Link>
                  </Box>
                  <Box className={styles.singleMenu}>
                    <Link href="/subscription">
                      <Typography variant="subtitle1" color="inherit">
                        Subscription
                      </Typography>
                    </Link>
                  </Box>
                  <Box className={styles.singleMenu}>
                    <Link href="/meals">
                      <Typography variant="subtitle1" color="inherit">
                        Meals
                      </Typography>
                    </Link>
                  </Box>
                  <Box className={styles.singleMenu}>
                    <Link href="/help-center">
                      <Typography variant="subtitle1" color="inherit">
                        Help Center
                      </Typography>
                    </Link>
                  </Box>
                  <Box className={styles.singleMenu}>
                    <Language />
                  </Box>
                  <Box className={styles.singleMenu}>
                    <Link href="/control-panel">
                      <Button variant="contained" color="inherit">
                        Control Panel
                      </Button>
                    </Link>
                  </Box>
                </Stack>
              </Box>
            </List>
          </Collapse>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
      <Box>{props.children}</Box>
    </>
  );
};

export default Navbar;
