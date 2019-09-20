import React, { Component } from "react";
import PropTypes from "prop-types";

import "./styles.css";
import CalcDisplay from "./components/CalcDisplay/CalcDisplay";
import InfoDisplay from "./components/InfoDisplay/InfoDisplay";
import CalcKeypad from "./components/CalcKeypad/CalcKeypad";

/*eslint-disable no-eval */

export default class App extends Component {
  static propTypes = {
    data: PropTypes.array
  };

  constructor(props) {
    super(props);
    this.state = {
      equation: "",
      result: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const eq = this.state.equation;
    const val = e.target.value;

    val === "c"
      ? this.clear()
      : (val >= "0" && val <= "9") || val === "."
      ? this.numeric(eq, val)
      : ["+", "-", "*", "/"].indexOf(val) !== -1
      ? this.operand(eq, val)
      : val === "="
      ? this.enter(eq)
      : this.back(eq);
  }

  clear = () => this.setState({ result: 0, equation: "" });
  numeric = (eq, val) => this.setState({ equation: eq + val });
  operand = (eq, val) => this.setState({ equation: eq + val });
  enter = eq => {
    try {
      const result = Number.isInteger(eval(eq))
        ? eval(eq)
        : eval(eq).toFixed(2);
      this.setState({ equation: String(result), result: Number(result) });
    } catch (error) {
      alert("Invalid Mathematical Equation");
    }
  };
  back = eq => this.setState({ equation: eq.substr(0, eq.length - 1) });

  render() {
    const { result, equation } = this.state;
    const { data } = this.props;
    return (
      <div className="calculator">
        <div className="calculator__wrap">
          <CalcDisplay result={result} />
          <InfoDisplay equation={equation} />
          <CalcKeypad data={data} handleClick={this.handleClick} />
        </div>
      </div>
    );
  }
}
