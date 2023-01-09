/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable object-curly-newline */
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { myMealsList } from '../../fakedata/data';
import styles from './MyMealsList.module.scss';
import SingleMyMealList from './SingleMyMealList/SingleMyMealList';

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

const MyMealsList = () => {
  const [value, setValue] = React.useState(0);

  const [selectData, setSelectData] = React.useState([]);

  const handleAddData = (item) => {
    if (!selectData.includes(item)) {
      setSelectData([...selectData, item]);
    }
  };

  const handleRemoveData = (id) => {
    setSelectData(selectData.filter((item) => item.id !== id));
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // console.log(selectData, 'datas');

  return (
    <Box sx={{ width: '100%' }} className={styles.wrapper}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
          // aria-label="basic tabs example"
        >
          <Tab
            label={
              <Typography variant="h6" color="inherit" className={styles.title}>
                Monday
              </Typography>
            }
            {...a11yProps(0)}
          />
          <Tab
            label={
              <Typography variant="h6" color="inherit" className={styles.title}>
                Tuesday
              </Typography>
            }
            {...a11yProps(1)}
          />
          <Tab
            label={
              <Typography variant="h6" color="inherit" className={styles.title}>
                Wednesday
              </Typography>
            }
            {...a11yProps(2)}
          />
          <Tab
            label={
              <Typography variant="h6" color="inherit" className={styles.title}>
                Thursday
              </Typography>
            }
            {...a11yProps(3)}
          />
          <Tab
            label={
              <Typography variant="h6" color="inherit" className={styles.title}>
                Friday
              </Typography>
            }
            {...a11yProps(4)}
          />
          <Tab
            label={
              <Typography variant="h6" color="inherit" className={styles.title}>
                Saturday
              </Typography>
            }
            {...a11yProps(5)}
          />
          <Tab
            label={
              <Typography variant="h6" color="inherit" className={styles.title}>
                Sunday
              </Typography>
            }
            {...a11yProps(6)}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Grid container spacing={2} className={styles.tabsWrapper}>
          {myMealsList?.map((meals) => (
            <Grid
              item
              md={6}
              sm={12}
              xs={12}
              key={meals.id}
              sx={{ marginBottom: '15px' }}
              // onClick={handleMealsDialogOpen}
            >
              <SingleMyMealList
                cart={meals}
                handleAddData={handleAddData}
                selectData={selectData}
                handleRemoveData={handleRemoveData}
              />
            </Grid>
          ))}
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Grid container spacing={2} className={styles.tabsWrapper}>
          {myMealsList?.slice(0, 2)?.map((meals) => (
            <Grid item md={6} sm={6} xs={12} key={meals.id} sx={{ marginBottom: '15px' }}>
              <SingleMyMealList
                cart={meals}
                handleAddData={handleAddData}
                selectData={selectData}
                handleRemoveData={handleRemoveData}
              />
            </Grid>
          ))}
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Grid container spacing={2} className={styles.tabsWrapper}>
          {myMealsList?.slice(2, 4)?.map((meals) => (
            <Grid item md={6} sm={6} xs={12} key={meals.id} sx={{ marginBottom: '15px' }}>
              <SingleMyMealList
                cart={meals}
                handleAddData={handleAddData}
                selectData={selectData}
                handleRemoveData={handleRemoveData}
              />
            </Grid>
          ))}
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Grid container spacing={2} className={styles.tabsWrapper}>
          {myMealsList?.slice(2, 4)?.map((meals) => (
            <Grid item md={6} sm={6} xs={12} key={meals.id} sx={{ marginBottom: '15px' }}>
              <SingleMyMealList
                cart={meals}
                handleAddData={handleAddData}
                selectData={selectData}
                handleRemoveData={handleRemoveData}
              />
            </Grid>
          ))}
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Grid container spacing={2} className={styles.tabsWrapper}>
          {myMealsList?.slice(2, 4)?.map((meals) => (
            <Grid item md={6} sm={6} xs={12} key={meals.id} sx={{ marginBottom: '15px' }}>
              <SingleMyMealList
                cart={meals}
                handleAddData={handleAddData}
                selectData={selectData}
                handleRemoveData={handleRemoveData}
              />
            </Grid>
          ))}
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={5}>
        <Grid container spacing={2} className={styles.tabsWrapper}>
          {myMealsList?.slice(2, 4)?.map((meals) => (
            <Grid item md={6} sm={6} xs={12} key={meals.id} sx={{ marginBottom: '15px' }}>
              <SingleMyMealList
                cart={meals}
                handleAddData={handleAddData}
                selectData={selectData}
                handleRemoveData={handleRemoveData}
              />
            </Grid>
          ))}
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={6}>
        <Grid container spacing={2} className={styles.tabsWrapper}>
          {myMealsList?.slice(2, 4)?.map((meals) => (
            <Grid item md={6} sm={6} xs={12} key={meals.id} sx={{ marginBottom: '15px' }}>
              <SingleMyMealList
                cart={meals}
                handleAddData={handleAddData}
                selectData={selectData}
                handleRemoveData={handleRemoveData}
              />
            </Grid>
          ))}
        </Grid>
      </TabPanel>
    </Box>
  );
};

export default MyMealsList;
