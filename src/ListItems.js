import React from 'react';
import './ListItems.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FlipMove from 'react-flip-move';

function ListItems(props){
    const items = props.items;
    const listItems = items.map(item =>
   {
       return <div className="list" key={item.key}>
     <p>
         <input type="text" id={item.key} value={item.text} onChange={(e)=>{
             props.setUpdate(e.target.value,item.key)}}/>
        <span>
       
        <FontAwesomeIcon className="faicons" onClick={() => {/*creates the trash icon after the user creates a new task*/
            props.deleteItem(item.key)
        }} icon="trash" />
        </span>
     </p>
     
    </div>})
    /*the user clicks on the trash icon and the flip effect happens.*/ 
    return <div>
        <FlipMove duration={300} easing="ease-in-out">
        {listItems}
        </FlipMove>
    
    </div>;
  }

  export default ListItems;