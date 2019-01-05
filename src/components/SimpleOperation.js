import React, { useContext } from 'react'


const SimpleOperation = (props) => {

  // let value = useContext(DisplayContext)

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
