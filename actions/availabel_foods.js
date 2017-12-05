import update from 'immutability-helper';
import { DELETE_FOOD, PUSH_FOOD } from '../constants/actions';



const deleteFood = (foodsAfterDelete) => ({
      type: DELETE_FOOD,
      payload: foodsAfterDelete,
    });



const pushFood = (data) => {
  return  {
      type: PUSH_FOOD,
      payload: data,
    }
};


export const deleteThisFood = (food) => (
  (dispatch, getState) => {
    const availabelFoods = getState().availabelFoods;


    availabelFoods.splice(food.index, 1);

    return dispatch(deleteFood(availabelFoods));
  }
)




export const pushHoveredFood = (druggedElementIndex, hoveredElementIndex) => {
  return (dispatch, getState) => {
    const availabelFoods = getState().availabelFoods;
    const draggedFood = availabelFoods[druggedElementIndex];

    const pushedFoods = update(getState(), {
				availabelFoods: {
					$splice: [[druggedElementIndex, 1], [hoveredElementIndex, 0, draggedFood]],
				},
    });

    // const pushedFoods = availabelFoods.splice([druggedElementIndex, 1], [hoveredElementIndex, 0, draggedFood]);

    console.log('pushedFoods', pushedFoods);

    // if (druggedElementIndex === hoveredElementIndex) {
    //   availabelFoods[hoveredElementIndex].name = 'new name';
    // }


    return dispatch(pushFood(pushedFoods));
  }
}
