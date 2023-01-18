/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable no-underscore-dangle */
import Image from 'next/image';
import React from 'react';

// import MUI
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, Box, Container, Stack, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import useMediaQuery from '@mui/material/useMediaQuery';
import * as Cookies from '../../../../hooks/cookies';

// import styles
import SliceText from '../../../../utils/SliceText';
import Language from '../../../Layout/Navbar/Language';
import MobileSidebar from '../../Layout/MobileSidebar/MobileSidebar';
import styles from './Header.module.scss';

const Header = ({ title }) => {
  const matches = useMediaQuery('(max-width:600px)');
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const currentLanguageCode = Cookies.getLanguage();

  return (
    <Box component="div" className={styles._wrapper}>
      <Container>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <div className={styles._mobile_nav_wrapper}>
              <MobileSidebar
                buttonContent={
                  <div className={styles.menuWrapper}>
                    <MenuIcon />
                  </div>
                }
              />
            </div>
            <Typography variant="h5" color="inherit" className={styles._title}>
              {matches ? <SliceText number={20}>{title}</SliceText> : title}
            </Typography>
          </Box>

          <Stack direction="row" spacing={1} alignItems="center">
            <Language />
            <Button
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
              disableRipple
            >
              <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={1}>
                <Avatar
                  sx={{
                    width: { md: 40, sm: 30, xs: 25 },
                    height: { md: 40, sm: 30, xs: 25 },
                    marginLeft: currentLanguageCode === 'ar' && 1,
                  }}
                >
                  <Image src="/assets/sonjoy.png" alt="logo" width={35} height={35} />
                </Avatar>

                <Typography variant="h5" color="inherit" className={styles._subtitle}>
                  {matches ? <SliceText number={6}>Sonjoy barman</SliceText> : 'Sonjoy barman'}
                </Typography>
                <Image src="/assets/down.svg" alt="logo" width={20} height={20} />
              </Stack>
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{ 'aria-labelledby': 'basic-button' }}
            >
              <MenuItem sx={{ width: '200px', maxWidth: '200px' }} onClick={handleClose}>
                Profile
              </MenuItem>
              <MenuItem sx={{ width: '200px', maxWidth: '200px' }} onClick={handleClose}>
                My account
              </MenuItem>
              <MenuItem sx={{ width: '200px', maxWidth: '200px' }} onClick={handleClose}>
                Logout
              </MenuItem>
            </Menu>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Header;
