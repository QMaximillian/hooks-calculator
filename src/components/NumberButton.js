import React, { useContext } from 'react'


const NumberButton = (props) => {

  return(
    <button
      value={props.number}
      onClick={(e) => {props.handleDisplayChange(e)}}>
      {props.number}
    </button>
  )
}

export default NumberButton
