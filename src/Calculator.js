import React from "react";

import Engine from "./Engine.js";

import Display from "./Display.js";
import Button from "./Button.js";

import "./Calculator.css";

class Calculator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      display: "0",
      engine: new Engine(),
    };

    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick(value) {
    this.setState({
      display: this.state.engine.calculate(value),
    });
  }

  render() {
    return (
      <div className="Calculator">
        <Display display={this.state.display} />

        <Button
          value={this.state.engine.clearable ? "C" : "AC"}
          className="Button BlackButton"
          onClick={this.handleButtonClick}
        />
        <Button
          value="+/-"
          className="Button BlackButton"
          onClick={this.handleButtonClick}
        />
        <Button
          value="%"
          className="Button BlackButton"
          onClick={this.handleButtonClick}
        />
        <Button
          value={"\u00F7"}
          className="Button OrangeButton"
          onClick={this.handleButtonClick}
        />

        <br />

        <Button
          value="7"
          className="Button GrayButton"
          onClick={this.handleButtonClick}
        />
        <Button
          value="8"
          className="Button GrayButton"
          onClick={this.handleButtonClick}
        />
        <Button
          value="9"
          className="Button GrayButton"
          onClick={this.handleButtonClick}
        />
        <Button
          value="x"
          className="Button OrangeButton"
          onClick={this.handleButtonClick}
        />

        <br />

        <Button
          value="4"
          className="Button GrayButton"
          onClick={this.handleButtonClick}
        />
        <Button
          value="5"
          className="Button GrayButton"
          onClick={this.handleButtonClick}
        />
        <Button
          value="6"
          className="Button GrayButton"
          onClick={this.handleButtonClick}
        />
        <Button
          value="-"
          className="Button OrangeButton"
          onClick={this.handleButtonClick}
        />

        <br />

        <Button
          value="1"
          className="Button GrayButton"
          onClick={this.handleButtonClick}
        />
        <Button
          value="2"
          className="Button GrayButton"
          onClick={this.handleButtonClick}
        />
        <Button
          value="3"
          className="Button GrayButton"
          onClick={this.handleButtonClick}
        />
        <Button
          value="+"
          className="Button OrangeButton"
          onClick={this.handleButtonClick}
        />

        <br />

        <Button
          value="0"
          className="Button GrayButton LargeButton"
          onClick={this.handleButtonClick}
        />
        <Button
          value="."
          className="Button GrayButton"
          onClick={this.handleButtonClick}
        />
        <Button
          value="="
          className="Button OrangeButton"
          onClick={this.handleButtonClick}
        />
      </div>
    );
  }
}

export default Calculator;
