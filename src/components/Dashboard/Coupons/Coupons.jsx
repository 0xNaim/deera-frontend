/* eslint-disable object-curly-newline */
import ImportExportIcon from '@mui/icons-material/ImportExport';
import SearchIcon from '@mui/icons-material/Search';
import {
  Box,
  Button,
  Container,
  IconButton,
  InputBase,
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
import { alpha, styled } from '@mui/material/styles';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import * as Cookies from '../../../hooks/cookies';
import dashboardTheme from '../../../theme/dashboard-theme';
import paginate from '../../../utils/paginate';
import FCSwitch from '../../Common/FCSwitch';
import Layout from '../Layout/Layout';
import styles from './coupons.module.scss';

const Header = dynamic(() => import('../common/Header/Header'), {
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
                <Search>
                  <SearchIconWrapper>
                    <SearchIcon sx={{ color: '#6B7280' }} />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder={t('dCoupons:Search_by_coupon_name')}
                    inputProps={{ 'aria-label': 'search' }}
                  />
                </Search>

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
                    <TableCell className={styles.table__heading}>{t('dCoupons:Name')}</TableCell>
                    <TableCell className={styles.table__heading}>
                      {t('dCoupons:Percentage')}
                    </TableCell>
                    <TableCell className={styles.table__heading}>
                      {t('dCoupons:Start_Date')}
                    </TableCell>
                    <TableCell className={styles.table__heading}>
                      {t('dCoupons:Expiry_Date')}
                    </TableCell>
                    <TableCell className={styles.table__heading}>
                      {t('dCoupons:Usage_Times')}
                    </TableCell>
                    <TableCell className={styles.table__heading}>
                      {t('dCoupons:Procedures')}
                    </TableCell>
                    <TableCell />
                  </TableRow>
                </TableHead>

                <TableBody>
                  {filteredData?.map((coupon) => (
                    <TableRow key={Math.random()}>
                      <TableCell className={styles.table__cell} component="th" scope="row">
                        {coupon?.name}
                      </TableCell>
                      <TableCell className={styles.table__cell} component="th" scope="row">
                        {`${coupon?.percentage}%`}
                      </TableCell>
                      <TableCell className={styles.table__cell} component="th" scope="row">
                        {coupon?.startDate}
                      </TableCell>
                      <TableCell className={styles.table__cell} component="th" scope="row">
                        {coupon?.expiryDate}
                      </TableCell>
                      <TableCell className={styles.table__cell} component="th" scope="row">
                        {coupon?.usageTimes}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        <Box
                          className={styles.action__icons}
                          sx={{
                            justifyContent:
                              currentLanguageCode === 'ar' ? 'flex-end' : 'flex-start',
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
                      <TableCell component="th" scope="row">
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
