import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import './button.scss';

function BlackButton():JSX.Element{
  return (
    <button className="black-button">
      <span>Test button</span>
    </button>
  )
}

BlackButton.propTypes = {
  text: PropTypes.string
}


export default BlackButton;
