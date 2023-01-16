/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-plusplus */
/* eslint-disable react/button-has-type */
import {
  Box,
  Button,
  Container,
  IconButton,
  Pagination,
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
import { useTranslation } from 'react-i18next';
import * as Cookies from '../../../hooks/cookies';
import paginator from '../../../utils/paginator';
import FCSuccess from '../../Common/FCSuccess';
import FCSwitch from '../../Common/FCSwitch';
import { subscriptionData } from '../fakedata';
import styles from './Subscription.module.scss';

const SubscriptionTable = () => {
  const { t } = useTranslation();
  const [data, setData] = useState(subscriptionData || []);
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

  const currentLanguageCode = Cookies.getLanguage();
  return (
    <div className={styles.wrapper}>
      {success && <FCSuccess />}
      <Container>
        <div className={styles.header_btn}>
          <Link href="/dashboard/subscriptions/new-subscription" style={{ textDecoration: 'none' }}>
            <Button variant="contained" color="inherit" className={styles.new_button}>
              {/* Add a new subscription */}
              {t('dSubscription:Add_new_subscription')}
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
                  <TableCell className={styles.table_h_title}>{t('dSubscription:Image')}</TableCell>
                  <TableCell className={styles.table_h_title}>
                    {t('dSubscription:Arabic_name')}
                  </TableCell>
                  <TableCell className={styles.table_h_title}>
                    {t('dSubscription:English_name')}
                  </TableCell>
                  <TableCell className={styles.table_h_title}>
                    {t('dSubscription:packages')}
                  </TableCell>
                  <TableCell className={styles.table_h_title}>
                    {t('dSubscription:Procedures')}
                  </TableCell>

                  <TableCell />
                </TableRow>
              </TableHead>

              <TableBody className={styles.table_body}>
                {paginator(data, page, 5).data.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell component="th" scope="row">
                      <Image
                        src={row?.image}
                        alt={row?.english_name}
                        width={110}
                        height={73}
                        style={{ objectFit: 'contain' }}
                      />
                    </TableCell>
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
                        {row.packages} packages
                      </Typography>
                    </TableCell>
                    <TableCell component="th" scope="row">
                      <Box
                        className={styles.button_wrapper}
                        sx={{ justifyContent: currentLanguageCode === 'ar' ? 'end' : 'start' }}
                      >
                        <Link href={`/dashboard/meals/meal-classification-table/${row?.slug}`}>
                          <IconButton>
                            <Image
                              src="/assets/editIcon.svg"
                              width={18}
                              height={18}
                              alt="Delete Icon"
                            />
                          </IconButton>
                        </Link>

                        <IconButton onClick={() => deleteById(row.id)}>
                          <Image
                            src="/assets/deleteIcon.svg"
                            width={18}
                            height={18}
                            alt="Delete Icon"
                          />
                        </IconButton>
                      </Box>
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

export default SubscriptionTable;
