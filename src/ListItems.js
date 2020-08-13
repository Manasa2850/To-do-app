import React from 'react';
import './ListItems.css';

function ListItems(props){
  const items = props.items;
  const listItems = items.map(item =>
    {
      return <div className="list" key={item.key}>
        <p>{item.text}
        <button id="delete" type="submit" onClick={() => props.deleteItem(item.key)}> Delete </button>
        </p>
      </div>
    })

  return(
    <div>{listItems}</div>
  )
}

export default ListItems;
