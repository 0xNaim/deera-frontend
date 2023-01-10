/* eslint-disable object-curly-newline */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable no-underscore-dangle */
// import next js
import Link from 'next/link';
import React from 'react';
// mui
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import {
  Collapse,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';

import { useRouter } from 'next/router';
// import scss
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../Sidebar.module.scss';

const DropDownMenu = ({ handleClick, open, icon, name, menus, pageLink }) => {
  const { pathname } = useRouter();
  return (
    <>
      <ListItemButton
        sx={{
          background: pathname === pageLink ? '#684cf9' : 'transparent',
          borderRadius: '12px',
        }}
        className={styles._single_nav}
      >
        <ListItemIcon className={styles._img_nav}>
          {/* <Image src={image} alt="logo" width={20} height={20} /> */}
          <FontAwesomeIcon
            icon={icon}
            color={pathname === pageLink ? '#fff' : '#718096'}
            style={{ fontSize: '18px', marginTop: '-3px' }}
          />
        </ListItemIcon>
        <ListItemText
          primary={
            <Link href={pageLink} style={{ textDecoration: 'none' }}>
              <Typography
                variant="h6"
                color="inherit"
                className={styles._single_title}
                sx={{
                  color: pathname === pageLink ? '#fff' : '#718096',
                }}
              >
                {name}
              </Typography>
            </Link>
          }
        />

        {open ? (
          <IconButton onClick={handleClick} sx={{ padding: '0' }}>
            <ExpandLess />
          </IconButton>
        ) : (
          <IconButton onClick={handleClick} sx={{ padding: '0' }}>
            <ExpandMore />
          </IconButton>
        )}
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
};

export default DropDownMenu;
