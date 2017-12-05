import React from 'react';
import { findDOMNode } from 'react-dom';
import { DragSource, DropTarget } from 'react-dnd';



import { ItemTypes } from '../../constants/dndCompTypes';

/**
* High order components.
*/
// import Menu from '../Menu/Menu.jsx';

/**
* Styles.
*/
 import { foodStyle } from './Food.css';








const foodSource = {
  beginDrag(props) {

    console.log('props', props);

    return {
      id:   props.id,
      index: props.index,
    };
  }
};



function collect(connect, monitor) {


  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}









class Food extends React.Component {


  constructor(props) {
    super(props);




  }


















  render(){

    const {
     text,
     isDragging,
     connectDragSource,
     connectDropTarget,
} = this.props

    const opacity = isDragging ? 0 : 1;

    return connectDragSource(
                <div className={foodStyle} style={{opacity: opacity}}>
                  {this.props.value}
                </div>
    );
  }

}

Food = DragSource(ItemTypes.FOOD, foodSource, collect)(Food);


export default Food;
