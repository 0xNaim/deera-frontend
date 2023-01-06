/* eslint-disable no-plusplus */
/* eslint-disable react/button-has-type */
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {
  Button,
  Container,
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
import Link from 'next/link';
import React, { useState } from 'react';
import paginator from '../../../../utils/paginator';
import FCSuccess from '../../../Common/FCSuccess';
import FCSwitch from '../../../Common/FCSwitch';
import { categoryData } from '../../fakedata';
import styles from './MealClassificationTablePage.module.scss';

const MealClassificationTable = () => {
  const [data, setData] = useState(categoryData || []);
  const [success, setSuccess] = useState(false);

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
    <div className={styles.wrapper}>
      {success && <FCSuccess />}
      <Container>
        <div className={styles.header_btn}>
          <Button variant="contained" color="inherit" className={styles.new_button}>
            Add a new category
          </Button>
        </div>
        <div>
          <TableContainer sx={{ border: '1px solid #e5e7eb' }}>
            <Table
              sx={{ minWidth: 500 }}
              aria-label="custom pagination table"
              className={styles.table_wrapper}
            >
              <TableHead className={styles.table_header}>
                <TableRow>
                  <TableCell className={styles.table_h_title}>
                    Classification name in Arabic
                  </TableCell>
                  <TableCell className={styles.table_h_title}>Category name in English</TableCell>
                  <TableCell className={styles.table_h_title}>Procedures</TableCell>

                  <TableCell />
                </TableRow>
              </TableHead>

              <TableBody className={styles.table_body}>
                {paginator(data, page, 5).data.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell component="th" scope="row">
                      <Typography variant="h6" color="inherit" className={styles.table_b_title}>
                        {row.arabic_name}
                      </Typography>
                    </TableCell>
                    <TableCell component="th" scope="row">
                      <Typography variant="h6" color="inherit" className={styles.table_b_title}>
                        {row.english_name}
                      </Typography>
                    </TableCell>
                    <TableCell component="th" scope="row">
                      <Stack
                        direction="row"
                        spacing={1}
                        alignItems="center"
                        className={styles.button_wrapper}
                      >
                        <Link href={`/dashboard/meals/meal-classification-table/${row?.slug}`}>
                          <button>
                            <EditIcon />
                          </button>
                        </Link>
                        <button onClick={() => deleteById(row.id)}>
                          <DeleteIcon />
                        </button>
                      </Stack>
                    </TableCell>
                    <TableCell component="th" scope="row">
                      <FCSwitch value={row?.status} />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <div className={styles.pagination_wrapper}>
            <Pagination
              count={count}
              page={page}
              onChange={handleChange}
              color="success"
              variant="outlined"
              shape="rounded"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MealClassificationTable;
