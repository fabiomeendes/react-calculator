import React, { Component } from 'react';
import './Calculator.css';

import Button from '../components/Button';
import Display from '../components/Display';

const initialState =  {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0
}

export default class Calculator extends Component {

  state = { ...initialState } // create a initialState clone

  constructor(props) {
    super();
    this.addDigit = this.addDigit.bind(this); // 1
  }
  clearMemory() {
    this.setState({ ...initialState })
  }
  setOperation(operation) {
    console.log(operation);
  }
  addDigit(n) {
    if (n === '.' && this.state.displayValue.includes('.')){
      return;
    }

    const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay;
    const currentValue = clearDisplay ? '' : this.state.displayValue; 
    const newdisplayValue = currentValue + n;
    this.setState({ displayValue: newdisplayValue, clearDisplay: false });

    if (n !== '.'){
      const i = this.state.current;
      const newValue = parseFloat(newdisplayValue);
      const values = [...this.state.values];
      values[i] = newValue; // array item
      this.setState({ values });
    }

  }
  render() {
    const setOperationConst = op => this.setOperation(op); /* 2 */
    return (
      <div className="calculator">
        <Display value={this.state.displayValue}/>
        <Button label='AC' click={() => this.clearMemory() /* 3 */} triple />
        <Button label='/' click={setOperationConst /* 2 */} operation /> 
        <Button label='7' click={this.addDigit /* 1 */}/>
        <Button label='8' click={this.addDigit} />
        <Button label='9' click={this.addDigit} />
        <Button label='*' click={setOperationConst} operation />
        <Button label='4' click={this.addDigit} />
        <Button label='5' click={this.addDigit} />
        <Button label='6' click={this.addDigit} />
        <Button label='-' click={setOperationConst} operation />
        <Button label='1' click={this.addDigit} />
        <Button label='2' click={this.addDigit} />
        <Button label='3' click={this.addDigit} />
        <Button label='+' click={setOperationConst} operation />
        <Button label='0' click={this.addDigit} double/>
        <Button label='.' click={this.addDigit} />
        <Button label='=' click={setOperationConst} operation/>
      </div>
    )
  }
}
