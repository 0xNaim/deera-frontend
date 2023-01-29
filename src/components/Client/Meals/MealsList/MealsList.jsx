/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable object-curly-newline */
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import SingleProduct from '@components/Common/SingleProduct/SingleProduct';
import { mealsList } from '@components/Client/fakedata/data';
import MealsDialog from '../MealsDialog/MealsDialog';
import styles from './MealsList.module.scss';

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const MealsList = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }} className={styles.wrapper}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab
            label={
              <Typography variant="h6" color="inherit" className={styles.title}>
                Ifter
              </Typography>
            }
            {...a11yProps(0)}
          />
          <Tab
            label={
              <Typography variant="h6" color="inherit" className={styles.title}>
                Lunch
              </Typography>
            }
            {...a11yProps(1)}
          />
          <Tab
            label={
              <Typography variant="h6" color="inherit" className={styles.title}>
                Snacks
              </Typography>
            }
            {...a11yProps(2)}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Grid container spacing={2} className={styles.tabsWrapper}>
          {mealsList?.map((meals) => (
            <Grid
              item
              md={4}
              sm={6}
              xs={12}
              key={meals.id}
              sx={{ marginBottom: '15px' }}
              // onClick={handleMealsDialogOpen}
            >
              <MealsDialog btnContent={<SingleProduct cart={meals} margin="0" />} data={meals} />
            </Grid>
          ))}
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Grid container spacing={2} className={styles.tabsWrapper}>
          {mealsList?.slice(0, 2)?.map((meals) => (
            <Grid item md={4} sm={6} xs={12} key={meals.id} sx={{ marginBottom: '15px' }}>
              <MealsDialog btnContent={<SingleProduct cart={meals} margin="0" />} data={meals} />
            </Grid>
          ))}
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Grid container spacing={2} className={styles.tabsWrapper}>
          {mealsList?.slice(2, 4)?.map((meals) => (
            <Grid item md={4} sm={6} xs={12} key={meals.id} sx={{ marginBottom: '15px' }}>
              <MealsDialog btnContent={<SingleProduct cart={meals} margin="0" />} data={meals} />
            </Grid>
          ))}
        </Grid>
      </TabPanel>
    </Box>
  );
};

export default MealsList;
