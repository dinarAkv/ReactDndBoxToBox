import update from 'immutability-helper'

import { ADD_FOOD_IN_BOX } from '../constants/actions';






const addFood = (foodsInBox) => ({
  type: ADD_FOOD_IN_BOX,
  payload: foodsInBox,
})





export const addFoodInBox = (foodIndex) => (
  (dispatch, getState) => {
    const availabelFoods = getState().availabelFoods;

    const addedFood = availabelFoods[foodIndex];

    const foodsInBox = getState().foodsInBox;

    const foodsInBoxAfter = update(getState(), {
      foodsInBox: {
        $push: [addedFood],
      },
    });

    return dispatch(addFood(foodsInBoxAfter));
  }
)
