/* eslint-disable no-plusplus */
/* eslint-disable import/no-unresolved */
/* eslint-disable camelcase */
/* eslint-disable import/extensions */
/* eslint-disable react/button-has-type */
/* eslint-disable no-underscore-dangle */
import Image from 'next/image';
import React, { useState } from 'react';

// import MUI
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import {
  Box,
  Button,
  Fade,
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

// import components
import FCSuccess from '../../../Common/FCSuccess';
import FCSwitch from '../../../Common/FCSwitch';

// import data
import mealsTableData from '../fakedata';

// import styles
import styles from './Table.module.scss';

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

  return (
    <div className={styles._wrapper}>
      {success && <FCSuccess />}
      <Stack
        direction={{ sm: 'row', xs: 'column' }}
        justifyContent="flex-end"
        alignItems="center"
        spacing={1}
        className={styles._header_wrapper}
      >
        <Button variant="contained" color="inherit" className={styles._header_meal_button}>
          Add a Meal
        </Button>
        <div>
          <Button
            className={styles._header_meal_dropdown_button}
            id="fade-button"
            aria-controls={open ? 'fade-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            Sort by
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
            Choose the category
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
                <TableCell className={styles._table_h_title}>Meal Picture</TableCell>
                <TableCell className={styles._table_h_title}>Arabic Name</TableCell>
                <TableCell className={styles._table_h_title}>English Name</TableCell>
                <TableCell className={styles._table_h_title}>Category</TableCell>
                <TableCell className={styles._table_h_title}>Calories</TableCell>
                <TableCell className={styles._table_h_title}>Procedures</TableCell>
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
                    <Stack
                      direction="row"
                      spacing={1}
                      alignItems="center"
                      className={styles._button_wrapper}
                    >
                      <button>
                        <EditIcon />
                      </button>
                      <button onClick={() => deleteById(row.id)}>
                        <DeleteIcon />
                      </button>
                    </Stack>
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
        count={count}
        page={page}
        onChange={handleChange}
        color="success"
        variant="outlined"
        shape="rounded"
      />
    </div>
  );
};

export default CustomTable;
