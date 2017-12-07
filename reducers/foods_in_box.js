import { ADD_FOOD_IN_BOX } from '../constants/actions';




export default function foodsInBox(state = [], action) {

  if (action.type === ADD_FOOD_IN_BOX) {

    return action.payload.foodsInBox;
  }

  return state;

}
