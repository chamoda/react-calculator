class Engine {
  constructor() {
    this.number = "";

    this.previousInput = null;
    this.previousNumber = null;
    this.previousOperation = null;
    this.repeatNumber = null;
    this.repeatOperation = null;
    this.clearable = false;

    this.OperationEnum = {
      addition: "+",
      subtraction: "-",
      multiplication: "x",
      division: "\u00F7",
      percentage: "%",
      sign: "+/-",
      equal: "=",
      allClear: "AC",
      clear: "C",
    };
  }

  updatePreviousStatus(number, input) {
    this.previousNumber = number;
    this.previousInput = input;
    this.previousOperation = input;
  }

  // Handle and process all digit inputs including .
  handleDigitInput(input) {
    this.clearable = true;

    if (this.isOperation(this.previousInput)) {
      this.number = "";
    }

    if (input === "." && this.containDecimalPoint(this.number)) {
      return this.number;
    }

    if (input === "." && this.number === "") {
      this.number = "0.";
      return this.number;
    }

    this.number += input;

    this.previousInput = input;

    return this.removeZero(this.number);
  }

  // Handle all operation other than digit inputs.
  handleOperationInput(input) {
    if (
      input === this.OperationEnum.addition ||
      input === this.OperationEnum.subtraction ||
      input === this.OperationEnum.multiplication ||
      input === this.OperationEnum.division
    ) {
      return this.handleBaiscMathOperation(input);
    }

    if (input === this.OperationEnum.percentage) {
      return this.handlePercentageOperation();
    }

    if (input === this.OperationEnum.sign) {
      return this.handleSignOperation();
    }

    if (input === this.OperationEnum.allClear) {
      return this.handleAllClearOperation();
    }

    if (input === this.OperationEnum.clear) {
      return this.handleClearOperation();
    }

    if (input === this.OperationEnum.equal) {
      return this.handleEqualOperation(input);
    }
  }

  // Only handle basic +, -, /, x operations
  handleBaiscMathOperation(input) {
    this.repeatNumber = null;
    this.repeatOperation = null;

    if (this.previousNumber == null) {
      this.updatePreviousStatus(this.number, input);

      return this.number;
    } else {
      let temp = this.previousInput;
      this.previousInput = input;

      if (
        temp !== input &&
        this.previousOperation !== this.OperationEnum.equal &&
        temp !== "="
      ) {
        if (this.previousOperation === this.OperationEnum.addition) {
          this.number = this.add(this.previousNumber, this.number);
        }
        if (this.previousOperation === this.OperationEnum.subtraction) {
          this.number = this.subtract(this.previousNumber, this.number);
        }
        if (this.previousOperation === this.OperationEnum.multiplication) {
          this.number = this.muliply(this.previousNumber, this.number);
        }
        if (this.previousOperation === this.OperationEnum.division) {
          this.number = this.divide(this.previousNumber, this.number);
        }

        this.updatePreviousStatus(this.number, input);

        return this.number;
      } else {
        this.updatePreviousStatus(this.number, input);

        return this.number;
      }
    }
  }

  handlePercentageOperation() {
    if (this.number === "") {
      this.number = "0";
    }

    this.number = this.percentage(this.number);

    return this.number;
  }

  handleSignOperation() {
    if (this.number === "") {
      this.number = "0";
    }

    this.number = this.changeSign(this.number);

    return this.number;
  }

  handleAllClearOperation() {
    return this.allClear();
  }

  handleClearOperation() {
    return this.clear();
  }

  // Paramter operation is one of add, subtract, multiply or divide
  perform(operation) {
    if (this.repeatNumber !== null) {
      this.number = operation(this.number, this.repeatNumber);
    } else {
      this.repeatNumber = this.number;
      this.number = operation(this.previousNumber, this.number);
    }
  }

  handleEqualOperation(input) {
    if (this.previousNumber == null) {
      this.updatePreviousStatus(this.number, input);

      return this.number;
    } else {
      this.previousInput = input;

      if (
        this.previousOperation !== this.OperationEnum.equal &&
        input === this.OperationEnum.equal
      ) {
        let temp = this.number;

        if (this.previousOperation === this.OperationEnum.addition) {
          this.perform(this.add);
        }
        if (this.previousOperation === this.OperationEnum.subtraction) {
          this.perform(this.subtract);
        }
        if (this.previousOperation === this.OperationEnum.multiplication) {
          this.perform(this.muliply);
        }
        if (this.previousOperation === this.OperationEnum.division) {
          this.perform(this.divide);
        }

        this.repeatNumber = temp;
        this.repeatOperation = this.previousOperation;
        this.previousInput = input;
        this.previousOperation = input;

        return this.number;
      } else {
        let temp = this.number;

        if (this.repeatNumber != null) {
          if (this.repeatOperation === this.OperationEnum.addition) {
            this.number = this.add(this.number, this.repeatNumber);
          }
          if (this.repeatOperation === this.OperationEnum.subtraction) {
            this.number = this.subtract(this.number, this.repeatNumber);
          }
          if (this.repeatOperation === this.OperationEnum.multiplication) {
            this.number = this.muliply(this.number, this.repeatNumber);
          }
          if (this.repeatOperation === this.OperationEnum.division) {
            this.number = this.divide(this.number, this.repeatNumber);
          }
        }

        this.updatePreviousStatus(temp, input);

        return this.number;
      }
    }
  }

  calculate(input) {
    if (this.isDigit(input)) {
      return this.handleDigitInput(input);
    }

    if (this.isOperation(input)) {
      return this.handleOperationInput(input);
    }

    return "Error";
  }

  isDigit(input) {
    return !isNaN(input) || input === ".";
  }

  isOperation(input) {
    return Object.values(this.OperationEnum).includes(input);
  }

  add(previousNumber, number) {
    return (parseFloat(previousNumber) + parseFloat(number)).toString();
  }

  subtract(previousNumber, number) {
    return (parseFloat(previousNumber) - parseFloat(number)).toString();
  }

  muliply(previousNumber, number) {
    return (parseFloat(previousNumber) * parseFloat(number)).toString();
  }

  divide(previousNumber, number) {
    return (parseFloat(previousNumber) / parseFloat(number)).toString();
  }

  percentage(number) {
    return (parseFloat(number) / 100).toString();
  }

  changeSign(number) {
    return parseFloat(number) === 0
      ? "0"
      : (parseFloat(number) * -1).toString();
  }

  clear() {
    this.previousInput = null;
    this.previousNumber = null;
    this.previousOperation = null;
    this.repeatNumber = null;
    this.repeatOperation = null;
    this.clearable = false;

    return this.number;
  }

  allClear() {
    this.number = "";
    this.previousInput = null;
    this.previousNumber = null;
    this.previousOperation = null;
    this.repeatNumber = null;
    this.repeatOperation = null;
    this.clearable = false;

    return "0";
  }

  removeZero(number) {
    if (number.length > 1 && number[0] === "0" && number[1] !== ".") {
      return this.removeZero(number.substr(1, number.length));
    }

    return number;
  }

  containDecimalPoint(number) {
    return number.includes(".");
  }
}

export default Engine;
