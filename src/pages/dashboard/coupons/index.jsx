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
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import FCSwitch from '../../../components/Common/FCSwitch';
import Header from '../../../components/Dashboard/common/Header/Header';
import Layout from '../../../components/Dashboard/Layout/Layout';
import dashboardTheme from '../../../theme/dashboard-theme';
import paginate from '../../../utils/paginate';
import styles from './coupons.module.scss';

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
  [theme.breakpoints.down('md')]: {
    marginLeft: theme.spacing(0),
    width: '10rem',
  },
  border: '1px solid #F3F4F6',
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

  return (
    <ThemeProvider theme={dashboardTheme}>
      <Layout>
        {/* <DashboardHead heading="Coupons" /> */}
        <Header title="Coupons" />

        <Container>
          <Box className={styles.content__wrapper}>
            <Box className={styles.content__header}>
              <Box className={styles.add__coupon__wrapper}>
                <Link className={styles.link} href="/dashboard/coupon/add-coupon">
                  <Button
                    variant="contained"
                    sx={{ color: '#F3F0FF', fontSize: '16px', padding: '12px 12px' }}
                  >
                    Add Coupon
                  </Button>
                </Link>

                <Button
                  variant="outlined"
                  sx={{ color: '#4B5563', fontSize: '14px', padding: '10px 12px' }}
                >
                  Sort by
                  <ImportExportIcon />
                </Button>
              </Box>

              <Box className={styles.search__coupon__wrapper}>
                <Search>
                  <SearchIconWrapper>
                    <SearchIcon sx={{ color: '#6B7280' }} />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Search by customer name"
                    inputProps={{ 'aria-label': 'search' }}
                  />
                </Search>

                <Button className={styles.search__btn} variant="contained">
                  Search
                </Button>
              </Box>
            </Box>

            <TableContainer component={Paper} className={styles.content__table}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Percentage</TableCell>
                    <TableCell>Start Date</TableCell>
                    <TableCell>Expiry Date</TableCell>
                    <TableCell>Usage Times</TableCell>
                    <TableCell>Procedures</TableCell>
                    <TableCell />
                  </TableRow>
                </TableHead>

                <TableBody>
                  {filteredData?.map((coupon) => (
                    <TableRow key={Math.random()}>
                      <TableCell component="th" scope="row">
                        {coupon?.name}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {`${coupon?.percentage}%`}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {coupon?.startDate}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {coupon?.expiryDate}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {coupon?.usageTimes}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        <Box className={styles.action__icons}>
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
