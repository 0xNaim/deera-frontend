import { Box, Button, Container, TextField, Typography } from '@mui/material';
import { useFieldArray, useForm } from 'react-hook-form';
import Layout from '../../../components/Layout';
import SettingsHead from '../head';
import styles from './add-new-dislike-item.module.scss';

const initialComponent = { item: '' };

const AddNewDislikeItem = () => {
  // React hook form
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ defaultValues: { items: [initialComponent] } });

  const { fields, append } = useFieldArray({
    name: 'items',
    control,
  });

  // Handle insert item
  const handleInsertItem = () => append(initialComponent);

  // Handle form submit
  const handleFormSubmit = (e) => {
    console.log(e);
  };

  return (
    <Layout>
      <Container>
        <Box className={styles.content__wrapper}>
          <SettingsHead heading="Insert a new component" />

          <Box component="form" className={styles.content}>
            {fields.map((field, index) => (
              <Box key={field.id}>
                <TextField
                  {...register(`items.${index}.item`, { required: 'Component is required' })}
                  className={styles.content__input}
                  label="Component name"
                  variant="standard"
                  error={!!errors?.items?.[index]?.item?.message}
                  fullWidth
                  sx={{ py: 1 }}
                />
                {errors?.items?.[index]?.item?.message && (
                  <Typography className={styles.helper__text} variant="body2">
                    {errors?.items?.[index]?.item?.message}
                  </Typography>
                )}
              </Box>
            ))}

            <Button
              className={styles['add__item--btn']}
              onClick={handleInsertItem}
              color="secondary"
              disableRipple
            >
              + Add new
            </Button>

            <Button
              onClick={handleSubmit(handleFormSubmit)}
              className={styles['submit--btn']}
              variant="contained"
              fullWidth
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Container>
    </Layout>
  );
};

export default AddNewDislikeItem;
