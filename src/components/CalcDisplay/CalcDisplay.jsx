import React from "react";
import PropTypes from "prop-types";

import "./CalcDisplay.css";

export default function CalcDisplay({ result }) {
  return <div className="calculator_display">{result}</div>;
}

CalcDisplay.propTypes = {
  result: PropTypes.number.isRequired
};
