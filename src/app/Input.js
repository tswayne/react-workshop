import React from 'react';

const Input = ({onChange, onClick, value}) => {
  return(
    <div>
      <input onChange={onChange} type="text" value={value}/>
      <button onClick={onClick}>Add</button>
    </div>
  )
}

export {Input}
