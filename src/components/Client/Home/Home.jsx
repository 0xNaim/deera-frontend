import React from 'react';
import Heroarea from './Heroaera/Heroarea';
import styles from './Home.module.scss';

const Home = () => (
  <div className={styles.homeWrapper}>
    <Heroarea />
  </div>
);

export default Home;
