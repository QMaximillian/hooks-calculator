import React from 'react'
import SimpleOperation from '../components/SimpleOperation'

const OperationContainer = (props) => {
  return(
    <div>
      <SimpleOperation
      handleDisplayChange={props.handleDisplayChange}
      operation={'+'}/>
      <SimpleOperation
      handleDisplayChange={props.handleDisplayChange}
      operation={'-'}/>
      <SimpleOperation
      handleDisplayChange={props.handleDisplayChange}
      operation={'/'}/>
      <SimpleOperation
      handleDisplayChange={props.handleDisplayChange}
      operation={'x'}/>
    </div>
  )
}

export default OperationContainer
