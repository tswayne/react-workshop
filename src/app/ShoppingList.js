import React from 'react';
import {ListItem} from './ListItem'

const ShoppingList = ({list, onClick}) => {
  return (
    <ul>
      {list.map((item, index) => {
        return (
          item.completed &&
          <strike key={index}><ListItem  index={index} name={item.name} onClick={onClick}/></strike>
          ||
          <ListItem key={index} index={index} name={item.name} onClick={onClick}/>
        )
      })}
    </ul>
  )
}

export {ShoppingList}
