import { Box, Button, Container, Grid, Typography } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import Image from 'next/image';
import React from 'react';
import { useForm } from 'react-hook-form';
import FCImageUploader from '../../Common/FCImageUploader';
import ImageDialog from '../../Common/ImageDialog';
import SelectBundle from '../common/SelectBundle/SelectBundle';
import { subscriptionData } from '../fakedata';
import styles from './AddMeal.module.scss';

const AddMeal = () => {
  const [selectBundle, setSelectBundle] = React.useState(subscriptionData && subscriptionData[0]);
  const [files, setFiles] = React.useState('');
  const {
    register,
    handleSubmit,
    // control,
    // watch,
    formState: { errors },
  } = useForm({ defaultValues: { category: 'meal1' } });
  const onSubmit = (data) => console.log(data);

  // console.log(files, 'files');

  return (
    <div className={styles.wrapper}>
      <Container>
        <Grid container>
          <Grid item md={8} sm={12} xs={12}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Typography variant="h6" color="inherit" className={styles.input_title}>
                Add a picture of the meal
              </Typography>
              <ImageDialog files={files} setFiles={setFiles} btnContent={<FCImageUploader />} />

              {files && (
                <Box
                  sx={{
                    borderRadius: '5px',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    margin: '10px 0',
                  }}
                >
                  <Image
                    src={files}
                    alt=""
                    width={150}
                    height={150}
                    onLoad={() => {
                      URL.revokeObjectURL(files);
                    }}
                  />
                </Box>
              )}

              <Box sx={{ mt: 2 }}>
                <Typography variant="h6" color="inherit" className={styles.input_title}>
                  The name of the meal in Arabic
                </Typography>
                <input
                  {...register('name_arabic', { required: true })}
                  className={styles.input}
                  placeholder="The name of the meal"
                />
                {/* errors will return when field validation fails  */}
                {errors.name_arabic && <p className={styles.error_title}>This field is required</p>}
              </Box>
              <Box sx={{ mt: 2 }}>
                <Typography variant="h6" color="inherit" className={styles.input_title}>
                  The name of the meal in English
                </Typography>
                <input
                  {...register('name_english', { required: true })}
                  className={styles.input}
                  placeholder="The name of the meal"
                />
                {/* errors will return when field validation fails  */}
                {errors.name_english && (
                  <p className={styles.error_title}>This field is required</p>
                )}
              </Box>
              <Box sx={{ mt: 2 }}>
                <Typography variant="h6" color="inherit" className={styles.input_title}>
                  Choose a category name
                </Typography>
                {/* <input
                  {...register('name_', { required: true })}
                  className={styles.input}
                  placeholder="The name of the meal"
                /> */}
                <select {...register('category')} className={styles.select_box}>
                  <option value="meal1" className={styles.single_select}>
                    Meal one
                  </option>
                  <option value="meal2" className={styles.single_select}>
                    Meal two
                  </option>
                  <option value="meal3" className={styles.single_select}>
                    Meal three
                  </option>
                  <option value="meal4" className={styles.single_select}>
                    Meal four
                  </option>
                </select>

                {/* errors will return when field validation fails  */}
                {errors.category && <p className={styles.error_title}>This field is required</p>}
              </Box>
              <Box sx={{ mt: 2 }}>
                <Typography variant="h6" color="inherit" className={styles.input_title}>
                  Mention how many calories the meal contains
                </Typography>
                <input
                  {...register('calories_number', { required: true })}
                  className={styles.input}
                  placeholder="The number of calories"
                />
                {/* errors will return when field validation fails  */}
                {errors.calories_number && (
                  <p className={styles.error_title}>This field is required</p>
                )}
              </Box>

              <Box sx={{ mt: 2 }}>
                <Typography variant="h6" color="inherit" className={styles.input_title}>
                  Select bundle
                </Typography>
                <SelectBundle
                  data={subscriptionData}
                  value={selectBundle}
                  setValue={setSelectBundle}
                />
              </Box>
              <Box sx={{ mt: 2 }}>
                <Typography variant="h6" color="inherit" className={styles.input_title}>
                  Total weight in grams for the Nutrition Facts
                </Typography>
                <Grid container spacing={1}>
                  <Grid item md={6} sm={6} xs={12}>
                    <FormControl variant="outlined" sx={{ width: '100%', height: '48px' }}>
                      <OutlinedInput
                        id="outlined-adornment-weight"
                        endAdornment={<InputAdornment position="end">Fats</InputAdornment>}
                        aria-describedby="outlined-weight-helper-text"
                        inputProps={{ 'aria-label': 'weight' }}
                        {...register('fats', { required: true })}
                        placeholder="Total weight"
                        sx={{ width: '100%', height: '48px' }}
                      />
                    </FormControl>
                    {errors.fats && <p className={styles.error_title}>This field is required</p>}
                  </Grid>
                  <Grid item md={6} sm={6} xs={12}>
                    <FormControl variant="outlined" sx={{ width: '100%', height: '48px' }}>
                      <OutlinedInput
                        id="outlined-adornment-weight"
                        endAdornment={<InputAdornment position="end">Carp</InputAdornment>}
                        aria-describedby="outlined-weight-helper-text"
                        inputProps={{ 'aria-label': 'weight' }}
                        {...register('carp', { required: true })}
                        placeholder="Total weight"
                        sx={{ width: '100%', height: '48px' }}
                      />
                    </FormControl>
                    {errors.carp && <p className={styles.error_title}>This field is required</p>}
                  </Grid>
                  <Grid item md={6} sm={6} xs={12}>
                    <FormControl variant="outlined" sx={{ width: '100%', height: '48px' }}>
                      <OutlinedInput
                        id="outlined-adornment-weight"
                        endAdornment={<InputAdornment position="end">Protein</InputAdornment>}
                        aria-describedby="outlined-weight-helper-text"
                        inputProps={{ 'aria-label': 'weight' }}
                        {...register('protein', { required: true })}
                        placeholder="Total weight"
                        sx={{ width: '100%', height: '48px' }}
                      />
                    </FormControl>
                    {errors.fats && <p className={styles.error_title}>This field is required</p>}
                  </Grid>
                  <Grid item md={6} sm={6} xs={12}>
                    <FormControl variant="outlined" sx={{ width: '100%', height: '48px' }}>
                      <OutlinedInput
                        id="outlined-adornment-weight"
                        endAdornment={<InputAdornment position="end">Sugars</InputAdornment>}
                        aria-describedby="outlined-weight-helper-text"
                        inputProps={{ 'aria-label': 'weight' }}
                        {...register('sugars', { required: true })}
                        placeholder="Total weight"
                        sx={{ width: '100%', height: '48px' }}
                      />
                    </FormControl>
                    {errors.fats && <p className={styles.error_title}>This field is required</p>}
                  </Grid>
                </Grid>
              </Box>

              <Grid container spacing={1} sx={{ mt: 5 }} className={styles.button_wrapper}>
                <Grid item md={6} sm={6} xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    className={styles.save_button}
                  >
                    Save
                  </Button>
                </Grid>
                <Grid item md={6} sm={6} xs={12}>
                  <Button variant="outlined" color="primary" className={styles.cancellation_button}>
                    Cancellation
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default AddMeal;
