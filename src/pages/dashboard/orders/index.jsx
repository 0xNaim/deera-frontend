/* eslint-disable object-curly-newline */
import ImportExportIcon from '@mui/icons-material/ImportExport';
import PrintIcon from '@mui/icons-material/Print';
import {
  Box,
  Button,
  Container,
  FormControl,
  IconButton,
  MenuItem,
  Pagination,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  ThemeProvider,
} from '@mui/material';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import MealCalendar from '../../../components/Dashboard/Meals/MealCalendar/MealCalendar';
import dashboardTheme from '../../../theme/dashboard-theme';
import paginate from '../../../utils/paginate';
import styles from './orders.module.scss';

const Header = dynamic(() => import('../../../components/Dashboard/common/Header/Header'), {
  ssr: false,
});
const Layout = dynamic(() => import('../../../components/Dashboard/Layout/Layout'), {
  ssr: false,
});

const ordersData = [
  {
    name: 'Saeed Al-Otaibi',
    subNumber: 2112,
    subType: 'Super diet',
    mobile: 5522115,
    area: 'King Fahed street',
    address: 'Block 4, Street 64, M2',
    driver: 'Arif Al-Baz',
  },
  {
    name: 'Saeed Al-Otaibi',
    subNumber: 2112,
    subType: 'Super diet',
    mobile: 5522115,
    area: 'King Fahed street',
    address: 'Block 4, Street 64, M2',
    driver: 'Arif Al-Baz',
  },
  {
    name: 'Saeed Al-Otaibi',
    subNumber: 2112,
    subType: 'Super diet',
    mobile: 5522115,
    area: 'King Fahed street',
    address: 'Block 4, Street 64, M2',
    driver: 'Arif Al-Baz',
  },
  {
    name: 'Saeed Al-Otaibi',
    subNumber: 2112,
    subType: 'Super diet',
    mobile: 5522115,
    area: 'King Fahed street',
    address: 'Block 4, Street 64, M2',
    driver: 'Arif Al-Baz',
  },
  {
    name: 'Saeed Al-Otaibi',
    subNumber: 2112,
    subType: 'Super diet',
    mobile: 5522115,
    area: 'King Fahed street',
    address: 'Block 4, Street 64, M2',
    driver: 'Arif Al-Baz',
  },
  {
    name: 'Saeed Al-Otaibi',
    subNumber: 2112,
    subType: 'Super diet',
    mobile: 5522115,
    area: 'King Fahed street',
    address: 'Block 4, Street 64, M2',
    driver: 'Arif Al-Baz',
  },
  {
    name: 'Saeed Al-Otaibi',
    subNumber: 2112,
    subType: 'Super diet',
    mobile: 5522115,
    area: 'King Fahed street',
    address: 'Block 4, Street 64, M2',
    driver: 'Arif Al-Baz',
  },
  {
    name: 'Saeed Al-Otaibi',
    subNumber: 2112,
    subType: 'Super diet',
    mobile: 5522115,
    area: 'King Fahed street',
    address: 'Block 4, Street 64, M2',
    driver: 'Arif Al-Baz',
  },
  {
    name: 'Saeed Al-Otaibi',
    subNumber: 2112,
    subType: 'Super diet',
    mobile: 5522115,
    area: 'King Fahed street',
    address: 'Block 4, Street 64, M2',
    driver: 'Arif Al-Baz',
  },
  {
    name: 'Saeed Al-Otaibi',
    subNumber: 2112,
    subType: 'Super diet',
    mobile: 5522115,
    area: 'King Fahed street',
    address: 'Block 4, Street 64, M2',
    driver: 'Arif Al-Baz',
  },
  {
    name: 'Saeed Al-Otaibi',
    subNumber: 2112,
    subType: 'Super diet',
    mobile: 5522115,
    area: 'King Fahed street',
    address: 'Block 4, Street 64, M2',
    driver: 'Arif Al-Baz',
  },
  {
    name: 'Saeed Al-Otaibi',
    subNumber: 2112,
    subType: 'Super diet',
    mobile: 5522115,
    area: 'King Fahed street',
    address: 'Block 4, Street 64, M2',
    driver: 'Arif Al-Baz',
  },
];

