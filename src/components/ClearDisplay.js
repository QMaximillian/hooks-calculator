import React from 'react'


const ClearDisplay = (props) => {
  return(
    <div>
      <button
        onClick={props.handleMemoryClear}>
        CLEAR
      </button>
    </div>
  )
}

export default ClearDisplay
