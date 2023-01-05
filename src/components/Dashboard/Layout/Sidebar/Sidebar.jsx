/* eslint-disable no-underscore-dangle */
// import next
import Image from 'next/image';
import React from 'react';
// import mui
import { Card, CardContent, Stack } from '@mui/material';

import List from '@mui/material/List';

// import scss
import styles from './Sidebar.module.scss';

// import components
import DropDownMenu from './common/DropDownMenu';
import SingleMenu from './common/SingleMenu';

// import data
import { mealsData, requestsData, subscriptionsData } from './fakedata';

const Sidebar = () => {
  const [requests, setRequests] = React.useState(false);
  const [subscriptions, setSubscriptions] = React.useState(false);
  const [meals, setMeals] = React.useState(false);
  // const [settings, setSettings] = React.useState(false);
  // const [employees, setEmployees] = React.useState(false);

  const handleRequestsClick = () => {
    setRequests(!requests);
  };

  const handleSubscriptionsClick = () => {
    setSubscriptions(!subscriptions);
  };

  const handleMealsClick = () => {
    setMeals(!meals);
  };

  // const handleSettingsClick = () => {
  //   setSettings(!settings);
  // };

  // const handleEmployeesClick = () => {
  //   setEmployees(!employees);
  // };

  return (
    <Card className={styles._wrapper}>
      {/* logo wrapper start */}
      <Stack className={styles._logo_wrapper}>
        <Image src="/assets/Header.svg" alt="logo" width={150} height={60} />
      </Stack>
      <CardContent className={styles._content}>
        {/* menu list start here */}
        <List sx={{ width: '100%' }} component="nav" aria-labelledby="nested-list-subheader">
          <SingleMenu image="/assets/home.svg" link="/dashboard/main" name="Main" />
          <SingleMenu image="/assets/customers.svg" link="/dashboard/customers" name="Customers" />
          {/* <SingleMenu
            image="/assets/financial.svg"
            link="/dashboard/financial"
            name="financial operations"
          /> */}
          <DropDownMenu
            handleClick={handleRequestsClick}
            open={requests}
            image="/assets/requests.svg"
            name="Requests"
            menus={requestsData}
            pageLink="/dashboard/requests"
          />
          <DropDownMenu
            handleClick={handleSubscriptionsClick}
            open={subscriptions}
            image="/assets/subscriptions.svg"
            name="subscriptions"
            menus={subscriptionsData}
            pageLink="/dashboard/subscriptions"
          />
          <DropDownMenu
            handleClick={handleMealsClick}
            open={meals}
            image="/assets/meals.svg"
            name="Meals"
            menus={mealsData}
            pageLink="/dashboard/meals"
          />
          {/* <DropDownMenu
            handleClick={handleEmployeesClick}
            open={employees}
            image="/assets/employees.svg"
            name="Employees"
            menus={employeesData}
            pageLink="/dashboard/Employees"
          /> */}
          <SingleMenu image="/assets/coupons.png" link="/dashboard/coupons" name="Coupons" />

          {/* <DropDownMenu
            handleClick={handleSettingsClick}
            open={settings}
            image="/assets/settings.svg"
            name="Settings"
            menus={settingsData}
          /> */}

          <SingleMenu image="/assets/settings.svg" link="/dashboard/settings" name="Settings" />
        </List>
        {/* signout part */}
        <Stack className={styles._last_wrapper}>
          <List sx={{ width: '87%' }} component="nav" aria-labelledby="nested-list-subheader">
            <SingleMenu image="/assets/signOut.svg" link="/signout" name="Sign out" />
          </List>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default Sidebar;
