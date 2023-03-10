/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable object-curly-newline */
import ImportExportIcon from '@mui/icons-material/ImportExport';
import SearchIcon from '@mui/icons-material/Search';
import {
  Box,
  Button,
  Container,
  FormControl,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Pagination,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  ThemeProvider,
} from '@mui/material';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import * as Cookies from '@hooks/cookies';
import dashboardTheme from '@theme/dashboard-theme';
import paginate from '@utils/paginate';
import FCSwitch from '@components/Common/FCSwitch';
import Layout from '@components/Dashboard/Layout/Layout';
import styles from './customers.module.scss';

const Header = dynamic(() => import('@components/Dashboard/common/Header/Header'), {
  ssr: false,
});

const customersData = [
  {
    name: 'Naim Islam',
    startDate: '2/12/2022',
    expiryDate: '12/31/2022',
    mobile: '019xxxxxxxx',
    repitition: 2,
    status: 'Finished',
    checked: false,
  },
  {
    name: 'Naim Islam',
    startDate: '2/12/2022',
    expiryDate: '12/31/2022',
    mobile: '019xxxxxxxx',
    repitition: 2,
    status: 'Finished',
    checked: false,
  },
  {
    name: 'Naim Islam',
    startDate: '2/12/2022',
    expiryDate: '12/31/2022',
    mobile: '019xxxxxxxx',
    repitition: 2,
    status: 'Finished',
    checked: false,
  },
  {
    name: 'Naim Islam',
    startDate: '2/12/2022',
    expiryDate: '12/31/2022',
    mobile: '019xxxxxxxx',
    repitition: 2,
    status: 'Finished',
    checked: false,
  },
  {
    name: 'Naim Islam',
    startDate: '2/12/2022',
    expiryDate: '12/31/2022',
    mobile: '019xxxxxxxx',
    repitition: 2,
    status: 'Finished',
    checked: false,
  },
  {
    name: 'Naim Islam',
    startDate: '2/12/2022',
    expiryDate: '12/31/2022',
    mobile: '019xxxxxxxx',
    repitition: 2,
    status: 'Finished',
    checked: false,
  },
  {
    name: 'Naim Islam',
    startDate: '2/12/2022',
    expiryDate: '12/31/2022',
    mobile: '019xxxxxxxx',
    repitition: 2,
    status: 'Finished',
    checked: false,
  },
  {
    name: 'Naim Islam',
    startDate: '2/12/2022',
    expiryDate: '12/31/2022',
    mobile: '019xxxxxxxx',
    repitition: 2,
    status: 'Finished',
    checked: false,
  },
  {
    name: 'Naim Islam',
    startDate: '2/12/2022',
    expiryDate: '12/31/2022',
    mobile: '019xxxxxxxx',
    repitition: 2,
    status: 'Finished',
    checked: false,
  },
  {
    name: 'Naim Islam',
    startDate: '2/12/2022',
    expiryDate: '12/31/2022',
    mobile: '019xxxxxxxx',
    repitition: 2,
    status: 'Finished',
    checked: false,
  },
  {
    name: 'Naim Islam',
    startDate: '2/12/2022',
    expiryDate: '12/31/2022',
    mobile: '019xxxxxxxx',
    repitition: 2,
    status: 'Finished',
    checked: false,
  },
  {
    name: 'Naim Islam',
    startDate: '2/12/2022',
    expiryDate: '12/31/2022',
    mobile: '019xxxxxxxx',
    repitition: 2,
    status: 'Finished',
    checked: false,
  },
  {
    name: 'Naim Islam',
    startDate: '2/12/2022',
    expiryDate: '12/31/2022',
    mobile: '019xxxxxxxx',
    repitition: 2,
    status: 'Finished',
    checked: false,
  },
  {
    name: 'Naim Islam',
    startDate: '2/12/2022',
    expiryDate: '12/31/2022',
    mobile: '019xxxxxxxx',
    repitition: 2,
    status: 'Finished',
    checked: false,
  },
  {
    name: 'Naim Islam',
    startDate: '2/12/2022',
    expiryDate: '12/31/2022',
    mobile: '019xxxxxxxx',
    repitition: 2,
    status: 'Finished',
    checked: false,
  },
  {
    name: 'Naim Islam',
    startDate: '2/12/2022',
    expiryDate: '12/31/2022',
    mobile: '019xxxxxxxx',
    repitition: 2,
    status: 'Finished',
    checked: false,
  },
  {
    name: 'Naim Islam',
    startDate: '2/12/2022',
    expiryDate: '12/31/2022',
    mobile: '019xxxxxxxx',
    repitition: 2,
    status: 'Finished',
    checked: false,
  },
];

