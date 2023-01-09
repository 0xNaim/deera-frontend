/* eslint-disable import/no-unresolved */
import React from 'react';
import ReactHorizontalDatePicker from 'react-horizontal-strip-datepicker';

const HorizontalDatepicker = () => {
  const onSelectedDay = (d) => {
    console.log(d);
  };
  return <ReactHorizontalDatePicker selectedDay={onSelectedDay} enableScroll enableDays={180} />;
};

export default HorizontalDatepicker;
