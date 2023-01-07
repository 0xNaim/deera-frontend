/* eslint-disable react/jsx-wrap-multilines */
import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import React from 'react';
import styles from './NewSubscripiton.module.scss';
import StepOne from './StepOne/StepOne';

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

const NewSubscription = () => {
  const [value, setValue] = React.useState(0);

  //   const handleChange = (event, newValue) => {
  //     setValue(newValue);
  //   };

  const handleNext = (num) => {
    setValue(num);
  };

  return (
    <div className={styles.wrapper}>
      <Container>
        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs
              value={value}
              //   onChange={handleChange}
              //   variant="scrollable"
              variant="fullWidth"
              scrollButtons="auto"
              aria-label="scrollable auto tabs example"
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
              }}
              TabIndicatorProps={{ sx: { backgroundColor: '#684CF9' } }}
            >
              <Tab
                sx={{ color: value === 0 ? 'red' : '#9ca3af' }}
                label={
                  <Typography
                    variant="subtitle1"
                    component="p"
                    color="inherit"
                    className={styles.tabs_title}
                    sx={{ color: value === 0 ? '#684CF9' : '#9ca3af' }}
                  >
                    Subscription information
                  </Typography>
                }
                {...a11yProps(0)}
              />
              {/* <Tab
                label={
                  <Typography
                    variant="subtitle1"
                    component="p"
                    color="inherit"
                    className={styles.tabs_title}
                    sx={{ color: value === 1 ? '#684CF9' : '#9ca3af' }}
                  >
                    Choice of meals
                  </Typography>
                }
              /> */}
              <Tab
                label={
                  <Typography
                    variant="subtitle1"
                    component="p"
                    color="inherit"
                    className={styles.tabs_title}
                    sx={{ color: value === 1 ? '#684CF9' : '#9ca3af' }}
                  >
                    Package management
                  </Typography>
                }
                {...a11yProps(1)}
              />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0} sx={{ padding: '0' }}>
            <StepOne handleClick={handleNext} />
          </TabPanel>
          <TabPanel value={value} index={1}>
            Item Two
          </TabPanel>
        </Box>
      </Container>
    </div>
  );
};

export default NewSubscription;