const Customers = () => {
  // Pagination handling
  const [currentPage, setCurrentPage] = useState(1);
  const sizePerPage = 10;
  const totalPage = Math.ceil(customersData.length / sizePerPage);

  const filteredData = paginate(customersData, currentPage, sizePerPage);

  const { t } = useTranslation();
  const currentLanguageCode = Cookies.getLanguage();
  return (
    <ThemeProvider theme={dashboardTheme}>
      <Layout>
        <Header title={t('header:customers')} />

        <Container>
          <Box className={styles.content__wrapper}>
            <Box className={styles.content__header}>
              <Box className={styles.add__coupon__wrapper}>
                <Link className={styles.link} href="/dashboard/customers/add-customer">
                  <Button variant="contained" disableRipple>
                    {/* Add Customers */}
                    {t('dCustomers:add_customers')}
                  </Button>
                </Link>

                <Button variant="outlined" disableRipple>
                  {/* Sort by */}
                  {t('dCustomers:sort_by')}
                  <ImportExportIcon />
                </Button>
              </Box>

              <Box className={styles.search__coupon__wrapper}>
                <FormControl className={styles.search__field}>
                  <OutlinedInput
                    className={styles.search__input}
                    placeholder="Search by customer name"
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton edge="end" disableRipple>
                          <SearchIcon />
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>

                <Button className={styles.search__btn} variant="contained" disableRipple>
                  {/* Search */}
                  {t('dCustomers:search')}
                </Button>
              </Box>
            </Box>

            <TableContainer component={Paper} className={styles.content__table}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell
                      className={styles.table__heading}
                      align={Cookies.getLanguage() === 'en' ? 'left' : 'right'}
                    >
                      {t('dCustomers:name')}
                    </TableCell>
                    <TableCell
                      className={styles.table__heading}
                      align={Cookies.getLanguage() === 'en' ? 'left' : 'right'}
                    >
                      {t('dCustomers:start_date')}
                    </TableCell>
                    <TableCell
                      className={styles.table__heading}
                      align={Cookies.getLanguage() === 'en' ? 'left' : 'right'}
                    >
                      {t('dCustomers:expiry_date')}
                    </TableCell>
                    <TableCell
                      className={styles.table__heading}
                      align={Cookies.getLanguage() === 'en' ? 'left' : 'right'}
                    >
                      {t('dCustomers:mobile')}
                    </TableCell>
                    <TableCell
                      className={styles.table__heading}
                      align={Cookies.getLanguage() === 'en' ? 'left' : 'right'}
                    >
                      {t('dCustomers:repetition')}
                    </TableCell>
                    <TableCell
                      className={styles.table__heading}
                      align={Cookies.getLanguage() === 'en' ? 'left' : 'right'}
                    >
                      {t('dCustomers:status')}
                    </TableCell>
                    <TableCell
                      className={styles.table__heading}
                      align={Cookies.getLanguage() === 'en' ? 'left' : 'right'}
                    >
                      {t('dCustomers:procedures')}
                    </TableCell>
                    <TableCell />
                  </TableRow>
                </TableHead>

                <TableBody>
                  {filteredData?.map((customer) => (
                    <TableRow key={Math.random()}>
                      <TableCell
                        className={styles.table__cell}
                        component="th"
                        scope="row"
                        align={Cookies.getLanguage() === 'en' ? 'left' : 'right'}
                      >
                        {customer?.name}
                      </TableCell>
                      <TableCell
                        className={styles.table__cell}
                        component="th"
                        scope="row"
                        align={Cookies.getLanguage() === 'en' ? 'left' : 'right'}
                      >
                        {customer?.startDate}
                      </TableCell>
                      <TableCell
                        className={styles.table__cell}
                        component="th"
                        scope="row"
                        align={Cookies.getLanguage() === 'en' ? 'left' : 'right'}
                      >
                        {customer?.expiryDate}
                      </TableCell>
                      <TableCell
                        className={styles.table__cell}
                        component="th"
                        scope="row"
                        align={Cookies.getLanguage() === 'en' ? 'left' : 'right'}
                      >
                        {customer?.mobile}
                      </TableCell>
                      <TableCell
                        className={styles.table__cell}
                        component="th"
                        scope="row"
                        align={Cookies.getLanguage() === 'en' ? 'left' : 'right'}
                      >
                        {customer?.repitition}
                      </TableCell>
                      <TableCell
                        className={styles.table__cell}
                        component="th"
                        scope="row"
                        align={Cookies.getLanguage() === 'en' ? 'left' : 'right'}
                      >
                        {customer?.status}
                      </TableCell>
                      <TableCell
                        component="th"
                        scope="row"
                        align={Cookies.getLanguage() === 'en' ? 'left' : 'right'}
                      >
                        <Box
                          className={styles.action__icons}
                          sx={{
                            justifyContent:
                              currentLanguageCode === 'ar' ? 'flex-start' : 'flex-start',
                          }}
                        >
                          <IconButton>
                            <Image
                              src="/assets/viewIcon.svg"
                              width={32}
                              height={32}
                              alt="View Icon"
                            />
                          </IconButton>
                          <IconButton>
                            <Image
                              src="/assets/editIcon.svg"
                              width={18}
                              height={18}
                              alt="Edit Icon"
                            />
                          </IconButton>
                          <IconButton>
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
                        <FCSwitch />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Box className={styles.pagination__wrapper}>
              <Pagination
                onChange={(e, value) => setCurrentPage(value)}
                count={totalPage}
                variant="outlined"
                color="primary"
                shape="rounded"
              />
            </Box>
          </Box>
        </Container>
      </Layout>
    </ThemeProvider>
  );
};

export default Customers;
