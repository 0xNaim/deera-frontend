'use client';

import React from 'react';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';

const Layout = ({ children }) => (
  <Navbar>
    {children}
    <Footer />
  </Navbar>
);

export default Layout;
