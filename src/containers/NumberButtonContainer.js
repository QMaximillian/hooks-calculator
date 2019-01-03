import React from 'react'
import NumberButton from '../components/NumberButton'

const NumberButtonContainer = (props) => {


  return(
    <div>
      <NumberButton
      handleDisplayChange={props.handleDisplayChange}
      number={0}/>
      <NumberButton
      handleDisplayChange={props.handleDisplayChange}
      number={1}/>
      <NumberButton
      handleDisplayChange={props.handleDisplayChange}
      number={2}/>
      <NumberButton
      handleDisplayChange={props.handleDisplayChange}
      number={3}/>
      <NumberButton
      handleDisplayChange={props.handleDisplayChange}
      number={4}/>
      <NumberButton
      handleDisplayChange={props.handleDisplayChange}
      number={5}/>
      <NumberButton
      handleDisplayChange={props.handleDisplayChange}
      number={6}/>
      <NumberButton
      handleDisplayChange={props.handleDisplayChange}
      number={7}/>
      <NumberButton
      handleDisplayChange={props.handleDisplayChange}
      number={8}/>
      <NumberButton
      handleDisplayChange={props.handleDisplayChange}
      number={9}/>
    </div>
  )
}

export default NumberButtonContainer
