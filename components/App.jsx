import React from 'react';
import { connect } from 'react-redux';
import {  DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import {withRouter} from 'react-router';



import * as availabelFoodActions  from '../actions/availabel_foods';
import * as foodsInBoxActions from '../actions/foods_in_box';

/**
* High order components.
*/
 import Food from './Food/Food.jsx';
 import Box from './Box/Box.jsx';

/**
* Styles.
*/
 import { boxStyle } from './App.css';





 class App extends React.Component {

   constructor(props) {
     super(props);


   }




  render(){


    return (
      <div>
        {this.props.availabelFoods.map((food, index, arr) => {


            return (
              <Food key={food.id} value={arr[index].name} id={food.id} index={index}
                pushHoveredFood={this.props.availabelFoodsActions.pushHoveredFood}
              />
            );
          }
        )}

        <Box
          deleteDropedFood={this.props.availabelFoodsActions.deleteThisFood}
          addFoodInBox={this.props.foodsInBoxActions.addFoodInBox}
          foodsInBox={this.props.foodsInBox}
        />


      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
      availabelFoods: state.availabelFoods,
      foodsInBox: state.foodsInBox,
  }

};


const mapDispatchToProps = (dispatch) => ({
  availabelFoodsActions: bindActionCreators(availabelFoodActions, dispatch),
  foodsInBoxActions: bindActionCreators(foodsInBoxActions, dispatch),
});

App = withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

export default DragDropContext(HTML5Backend)(App);
