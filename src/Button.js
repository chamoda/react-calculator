import React from "react";
import PropTypes from "prop-types";

import "./Button.css";

class Button extends React.Component {
  render() {
    return (
      <button
        className={this.props.className}
        onClick={this.props.onClick.bind(null, this.props.value)}
      >
        {this.props.value}
      </button>
    );
  }
}

Button.propTypes = {
  onClick: PropTypes.func,
  value: PropTypes.string,
  className: PropTypes.string,
};

export default Button;
