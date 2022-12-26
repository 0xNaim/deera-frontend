/* eslint-disable object-curly-newline */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable no-underscore-dangle */
import Image from 'next/image';
import Link from 'next/link';

// import MUI
import { ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';

// import styles
import styles from '../Sidebar.module.scss';

const SingleMenu = ({ image, link, name }) => (
  <ListItemButton className={styles._single_nav}>
    <ListItemIcon className={styles._img_nav}>
      <Image src={image} alt="logo" width={20} height={20} />
    </ListItemIcon>
    <ListItemText
      primary={
        <Link href={link} style={{ textDecoration: 'none' }}>
          <Typography
            variant="h6"
            color="inherit"
            className={styles._single_title}
            sx={{
              color: '#718096',
            }}
          >
            {name}
          </Typography>
        </Link>
      }
    />
  </ListItemButton>
);

export default SingleMenu;
