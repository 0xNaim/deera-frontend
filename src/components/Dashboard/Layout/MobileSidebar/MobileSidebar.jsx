import { Divider, IconButton } from '@mui/material';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Image from 'next/image';
import * as React from 'react';
import CloseIcon from '@components/Common/CloseIcon/CloseIcon';
import Sidebar from '../Sidebar/Sidebar';
import styles from './MobileSidebar.module.scss';

const MobileSidebar = ({ buttonContent }) => {
  const [state, setState] = React.useState({ left: false });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }} role="presentation">
      <Sidebar />
    </Box>
  );

  return (
    <div>
      <Box onClick={toggleDrawer('left', true)}>{buttonContent}</Box>
      <Drawer
        anchor="left"
        open={state.left}
        onClose={toggleDrawer('left', false)}
        className={styles.MobileSidebar}
      >
        <Box style={{ zIndex: '99999', display: 'flex', justifyContent: 'space-between' }}>
          <Image src="/assets/Header.svg" alt="logo" width={150} height={60} />
          <IconButton onClick={toggleDrawer('left', false)} className={styles.closeButton}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider />

        {list('left')}
      </Drawer>
    </div>
  );
};

export default MobileSidebar;
