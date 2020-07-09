import React, { Component } from "react";
import CalciDisplay from "../components/calciDisplay";
import styles from "./calculator.module.css";

class Calculator extends Component {
  state = {
    num1: 0,
    num2: 0,
    total: 0,
  };

  num1ChangeHandler = (event) => {
    this.setState({
      num1: +event.target.value,
    });
  };

  num2ChangeHandler = (event) => {
    this.setState({
      num2: +event.target.value,
    });
  };

  additionHandler = () => {
    this.setState({
      total: this.state.num1 + this.state.num2,
    });
  };

  subtractionHandler = () => {
    this.setState({
      total: this.state.num1 - this.state.num2,
    });
  };

  multiplyHandler = () => {
    this.setState({
      total: this.state.num1 * this.state.num2,
    });
  };

  divisionHandler = () => {
    this.setState({
      total: this.state.num1 / this.state.num2,
    });
  };

  clearHandler = () => {
    this.setState({
      num1: 0,
      num2: 0,
      total: 0,
    });
  };

  render() {
    return (
      <div className={styles.Box}>
        <CalciDisplay
          addClick={this.additionHandler}
          subClick={this.subtractionHandler}
          multiClick={this.multiplyHandler}
          divClick={this.divisionHandler}
          change1={this.num1ChangeHandler}
          change2={this.num2ChangeHandler}
          value={this.state.total}
          click={this.clearHandler}
        />
      </div>
    );
  }
}

export default Calculator;
