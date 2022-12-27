import { IconButton } from '@mui/material';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import * as React from 'react';
import CloseIcon from '../../../Common/CloseIcon/CloseIcon';
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
        sx={{ background: 'red' }}
      >
        <div
          style={{ zIndex: '99999' }}
        >
          <IconButton onClick={toggleDrawer('left', false)} className={styles.closeButton}>
            <CloseIcon />
          </IconButton>
        </div>

        {list('left')}
      </Drawer>
    </div>
  );
};

export default MobileSidebar;
