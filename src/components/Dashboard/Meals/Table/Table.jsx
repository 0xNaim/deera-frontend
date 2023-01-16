/* eslint-disable no-plusplus */
/* eslint-disable import/no-unresolved */
/* eslint-disable camelcase */
/* eslint-disable import/extensions */
/* eslint-disable react/button-has-type */
/* eslint-disable no-underscore-dangle */
import Image from 'next/image';
import React, { useState } from 'react';

// import MUI
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import {
  Box,
  Button,
  Container,
  Fade,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  Pagination,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { alpha, styled } from '@mui/material/styles';

// import components
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import * as Cookies from '../../../../hooks/cookies';
import FCSuccess from '../../../Common/FCSuccess';
import FCSwitch from '../../../Common/FCSwitch';

// import data
import mealsTableData from '../fakedata';

// import styles
import styles from './Table.module.scss';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': { backgroundColor: alpha(theme.palette.common.white, 0.25) },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('md')]: {
    // marginLeft: theme.spacing(0),
    width: '18rem',
  },
  border: '1px solid #9CA3AF',
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  right: 0,
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1),
    // vertical padding + font size from searchIcon
    paddingRight: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
  },
}));

function paginator(items, current_page, per_page_items) {
  const page = current_page || 1;
  const per_page = per_page_items || 1;
  const offset = (page - 1) * per_page;
  const paginatedItems = items.slice(offset).slice(0, per_page_items);
  const total_pages = Math.ceil(items.length / per_page);

  return {
    page,
    per_page,
    pre_page: page - 1 ? page - 1 : null,
    next_page: total_pages > page ? page + 1 : null,
    total: items.length,
    total_pages,
    data: paginatedItems,
  };
}

const CustomTable = () => {
  const { t } = useTranslation();
  const [data, setData] = useState(mealsTableData || []);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [success, setSuccess] = useState(false);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  // const [data, setData] = React.useState(rows || []);
  const count = Math.ceil(data.length / 5);
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(paginator(data, value, 1).page);
  };

  const deleteById = (id) => {
    for (let i = 0; i < data.length; i++) {
      if (data[i].id === id) {
        data.splice(i, 1);
        break;
      }
    }
    setData([...data]);
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
    }, 3000);
  };

  const currentLanguageCode = Cookies.getLanguage();

  return (
    <div className={styles._wrapper}>
      <Container>
        {success && <FCSuccess />}
        <Stack
          direction={{ sm: 'row', xs: 'column' }}
          justifyContent="flex-end"
          spacing={1}
          className={styles._header_wrapper}
        >
          <Link href="/dashboard/meals/add-meals" style={{ textDecoration: 'none' }}>
            <Button
              variant="contained"
              color="inherit"
              className={styles._header_meal_button}
              fullWidth
            >
              {t('dMeals:Add_Meal')}
            </Button>
          </Link>
          <div>
            <Button
              className={styles._header_meal_dropdown_button}
              id="fade-button"
              aria-controls={open ? 'fade-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            >
              {/* Sort by */}
              {t('dMeals:Sort_by')}
              <SwapVertIcon />
            </Button>
            <Menu
              id="fade-menu"
              MenuListProps={{ 'aria-labelledby': 'fade-button' }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              TransitionComponent={Fade}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </div>
          <div>
            <Button
              className={styles._header_meal_dropdown_button}
              id="fade-button"
              aria-controls={open ? 'fade-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            >
              {/* Choose the category */}
              {t('dMeals:Choose_the_category')}
              <KeyboardArrowDownIcon />
            </Button>
            <Menu
              id="fade-menu"
              MenuListProps={{ 'aria-labelledby': 'fade-button' }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              TransitionComponent={Fade}
            >
              <MenuItem sx={{ width: '200px' }} onClick={handleClose}>
                Profile
              </MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </div>
          <Box className={styles.search__coupon__wrapper}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon sx={{ color: '#6B7280' }} />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder={t('dMeals:Search_by_meals_name')}
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>

            <Button className={styles.search__btn} variant="contained" disableRipple>
              {t('dMeals:Search')}
            </Button>
          </Box>
        </Stack>
        <Box>
          {/* <TableContainer component={Paper}> */}
          <TableContainer sx={{ border: '1px solid #e5e7eb' }}>
            <Table
              sx={{ minWidth: 500 }}
              aria-label="custom pagination table"
              className={styles._table_wrapper}
            >
              <TableHead className={styles._table_header}>
                <TableRow>
                  <TableCell className={styles._table_h_title}>
                    {t('dMeals:Meal_Picture')}
                  </TableCell>
                  <TableCell className={styles._table_h_title}>{t('dMeals:Arabic_Name')}</TableCell>
                  <TableCell className={styles._table_h_title}>
                    {t('dMeals:English_Name')}
                  </TableCell>
                  <TableCell className={styles._table_h_title}>{t('dMeals:Category')}</TableCell>
                  <TableCell className={styles._table_h_title}>{t('dMeals:Calories')}</TableCell>
                  <TableCell className={styles._table_h_title}>{t('dMeals:Procedures')}</TableCell>
                  <TableCell />
                </TableRow>
              </TableHead>

              <TableBody className={styles._table_body}>
                {paginator(data, page, 5).data.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell component="th" scope="row">
                      <Image
                        src={row.meal_picture}
                        alt="meal_picture"
                        width={111}
                        height={73}
                        style={{
                          objectFit: 'contain',
                          borderRadius: '8px',
                          overflow: 'hidden',
                        }}
                        className={styles.tableImg}
                      />
                    </TableCell>
                    <TableCell component="th" scope="row">
                      <Typography variant="h6" color="inherit" className={styles._table_b_title}>
                        {row.arabic_name}
                      </Typography>
                    </TableCell>
                    <TableCell component="th" scope="row">
                      <Typography variant="h6" color="inherit" className={styles._table_b_title}>
                        {row.english_name}
                      </Typography>
                    </TableCell>
                    <TableCell component="th" scope="row">
                      <Typography variant="h6" color="inherit" className={styles._table_b_title}>
                        {row.category}
                      </Typography>
                    </TableCell>
                    <TableCell component="th" scope="row">
                      <Typography variant="h6" color="inherit" className={styles._table_b_title}>
                        {row.calories}
                      </Typography>
                    </TableCell>
                    <TableCell component="th" scope="row">
                      <Box
                        className={styles._button_wrapper}
                        sx={{ justifyContent: currentLanguageCode === 'ar' ? 'end' : 'start' }}
                      >
                        <IconButton>
                          <Image
                            src="/assets/editIcon.svg"
                            width={18}
                            height={18}
                            alt="Edit Icon"
                          />
                        </IconButton>

                        <IconButton onClick={() => deleteById(row.id)}>
                          <Image
                            src="/assets/deleteIcon.svg"
                            width={18}
                            height={18}
                            alt="Edit Icon"
                          />
                        </IconButton>
                      </Box>
                    </TableCell>
                    <TableCell component="th" scope="row">
                      <FCSwitch />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>

        <br />
        <br />

        <Pagination
          // sx={{}}
          count={count}
          page={page}
          onChange={handleChange}
          color="primary"
          variant="outlined"
          shape="rounded"
        />
        <br />
        <br />
      </Container>
    </div>
  );
};

export default CustomTable;
