/* eslint-disable object-curly-newline */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable no-underscore-dangle */
// import next js
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
// mui
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
// import scss
import styles from '../Sidebar.module.scss';

const DropDownMenu = ({ handleClick, open, image, name, menus }) => (
  <>
    <ListItemButton
      sx={{
        background: open ? '#684CF9' : 'transparent',
        borderRadius: '12px',
      }}
      className={styles._single_nav}
      onClick={handleClick}
    >
      <ListItemIcon className={styles._img_nav}>
        <Image src={image} alt="logo" width={20} height={20} />
      </ListItemIcon>
      <ListItemText
        primary={
          <Typography
            variant="h6"
            color="inherit"
            className={styles._single_title}
            sx={{
              color: open ? '#fff' : '#718096',
            }}
          >
            {name}
          </Typography>
        }
      />
      {open ? <ExpandLess /> : <ExpandMore />}
    </ListItemButton>

    <Collapse in={open} timeout="auto" unmountOnExit>
      <List component="div" disablePadding className={styles._collapse_box}>
        {menus?.map((el) => (
          <ListItemButton key={el.id} className={styles._single_nav}>
            <ListItemText
              primary={
                <Link href={el.link} style={{ textDecoration: 'none' }}>
                  <Typography variant="h6" color="inherit" className={styles._single_title}>
                    {el.name}
                  </Typography>
                </Link>
              }
            />
          </ListItemButton>
        ))}
      </List>
    </Collapse>
  </>
);

export default DropDownMenu;
