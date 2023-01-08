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
import styles from './customers.module.scss';

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

const Customers = () => {
  // Pagination handling
  const [currentPage, setCurrentPage] = useState(1);
  const sizePerPage = 10;
  const totalPage = Math.ceil(customersData.length / sizePerPage);

  const filteredData = paginate(customersData, currentPage, sizePerPage);

  return (
    <ThemeProvider theme={dashboardTheme}>
      <Layout>
        {/* <DashboardHead heading="Coupons" /> */}
        <Header title="Customers" />

        <Container>
          <Box className={styles.content__wrapper}>
            <Box className={styles.content__header}>
              <Box className={styles.add__coupon__wrapper}>
                <Link className={styles.link} href="/dashboard/customers/add-customer">
                  <Button
                    variant="contained"
                    sx={{ color: '#F3F0FF', fontSize: '16px', padding: '12px 12px' }}
                  >
                    Add Customers
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
                    <TableCell className={styles.table__heading}>Name</TableCell>
                    <TableCell className={styles.table__heading}>Start Date</TableCell>
                    <TableCell className={styles.table__heading}>Expiry Date</TableCell>
                    <TableCell className={styles.table__heading}>Mobile</TableCell>
                    <TableCell className={styles.table__heading}>Repitition</TableCell>
                    <TableCell className={styles.table__heading}>Status</TableCell>
                    <TableCell className={styles.table__heading}>Procedures</TableCell>
                    <TableCell />
                  </TableRow>
                </TableHead>

                <TableBody>
                  {filteredData?.map((customer) => (
                    <TableRow key={Math.random()}>
                      <TableCell className={styles.table__cell} component="th" scope="row">
                        {customer?.name}
                      </TableCell>
                      <TableCell className={styles.table__cell} component="th" scope="row">
                        {customer?.startDate}
                      </TableCell>
                      <TableCell className={styles.table__cell} component="th" scope="row">
                        {customer?.expiryDate}
                      </TableCell>
                      <TableCell className={styles.table__cell} component="th" scope="row">
                        {customer?.mobile}
                      </TableCell>
                      <TableCell className={styles.table__cell} component="th" scope="row">
                        {customer?.repitition}
                      </TableCell>
                      <TableCell className={styles.table__cell} component="th" scope="row">
                        {customer?.status}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        <Box className={styles.action__icons}>
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
