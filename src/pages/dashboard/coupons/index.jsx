import ImportExportIcon from '@mui/icons-material/ImportExport';
import SearchIcon from '@mui/icons-material/Search';
import { Box, Button, Container, InputBase, ThemeProvider } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
import Link from 'next/link';
import DashboardHead from '../../../components/Dashboard/head';
import Layout from '../../../components/Dashboard/Layout/Layout';
import dashboardTheme from '../../../theme/dashboard-theme';
import styles from './coupons.module.scss';

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
  console.log('Coupons');

  return (
    <ThemeProvider theme={dashboardTheme}>
      <Layout>
        <DashboardHead heading="Coupons" />

        <Container>
          <Box className={styles.content__wrapper}>
            <Box className={styles.content__header}>
              <Box className={styles.add__coupon__wrapper}>
                <Link className={styles.link} href="/dashboard/add-coupon">
                  <Button variant="contained">Add Coupon</Button>
                </Link>

                <Button variant="outlined">
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
          </Box>
        </Container>
      </Layout>
    </ThemeProvider>
  );
};

export default Coupons;
