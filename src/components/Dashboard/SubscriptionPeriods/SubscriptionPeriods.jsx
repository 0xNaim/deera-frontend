/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-plusplus */
/* eslint-disable react/button-has-type */
import {
  Button,
  Container,
  IconButton,
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
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import paginator from '../../../utils/paginator';
import FCSuccess from '../../Common/FCSuccess';
import FCSwitch from '../../Common/FCSwitch';
import { subscriptionPeriodsData } from '../fakedata';
import styles from './SubscriptionPeriods.module.scss';

const SubscriptionPeriods = () => {
  const [data, setData] = useState(subscriptionPeriodsData || []);
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
          <Link href="/dashboard/subscriptions/new-period" style={{ textDecoration: 'none' }}>
            <Button variant="contained" color="inherit" className={styles.new_button}>
              Add a new period
            </Button>
          </Link>
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
                  <TableCell className={styles.table_h_title}>Arabic name</TableCell>
                  <TableCell className={styles.table_h_title}>English name</TableCell>
                  <TableCell className={styles.table_h_title}>Days</TableCell>
                  <TableCell className={styles.table_h_title}>Consult number</TableCell>
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
                      <Typography variant="h6" color="inherit" className={styles.table_b_title}>
                        {row.days}
                      </Typography>
                    </TableCell>
                    <TableCell component="th" scope="row">
                      <Typography variant="h6" color="inherit" className={styles.table_b_title}>
                        {row.consult_number}
                      </Typography>
                    </TableCell>
                    <TableCell component="th" scope="row">
                      <Stack
                        direction="row"
                        spacing={1}
                        alignItems="center"
                        className={styles.button_wrapper}
                      >
                        <IconButton>
                          <Image
                            src="/assets/editIcon.svg"
                            width={18}
                            height={18}
                            alt="Delete Icon"
                          />
                        </IconButton>

                        <IconButton onClick={() => deleteById(row.id)}>
                          <Image
                            src="/assets/deleteIcon.svg"
                            width={18}
                            height={18}
                            alt="Delete Icon"
                          />
                        </IconButton>
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
              variant="outlined"
              shape="rounded"
              color="primary"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SubscriptionPeriods;
