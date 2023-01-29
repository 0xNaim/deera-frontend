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
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import * as Cookies from '@hooks/cookies';
import dashboardTheme from '@theme/dashboard-theme';
import paginate from '@utils/paginate';
import MealCalendar from '../Meals/MealCalendar/MealCalendar';
import styles from './orders.module.scss';

const Header = dynamic(() => import('../common/Header/Header'), {
  ssr: false,
});
const Layout = dynamic(() => import('../Layout/Layout'), {
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
                    {/* Sort by */}
                    {t('dOrders:sortBy')}
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
                        <em>{t('dOrders:subtype')}</em>
                      </MenuItem>
                      <MenuItem value={10}>Subtype 1</MenuItem>
                      <MenuItem value={20}>Subtype 2</MenuItem>
                      <MenuItem value={30}>Subtype 3</MenuItem>
                    </Select>
                  </FormControl>
                </Box>

                <Box className={styles.group__two}>
                  <Button className={styles['btn__label--print']} variant="contained" disableRipple>
                    {t('dOrders:Label_Printing')}
                    <PrintIcon className={styles.btn__icon} />
                  </Button>

                  <Button className={styles['btn__print--meals']} variant="contained" disableRipple>
                    {t('dOrders:print_meals')}
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
                      <TableCell
                        className={styles.table__heading}
                        align={Cookies.getLanguage() === 'en' ? 'left' : 'right'}
                      >
                        {t('dOrders:Name')}
                      </TableCell>
                      <TableCell
                        className={styles.table__heading}
                        align={Cookies.getLanguage() === 'en' ? 'left' : 'right'}
                      >
                        {t('dOrders:Sub_Number')}
                      </TableCell>
                      <TableCell
                        className={styles.table__heading}
                        align={Cookies.getLanguage() === 'en' ? 'left' : 'right'}
                      >
                        {t('dOrders:Sub_Type')}
                      </TableCell>
                      <TableCell
                        className={styles.table__heading}
                        align={Cookies.getLanguage() === 'en' ? 'left' : 'right'}
                      >
                        {t('dOrders:Mobile')}
                      </TableCell>
                      <TableCell
                        className={styles.table__heading}
                        align={Cookies.getLanguage() === 'en' ? 'left' : 'right'}
                      >
                        {t('dOrders:Area')}
                      </TableCell>
                      <TableCell
                        className={styles.table__heading}
                        align={Cookies.getLanguage() === 'en' ? 'left' : 'right'}
                      >
                        {t('dOrders:Address')}
                      </TableCell>
                      <TableCell
                        className={styles.table__heading}
                        align={Cookies.getLanguage() === 'en' ? 'left' : 'right'}
                      >
                        {t('dOrders:Driver')}
                      </TableCell>
                      <TableCell
                        className={styles.table__heading}
                        align={Cookies.getLanguage() === 'en' ? 'left' : 'right'}
                      >
                        {t('dOrders:Actions')}
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
                          {customer?.subNumber}
                        </TableCell>
                        <TableCell
                          className={styles.table__cell}
                          component="th"
                          scope="row"
                          align={Cookies.getLanguage() === 'en' ? 'left' : 'right'}
                        >
                          {customer?.subType}
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
                          {customer?.area}
                        </TableCell>
                        <TableCell
                          className={styles.table__cell}
                          component="th"
                          scope="row"
                          align={Cookies.getLanguage() === 'en' ? 'left' : 'right'}
                        >
                          {customer?.address}
                        </TableCell>
                        <TableCell
                          className={styles.table__cell}
                          component="th"
                          scope="row"
                          align={Cookies.getLanguage() === 'en' ? 'left' : 'right'}
                        >
                          {customer?.driver}
                        </TableCell>
                        <TableCell
                          component="th"
                          scope="row"
                          align={Cookies.getLanguage() === 'en' ? 'left' : 'right'}
                        >
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

export default Orders;
