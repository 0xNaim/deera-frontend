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
import styles from './coupons.module.scss';

const Header = dynamic(() => import('@components/Dashboard/common/Header/Header'), {
  ssr: false,
});

const couponsData = [
  {
    name: 'Dealcode',
    percentage: 25,
    startDate: '2/12/2022',
    expiryDate: '12/31/2022',
    usageTimes: 34,
    checked: false,
  },
  {
    name: 'Dealcode',
    percentage: 45,
    startDate: '2/12/2022',
    expiryDate: '12/31/2022',
    usageTimes: 65,
    checked: true,
  },
  {
    name: 'Dealcode',
    percentage: 72,
    startDate: '2/12/2022',
    expiryDate: '12/31/2022',
    usageTimes: 24,
    checked: true,
  },
  {
    name: 'Dealcode',
    percentage: 75,
    startDate: '2/12/2022',
    expiryDate: '12/31/2022',
    usageTimes: 15,
    checked: false,
  },
  {
    name: 'Dealcode',
    percentage: 25,
    startDate: '2/12/2022',
    expiryDate: '12/31/2022',
    usageTimes: 34,
    checked: true,
  },
  {
    name: 'Dealcode',
    percentage: 25,
    startDate: '2/12/2022',
    expiryDate: '12/31/2022',
    usageTimes: 45,
    checked: false,
  },
  {
    name: 'Dealcode',
    percentage: 25,
    startDate: '2/12/2022',
    expiryDate: '12/31/2022',
    usageTimes: 34,
    checked: true,
  },
  {
    name: 'Dealcode',
    percentage: 25,
    startDate: '2/12/2022',
    expiryDate: '12/31/2022',
    usageTimes: 34,
    checked: false,
  },
  {
    name: 'Dealcode',
    percentage: 25,
    startDate: '2/12/2022',
    expiryDate: '12/31/2022',
    usageTimes: 34,
    checked: false,
  },
  {
    name: 'Dealcode',
    percentage: 25,
    startDate: '2/12/2022',
    expiryDate: '12/31/2022',
    usageTimes: 34,
    checked: false,
  },
  {
    name: 'Dealcode',
    percentage: 25,
    startDate: '2/12/2022',
    expiryDate: '12/31/2022',
    usageTimes: 34,
    checked: false,
  },
  {
    name: 'Dealcode',
    percentage: 25,
    startDate: '2/12/2022',
    expiryDate: '12/31/2022',
    usageTimes: 34,
    checked: false,
  },
  {
    name: 'Dealcode',
    percentage: 25,
    startDate: '2/12/2022',
    expiryDate: '12/31/2022',
    usageTimes: 34,
    checked: false,
  },
  {
    name: 'Dealcode',
    percentage: 25,
    startDate: '2/12/2022',
    expiryDate: '12/31/2022',
    usageTimes: 34,
    checked: false,
  },
  {
    name: 'Dealcode',
    percentage: 25,
    startDate: '2/12/2022',
    expiryDate: '12/31/2022',
    usageTimes: 34,
    checked: false,
  },
];

const Coupons = () => {
  // Pagination handling
  const [currentPage, setCurrentPage] = useState(1);
  const sizePerPage = 10;
  const totalPage = Math.ceil(couponsData.length / sizePerPage);

  const filteredData = paginate(couponsData, currentPage, sizePerPage);

  const { t } = useTranslation();
  const currentLanguageCode = Cookies.getLanguage();
  return (
    <ThemeProvider theme={dashboardTheme}>
      <Layout>
        <Header title={t('header:coupons')} />

        <Container>
          <Box className={styles.content__wrapper}>
            <Box className={styles.content__header}>
              <Box className={styles.add__coupon__wrapper}>
                <Link className={styles.link} href="/dashboard/coupons/add-coupon">
                  <Button variant="contained" disableRipple>
                    {/* Add Coupon */}
                    {t('dCoupons:add_coupon')}
                  </Button>
                </Link>

                <Button variant="outlined" disableRipple>
                  {t('dCoupons:sortBy')}
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
                  {t('dCoupons:Search')}
                </Button>
              </Box>
            </Box>

            <TableContainer
              component={Paper}
              sx={{ boxShadow: 'none', border: '1px solid #E5E7EB', borderRadius: '8px' }}
              className={styles.content__table}
            >
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell
                      className={styles.table__heading}
                      align={Cookies.getLanguage() === 'en' ? 'left' : 'right'}
                    >
                      {t('dCoupons:Name')}
                    </TableCell>
                    <TableCell
                      className={styles.table__heading}
                      align={Cookies.getLanguage() === 'en' ? 'left' : 'right'}
                    >
                      {t('dCoupons:Percentage')}
                    </TableCell>
                    <TableCell
                      className={styles.table__heading}
                      align={Cookies.getLanguage() === 'en' ? 'left' : 'right'}
                    >
                      {t('dCoupons:Start_Date')}
                    </TableCell>
                    <TableCell
                      className={styles.table__heading}
                      align={Cookies.getLanguage() === 'en' ? 'left' : 'right'}
                    >
                      {t('dCoupons:Expiry_Date')}
                    </TableCell>
                    <TableCell
                      className={styles.table__heading}
                      align={Cookies.getLanguage() === 'en' ? 'left' : 'right'}
                    >
                      {t('dCoupons:Usage_Times')}
                    </TableCell>
                    <TableCell
                      className={styles.table__heading}
                      align={Cookies.getLanguage() === 'en' ? 'left' : 'right'}
                    >
                      {t('dCoupons:Procedures')}
                    </TableCell>
                    <TableCell />
                  </TableRow>
                </TableHead>

                <TableBody>
                  {filteredData?.map((coupon) => (
                    <TableRow key={Math.random()}>
                      <TableCell
                        className={styles.table__cell}
                        component="th"
                        scope="row"
                        align={Cookies.getLanguage() === 'en' ? 'left' : 'right'}
                      >
                        {coupon?.name}
                      </TableCell>
                      <TableCell
                        className={styles.table__cell}
                        component="th"
                        scope="row"
                        align={Cookies.getLanguage() === 'en' ? 'left' : 'right'}
                      >
                        {`${coupon?.percentage}%`}
                      </TableCell>
                      <TableCell
                        className={styles.table__cell}
                        component="th"
                        scope="row"
                        align={Cookies.getLanguage() === 'en' ? 'left' : 'right'}
                      >
                        {coupon?.startDate}
                      </TableCell>
                      <TableCell
                        className={styles.table__cell}
                        component="th"
                        scope="row"
                        align={Cookies.getLanguage() === 'en' ? 'left' : 'right'}
                      >
                        {coupon?.expiryDate}
                      </TableCell>
                      <TableCell
                        className={styles.table__cell}
                        component="th"
                        scope="row"
                        align={Cookies.getLanguage() === 'en' ? 'left' : 'right'}
                      >
                        {coupon?.usageTimes}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        <Box
                          className={styles.action__icons}
                          sx={{
                            justifyContent:
                              currentLanguageCode === 'ar' ? 'flex-start' : 'flex-start',
                          }}
                        >
                          <IconButton>
                            <Image
                              src="/assets/deleteIcon.svg"
                              width={18}
                              height={18}
                              alt="Delete Icon"
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
                        </Box>
                      </TableCell>
                      <TableCell
                        component="th"
                        scope="row"
                        align={Cookies.getLanguage() === 'en' ? 'left' : 'right'}
                      >
                        <FCSwitch checked={coupon?.checked} />
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

export default Coupons;
