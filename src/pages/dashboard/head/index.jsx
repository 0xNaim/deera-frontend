import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { Avatar, Badge, Box, Container, Divider, Menu, MenuItem, Typography } from '@mui/material';
import { useState } from 'react';
import styles from './dashboard-head.module.scss';

const DashboardHead = ({ heading }) => {
  const [adminMenu, setAdminMenu] = useState(false);

  // Handle open admin menu
  const handleOpenAdminMenu = () => setAdminMenu(true);

  // Handle close admin menu
  const handleCloseAdminMenu = () => setAdminMenu(false);

  return (
    <>
      <Container>
        <Box className={styles.head__wrapper}>
          <Typography className={styles.head__title} variant="h5">
            {heading}
          </Typography>

          <Box className={styles.account__wrapper}>
            <Box className={styles.notice__wrapper}>
              <Typography>Notices</Typography>
              <Box className={styles.notice__badge} component="span">
                <Badge color="error" variant="dot">
                  <NotificationsNoneOutlinedIcon className={styles.notice__icon} />
                </Badge>
              </Box>
            </Box>

            <Box className={styles.account__info}>
              <Typography>Naim Islam</Typography>
              <Box onClick={handleOpenAdminMenu} className={styles.avatar__wrapper}>
                <Avatar className={styles.avatar} variant="rounded" />
                <KeyboardArrowDownIcon />
              </Box>

              <Menu
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={adminMenu}
                onClose={handleCloseAdminMenu}
              >
                <MenuItem>
                  <Typography textAlign="center">Item 1</Typography>
                </MenuItem>
                <MenuItem>
                  <Typography textAlign="center">Item 2</Typography>
                </MenuItem>
              </Menu>
            </Box>
          </Box>
        </Box>
      </Container>
      <Divider />
    </>
  );
};

export default DashboardHead;
