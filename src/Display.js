import React from "react";
import PropTypes from "prop-types";

import "./Display.css";

class Display extends React.Component {
  constructor(props) {
    super(props);

    this.state = { display: props.display, width: window.width };

    this.divRef = React.createRef();
    this.spanRef = React.createRef();

    this.previousWidth = window.width;
  }

  updateDimensions() {
    this.setState({ ...this.state, width: window.innerWidth });
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this));
  }

  getFontSize() {
    return parseFloat(
      window
        .getComputedStyle(this.divRef.current, null)
        .getPropertyValue("font-size")
    );
  }

  reduceFontSize() {
    if (
      this.divRef.current.clientWidth >
      this.spanRef.current.clientWidth + 40
    ) {
      return;
    }

    this.divRef.current.style.fontSize = this.getFontSize() - 10 + "px";

    this.reduceFontSize();
  }

  resetFontSize() {
    this.divRef.current.style.fontSize = "14vmin";
  }

  render() {
    return (
      <div ref={this.divRef} className="Display">
        <span ref={this.spanRef} className="DisplaySpan">
          {this.props.display}
        </span>
      </div>
    );
  }

  componentDidUpdate() {
    let divWidth = this.divRef.current.clientWidth;

    this.resetFontSize();
    this.reduceFontSize();

    this.previousWidth = divWidth;
  }
}

Display.propTypes = {
  display: PropTypes.string,
};

export default Display;
