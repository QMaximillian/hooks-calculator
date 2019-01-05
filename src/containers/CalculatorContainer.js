import React, { Component, useState } from 'react'
import NumberButton from '../components/NumberButton'
import MainScreen from '../components/MainScreen'
import NumberButtonContainer from '../containers/NumberButtonContainer'
import OperationContainer from './OperationContainer'
import ClearDisplay from '../components/ClearDisplay'


class CalculatorContainer extends Component {

  state = {
    displayArray: ['1', '+', '2']
  }

  handleChange = (e) => {
    this.setState({
      displayArray: [...this.state.displayArray, e.target.value]
    })
  }

  render() {
    return(
      <div>
        <MainScreen displayArray={this.state.displayArray}/>
        <NumberButton />
        <button value={1} onClick={this.handleChange}/>
      </div>
    )
  }
}

export default CalculatorContainer


// Functional Version w/ Hooks

export const CalculatorContainerFunction = () => {
  const [display, setDisplay] = useState([])

  function handleDisplayChange(e) {
    setDisplay([...display, e.target.value])

    if (["+", "-", "x", "/"].indexOf(e.target.value) !== -1 ) {
      console.log(display[display.length-1], "Me")
      console.log(display)
    }

  }

  function handleMemoryClear() {
    setDisplay([])
  }



  return(
    <div>

      <ClearDisplay handleMemoryClear={handleMemoryClear}/>
      <MainScreen displayArray={display}/>
        <NumberButtonContainer
          handleDisplayChange={handleDisplayChange}/>

        <OperationContainer
          handleDisplayChange={handleDisplayChange}/>

    </div>
  )
}
