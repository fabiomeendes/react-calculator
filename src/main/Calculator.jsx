import React, { Component } from 'react';
import './Calculator.css';

import Button from '../components/Button';
import Display from '../components/Display';

export default class Calculator extends Component {
  constructor(props) {
    super();
    this.addDigit = this.addDigit.bind(this); // 1
  }
  clearMemory() {
    console.log('clear');
  }
  setOperation(operation) {
    console.log(operation);
  }
  addDigit(n) {
    console.log(n);
  }
  render() {
    const setOperationConst = op => this.setOperation(op); /* 2 */
    return (
      <div className="calculator">
        <Display value={100}/>
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
