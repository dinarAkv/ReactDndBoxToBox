import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import availabelFoods from './availabel_foods';
import foodsInBox from './foods_in_box';



export default combineReducers({
  routing: routerReducer,
  availabelFoods,
  foodsInBox
});
