/* eslint-disable object-curly-newline */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable no-underscore-dangle */

import Link from 'next/link';

import { useRouter } from 'next/router';
// import MUI
import { ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';

// import styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../Sidebar.module.scss';

const SingleMenu = ({ icon, link, name }) => {
  const { pathname } = useRouter();
  return (
    <ListItemButton
      className={styles._single_nav}
      sx={{ background: pathname === link ? '#684cf9' : 'transparent' }}
    >
      <ListItemIcon className={styles._img_nav}>
        {/* <Image src={image} alt="logo" width={20} height={20} /> */}
        <FontAwesomeIcon
          icon={icon}
          color={pathname === link ? '#fff' : '#718096'}
          style={{ fontSize: '18px', marginTop: '-3px' }}
        />
      </ListItemIcon>
      <ListItemText
        primary={
          <Link href={link} style={{ textDecoration: 'none' }}>
            <Typography
              variant="h6"
              color="inherit"
              className={styles._single_title}
              sx={{
                color: pathname === link ? '#fff' : '#718096',
              }}
            >
              {name}
            </Typography>
          </Link>
        }
      />
    </ListItemButton>
  );
};

export default SingleMenu;
