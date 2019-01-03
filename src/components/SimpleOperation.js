import React from 'react'


const SimpleOperation = (props) => {
  return(
    <div>
      <button
        value={props.operation}
        onClick={(e) => props.handleDisplayChange(e)}>
        {props.operation}
      </button>
    </div>
  )
}

export default SimpleOperation
