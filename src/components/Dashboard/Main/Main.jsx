import { Container } from '@mui/material';
import React from 'react';
import Header from '../common/Header/Header';
import styles from './Main.module.scss';
import Services from './Services/Services';

const Main = () => (
  <div className={styles.wrapper}>
    <Header title="Main" />
    {/* <CustomTable /> */}
    <Container>
      <Services />
    </Container>
  </div>
);

export default Main;
