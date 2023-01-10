/* eslint-disable no-underscore-dangle */
import Image from 'next/image';
import React from 'react';

// import MUI
import { Avatar, Box, Container, Stack, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

// import styles
import styles from './Header.module.scss';

const Header = ({ title }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box component="div" className={styles._wrapper}>
      <Container>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography variant="h5" color="inherit" className={styles._title}>
            {/* Main */}
            {title && title}
          </Typography>

          <div>
            <Button
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
              disableRipple
            >
              <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={1}>
                <Avatar sx={{ width: 40, height: 40 }}>
                  <Image src="/assets/sonjoy.png" alt="logo" width={35} height={35} />
                </Avatar>

                <Typography variant="h5" color="inherit" className={styles._subtitle}>
                  Sonjoy barman
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
          </div>
        </Stack>
      </Container>
    </Box>
  );
};

export default Header;
