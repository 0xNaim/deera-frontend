/* eslint-disable comma-dangle */
import DoneIcon from '@mui/icons-material/Done';
import { Box, Button, Chip, Container, Typography } from '@mui/material';
import { useState } from 'react';
import SettingsHead from '../head';
import SettingsLayout from '../settings-layout';
import styles from './dislike-list.module.scss';

const initialIngredients = [
  'Chicken',
  'Crustaceans',
  'Meat',
  'Fish',
  'Spicy',
  'Habash',
  'Nuts',
  'Beans',
  'Peanuts',
  'Soya',
  'Milk products',
  'Gluten',
  'Psyllium cortex',
];

const DislikeList = () => {
  const [ingredients] = useState(initialIngredients);
  const [selectedIngredients, setSelectedIngredients] = useState([]);

  // Handle select ingredients
  const handleSelectIngredient = (ingredient) => {
    // Find ingredient if already exist or not
    const findIngredient = selectedIngredients.find(
      (selectedIngredient) => selectedIngredient === ingredient
    );

    if (!findIngredient) {
      // If ingredient not exist then push ingredient in selectedIngredients list
      setSelectedIngredients((prevIngredients) => [...prevIngredients, ingredient]);
    } else {
      // If ingredient already exist then remove the ingredient
      const filteredIngredients = selectedIngredients.filter(
        (selectedIngredient) => selectedIngredient !== ingredient
      );
      setSelectedIngredients(filteredIngredients);
    }
  };

  // Get ingredients
  const getIngredient = (value) => {
    // Find ingredient based on selected ingredient
    const ingredient = selectedIngredients.find(
      (selectedIngredient) => selectedIngredient === value
    );
    return ingredient;
  };

  return (
    <SettingsLayout>
      <SettingsHead heading="Prohibited ingredients" />

      <Container>
        <Box className={styles.content__wrapper}>
          <Box className={styles.content}>
            <Box className={styles.description}>
              <Typography color="secondary">
                Please specify the ingredients that you would like to avoid in choosing meals!
              </Typography>
            </Box>

            <Box className={styles.ingredients__wrapper}>
              {ingredients.map((ingredient) => (
                <Chip
                  className={
                    getIngredient(ingredient) === ingredient
                      ? `${styles.ingredient} ${styles['active-ingredient']}`
                      : `${styles.ingredient}`
                  }
                  key={ingredient}
                  onClick={() => handleSelectIngredient(ingredient)}
                  label={ingredient}
                  icon={getIngredient(ingredient) === ingredient && <DoneIcon color="primary" />}
                  variant="outlined"
                />
              ))}
            </Box>

            <Box className={styles.button__group}>
              <Button
                className={styles['other_gradient--btn']}
                color="secondary"
                variant="outlined"
                fullWidth
              >
                Other Ingredients
              </Button>

              <Button className={styles.submit__btn} variant="contained" fullWidth>
                Submit
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </SettingsLayout>
  );
};

export default DislikeList;
