/* eslint-disable react/jsx-one-expression-per-line */
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Image from 'next/image';
import * as React from 'react';

const SelectBundle = ({ data, value, setValue }) => {
  const [inputValue, setInputValue] = React.useState('');

  return (
    <Autocomplete
      id="country-select-demo"
      sx={{
        width: '100%',
        background: '#f9fafb',
        border: '0.75px solid #e5e7eb',
        borderRadius: '8px',
        color: '#4b5563',
      }}
      options={data}
      autoHighlight
      getOptionLabel={(option) => option.english_name}
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      inputValue={inputValue}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
      }}
      renderOption={(props, option) => (
        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
          <Image
            src={option?.image}
            alt={option?.english_name}
            width={40}
            height={40}
            style={{ objectFit: 'contain' }}
          />
          {option.english_name} + {option.packages} packages
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Select Bundle"
          // {...register('city', { required: 'City is required' })}
          inputProps={{
            ...params.inputProps,
            autoComplete: 'disabled',
          }}
        />
      )}
    />
  );
};

export default SelectBundle;
