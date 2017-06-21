import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  return <button onClick={props.actionOnClick}> {props.children} </button>;
};

Button.propTypes = {
  actionOnClick: PropTypes.func.isRequired,
  children: PropTypes.node
};

export default Button;
