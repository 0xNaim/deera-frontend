/* eslint-disable import/no-unresolved */
import ReactHorizontalDatePicker from 'react-horizontal-strip-datepicker';

const HorizontalDatepicker = () => {
  const onSelectedDay = () => {};

  return <ReactHorizontalDatePicker selectedDay={onSelectedDay} enableScroll enableDays={180} />;
};

export default HorizontalDatepicker;
