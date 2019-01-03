import React, { Component, useState, createContext } from 'react'
import NumberButton from '../components/NumberButton'
import MainScreen from '../components/MainScreen'
import NumberButtonContainer from '../containers/NumberButtonContainer'
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
  }

  function clearCalculator() {
    setDisplay([])
  }

  return(
    <div>
      <MainScreen displayArray={display}/>
        <NumberButtonContainer handleDisplayChange={handleDisplayChange}/>
    </div>
  )
}
