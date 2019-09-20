import React from "react";
import PropTypes from "prop-types";

import "./CalcKeypad.css";

export default function CalcKeypad({ data, handleClick }) {
  return (
    <div className="calculator_keypad">
      {data.map((item, i) => (
        <button
          key={i}
          value={item.value}
          onClick={handleClick}
          className={item.classN}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
}

CalcKeypad.propTypes = {
  data: PropTypes.array,
  handleClick: PropTypes.func.isRequired
};
