import React from 'react';
import { DropTarget } from 'react-dnd';


import { ItemTypes } from '../../constants/dndCompTypes';


/**
* High order components.
*/
 import Food from '../Food/Food.jsx';

/**
* Styles.
*/
 import { boxStyle, boxFoodsGroup } from './Box.css';




 const boxTarget = {
   drop(props, monitor, component) {

     const dropedFoodIndex = monitor.getItem().index;

     component.props.addFoodInBox(dropedFoodIndex);
     component.props.deleteDropedFood(dropedFoodIndex);


   }
 };

 function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}



class Box extends React.Component {

  constructor(props){
    super(props);


  }




  render(){

    const { connectDropTarget } = this.props;

    return connectDropTarget(
      <div className={boxStyle}>
        <div className={boxFoodsGroup}>
          {this.props.foodsInBox.map((food, index, arr) => {


              return (
                <Food key={food.id} value={arr[index].name} id={food.id} index={index}
                />
              );
            }
          )}
        </div>
      </div>
    );
  }

}


export default DropTarget(ItemTypes.FOOD, boxTarget, collect)(Box);
