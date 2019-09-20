import React from "react";
import PropTypes from "prop-types";

import "./InfoDisplay.css";

export default function InfoDisplay({ equation }) {
  return <div className="calculator_info">{equation}</div>;
}

InfoDisplay.propTypes = {
  equation: PropTypes.string.isRequired
};