const Orders = () => {
  const { t } = useTranslation();
  const [subType, setSubType] = useState('');

  // Pagination handling
  const [currentPage, setCurrentPage] = useState(1);
  const sizePerPage = 10;
  const totalPage = Math.ceil(ordersData.length / sizePerPage);
  const filteredData = paginate(ordersData, currentPage, sizePerPage);

  // Handle Subtype
  const handleChangeSubType = (e) => setSubType(e.target.value);

  return (
    <ThemeProvider theme={dashboardTheme}>
      <Layout>
        <Header title={t('header:orders')} />

        <Container>
          <MealCalendar />
          <Box className={styles.content__wrapper}>
            <Box className={styles.table__content__wrapper}>
              <Box className={styles.btn__group}>
                <Box className={styles.group__one}>
                  <Button
                    className={styles['btn--sort']}
                    color="secondary"
                    variant="outlined"
                    disableRipple
                  >
                    Sort by
                    <ImportExportIcon className={styles.btn__icon} />
                  </Button>
                  <FormControl size="small" sx={{ minWidth: 120 }}>
                    <Select
                      value={subType}
                      onChange={handleChangeSubType}
                      displayEmpty
                      inputProps={{ 'aria-label': 'Without label' }}
                      className={styles['btn__select--subtype']}
                    >
                      <MenuItem value="">
                        <em>Subtype</em>
                      </MenuItem>
                      <MenuItem value={10}>Subtype 1</MenuItem>
                      <MenuItem value={20}>Subtype 2</MenuItem>
                      <MenuItem value={30}>Subtype 3</MenuItem>
                    </Select>
                  </FormControl>
                </Box>

                <Box className={styles.group__two}>
                  <Button className={styles['btn__label--print']} variant="contained" disableRipple>
                    Label printing &nbsp;
                    <PrintIcon className={styles.btn__icon} />
                  </Button>

                  <Button className={styles['btn__print--meals']} variant="contained" disableRipple>
                    Print meals &nbsp;
                    <PrintIcon className={styles.btn__icon} />
                  </Button>
                </Box>
              </Box>

              <TableContainer
                component={Paper}
                sx={{ boxShadow: 'none', border: '1px solid #E5E7EB' }}
                className={styles.content__table}
              >
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell className={styles.table__heading}>Name</TableCell>
                      <TableCell className={styles.table__heading}>Sub Number</TableCell>
                      <TableCell className={styles.table__heading}>Sub Type</TableCell>
                      <TableCell className={styles.table__heading}>Mobile</TableCell>
                      <TableCell className={styles.table__heading}>Area</TableCell>
                      <TableCell className={styles.table__heading}>Address</TableCell>
                      <TableCell className={styles.table__heading}>Driver</TableCell>
                      <TableCell className={styles.table__heading}>Actions</TableCell>
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
                          {customer?.subNumber}
                        </TableCell>
                        <TableCell className={styles.table__cell} component="th" scope="row">
                          {customer?.subType}
                        </TableCell>
                        <TableCell className={styles.table__cell} component="th" scope="row">
                          {customer?.mobile}
                        </TableCell>
                        <TableCell className={styles.table__cell} component="th" scope="row">
                          {customer?.area}
                        </TableCell>
                        <TableCell className={styles.table__cell} component="th" scope="row">
                          {customer?.address}
                        </TableCell>
                        <TableCell className={styles.table__cell} component="th" scope="row">
                          {customer?.driver}
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
                                src="/assets/editIcon.svg"
                                width={18}
                                height={18}
                                alt="Edit Icon"
                              />
                            </IconButton>
                            <IconButton>
                              <Image
                                src="/assets/point.png"
                                width={18}
                                height={18}
                                alt="Edit Icon"
                              />
                            </IconButton>
                          </Box>
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
          </Box>
        </Container>
      </Layout>
    </ThemeProvider>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['dSidebar', 'header'])),
      // Will be passed to the page component as props
    },
  };
}

export default Orders;
