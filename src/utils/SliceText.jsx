/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';

const SliceText = ({ children, number }) => (
  <>{children && children.length > number ? `${children.slice(0, number)}...` : children}</>
);

export default SliceText;
