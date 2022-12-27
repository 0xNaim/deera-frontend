import React from 'react';
import DiscoverMeals from './DiscoverMeals/DiscoverMeals';
import Heroarea from './Heroaera/Heroarea';
import styles from './Home.module.scss';
import Subscriptions from './Subscriptions/Subscriptions';

const Home = () => (
  <div className={styles.homeWrapper}>
    <Heroarea />
    <Subscriptions />
    <DiscoverMeals />
  </div>
);

export default Home;
