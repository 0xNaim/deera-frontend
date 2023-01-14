/* eslint-disable no-underscore-dangle */
// import next
import Image from 'next/image';
import React from 'react';
// import mui
import { Card, CardContent, Stack } from '@mui/material';

import List from '@mui/material/List';

// import scss
import {
  faClipboardCheck,
  faClipboardList,
  faFire,
  faHomeUser,
  faRightFromBracket,
  faSliders,
  faTicket,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();

  const handleRequestsClick = () => {
    setRequests(!requests);
  };

  const handleSubscriptionsClick = () => {
    setSubscriptions(!subscriptions);
  };

  const handleMealsClick = () => {
    setMeals(!meals);
  };

  // const main = t('dSidebar:main');

  return (
    <Card className={styles._wrapper}>
      {/* logo wrapper start */}
      <Stack className={styles._logo_wrapper}>
        <Image src="/assets/Header.svg" alt="logo" width={150} height={60} />
      </Stack>
      <CardContent className={styles._content}>
        {/* menu list start here */}
        <List sx={{ width: '100%' }} component="nav" aria-labelledby="nested-list-subheader">
          <SingleMenu icon={faHomeUser} link="/dashboard" name={t('dSidebar:main')} />
          <SingleMenu
            icon={faUserGroup}
            link="/dashboard/customers"
            name={t('dSidebar:customer')}
          />

          <DropDownMenu
            handleClick={handleRequestsClick}
            open={requests}
            icon={faClipboardList}
            name={t('dSidebar:requests')}
            menus={requestsData}
            pageLink="/dashboard/orders"
          />
          <DropDownMenu
            handleClick={handleSubscriptionsClick}
            open={subscriptions}
            icon={faClipboardCheck}
            name={t('dSidebar:subscriptions')}
            menus={subscriptionsData}
            pageLink="/dashboard/subscriptions"
          />
          <DropDownMenu
            handleClick={handleMealsClick}
            open={meals}
            icon={faFire}
            name={t('dSidebar:meals')}
            menus={mealsData}
            pageLink="/dashboard/meals"
          />

          <SingleMenu icon={faTicket} link="/dashboard/coupons" name={t('dSidebar:coupons')} />

          <SingleMenu icon={faSliders} link="/dashboard/settings" name={t('dSidebar:settings')} />
        </List>
        {/* signout part */}
        <Stack className={styles._last_wrapper}>
          <List sx={{ width: '87%' }} component="nav" aria-labelledby="nested-list-subheader">
            <SingleMenu icon={faRightFromBracket} link="/signout" name={t('dSidebar:sign_out')} />
          </List>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default Sidebar;
