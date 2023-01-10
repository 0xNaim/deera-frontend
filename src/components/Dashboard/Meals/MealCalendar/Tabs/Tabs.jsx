/* eslint-disable react/jsx-wrap-multilines */
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import React from 'react';
import FirstStep from './FirstStep/FirstStep';
import styles from './Tabs.module.scss';

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

const FCTabs = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
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
                Protein
              </Typography>
            }
            {...a11yProps(0)}
          />
          <Tab
            label={
              <Typography variant="h6" color="inherit" className={styles.title}>
                Weight loss
              </Typography>
            }
            {...a11yProps(1)}
          />
          <Tab
            label={
              <Typography variant="h6" color="inherit" className={styles.title}>
                Lifestyle
              </Typography>
            }
            {...a11yProps(2)}
          />
          <Tab
            label={
              <Typography variant="h6" color="inherit" className={styles.title}>
                Weight gain
              </Typography>
            }
            {...a11yProps(3)}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <FirstStep />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <FirstStep />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <FirstStep />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <FirstStep />
      </TabPanel>
    </Box>
  );
};

export default FCTabs;
