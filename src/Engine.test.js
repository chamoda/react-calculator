import Engine from "./Engine";

test("typing numbers", () => {
  let engine = new Engine();

  expect(engine.calculate("1")).toBe("1");
  expect(engine.calculate("2")).toBe("12");
});

test("check remove zero", () => {
  let engine = new Engine();

  expect(engine.removeZero("0")).toBe("0");
  expect(engine.removeZero("01")).toBe("1");
  expect(engine.removeZero("101")).toBe("101");
  expect(engine.removeZero("01010")).toBe("1010");
  expect(engine.removeZero("001010")).toBe("1010");
  expect(engine.removeZero("00001010")).toBe("1010");
});

test("typing numbers starts with zero", () => {
  let engine = new Engine();

  expect(engine.calculate("0")).toBe("0");
  expect(engine.calculate("1")).toBe("1");
  expect(engine.calculate("2")).toBe("12");
});

test("typing decimal values", () => {
  let engine = new Engine();

  expect(engine.calculate("1")).toBe("1");
  expect(engine.calculate(".")).toBe("1.");
  expect(engine.calculate("2")).toBe("1.2");
});

test("check containDecimalPoint", () => {
  let engine = new Engine();

  expect(engine.containDecimalPoint("")).toBe(false);
  expect(engine.containDecimalPoint(".")).toBe(true);
  expect(engine.containDecimalPoint("1.1")).toBe(true);
  expect(engine.containDecimalPoint("1..1")).toBe(true);
});

test("typing decimal values with double decimal", () => {
  let engine = new Engine();

  expect(engine.calculate("1")).toBe("1");
  expect(engine.calculate(".")).toBe("1.");
  expect(engine.calculate(".")).toBe("1.");
  expect(engine.calculate("2")).toBe("1.2");
});

test("typing decimal values start with zero", () => {
  let engine = new Engine();

  expect(engine.calculate("0")).toBe("0");
  expect(engine.calculate(".")).toBe("0.");
  expect(engine.calculate("2")).toBe("0.2");
});

test("typing decimal values start with decimal point", () => {
  let engine = new Engine();

  expect(engine.calculate(".")).toBe("0.");
  expect(engine.calculate("1")).toBe("0.1");
  expect(engine.calculate(".")).toBe("0.1");
  expect(engine.calculate("0")).toBe("0.10");
});

test("addition only using + button", () => {
  let engine = new Engine();

  expect(engine.calculate("1")).toBe("1");
  expect(engine.calculate("+")).toBe("1");
  expect(engine.calculate("2")).toBe("2");
  expect(engine.calculate("+")).toBe("3");
  expect(engine.calculate("3")).toBe("3");
  expect(engine.calculate("+")).toBe("6");
});

test("addition only using + button with double click +", () => {
  let engine = new Engine();

  expect(engine.calculate("1")).toBe("1");
  expect(engine.calculate("+")).toBe("1");
  expect(engine.calculate("+")).toBe("1");
  expect(engine.calculate("2")).toBe("2");
  expect(engine.calculate("+")).toBe("3");
  expect(engine.calculate("+")).toBe("3");
  expect(engine.calculate("3")).toBe("3");
  expect(engine.calculate("+")).toBe("6");
});

test("add using equal", () => {
  let engine = new Engine();

  expect(engine.calculate("1")).toBe("1");
  expect(engine.calculate("+")).toBe("1");
  expect(engine.calculate("2")).toBe("2");
  expect(engine.calculate("=")).toBe("3");
});

test("equal sign behavior", () => {
  let engine = new Engine();

  expect(engine.calculate("1")).toBe("1");
  expect(engine.calculate("=")).toBe("1");
  expect(engine.calculate("2")).toBe("2");
  expect(engine.calculate("=")).toBe("2");
  expect(engine.calculate("+")).toBe("2");
  expect(engine.calculate("3")).toBe("3");
  expect(engine.calculate("+")).toBe("5");
});

test("equal sign repeat behavior", () => {
  let engine = new Engine();

  expect(engine.calculate("1")).toBe("1");
  expect(engine.calculate("+")).toBe("1");
  expect(engine.calculate("2")).toBe("2");
  expect(engine.calculate("=")).toBe("3");
  expect(engine.calculate("=")).toBe("5");
  expect(engine.calculate("=")).toBe("7");
});

test("press plus after equal", () => {
  let engine = new Engine();

  expect(engine.calculate("1")).toBe("1");
  expect(engine.calculate("+")).toBe("1");
  expect(engine.calculate("2")).toBe("2");
  expect(engine.calculate("=")).toBe("3");
  expect(engine.calculate("=")).toBe("5");
  expect(engine.calculate("=")).toBe("7");
  expect(engine.calculate("+")).toBe("7");
});

test("subtract one value from another", () => {
  let engine = new Engine();

  expect(engine.calculate("5")).toBe("5");
  expect(engine.calculate("-")).toBe("5");
  expect(engine.calculate("2")).toBe("2");
  expect(engine.calculate("=")).toBe("3");
});

test("add then subtract", () => {
  let engine = new Engine();

  expect(engine.calculate("5")).toBe("5");
  expect(engine.calculate("+")).toBe("5");
  expect(engine.calculate("3")).toBe("3");
  expect(engine.calculate("-")).toBe("8");
  expect(engine.calculate("5")).toBe("5");
  expect(engine.calculate("=")).toBe("3");
});

test("pressing + after =", () => {
  let engine = new Engine();

  expect(engine.calculate("5")).toBe("5");
  expect(engine.calculate("+")).toBe("5");
  expect(engine.calculate("4")).toBe("4");
  expect(engine.calculate("=")).toBe("9");
  expect(engine.calculate("1")).toBe("1");
  expect(engine.calculate("+")).toBe("1");
});

test("muliply two numbers with muliply", () => {
  let engine = new Engine();

  expect(engine.calculate("3")).toBe("3");
  expect(engine.calculate(engine.OperationEnum.multiplication)).toBe("3");
  expect(engine.calculate("2")).toBe("2");
  expect(engine.calculate(engine.OperationEnum.multiplication)).toBe("6");
});

test("muliply two numbers with equal", () => {
  let engine = new Engine();

  expect(engine.calculate("3")).toBe("3");
  expect(engine.calculate(engine.OperationEnum.multiplication)).toBe("3");
  expect(engine.calculate("2")).toBe("2");
  expect(engine.calculate(engine.OperationEnum.equal)).toBe("6");
});

test("divide with symbol", () => {
  let engine = new Engine();

  expect(engine.calculate("6")).toBe("6");
  expect(engine.calculate(engine.OperationEnum.division)).toBe("6");
  expect(engine.calculate("3")).toBe("3");
  expect(engine.calculate(engine.OperationEnum.division)).toBe("2");
});

test("divide with equal sign", () => {
  let engine = new Engine();

  expect(engine.calculate("6")).toBe("6");
  expect(engine.calculate(engine.OperationEnum.division)).toBe("6");
  expect(engine.calculate("3")).toBe("3");
  expect(engine.calculate(engine.OperationEnum.equal)).toBe("2");
});

test("presentage", () => {
  let engine = new Engine();

  expect(engine.calculate(engine.OperationEnum.percentage)).toBe("0");
  expect(engine.calculate("0")).toBe("0");
  expect(engine.calculate(engine.OperationEnum.percentage)).toBe("0");
  expect(engine.calculate("1")).toBe("1");
  expect(engine.calculate(engine.OperationEnum.percentage)).toBe("0.01");
});

test("change sign", () => {
  let engine = new Engine();

  expect(engine.calculate(engine.OperationEnum.sign)).toBe("0");
  expect(engine.calculate("1")).toBe("1");
  expect(engine.calculate(engine.OperationEnum.sign)).toBe("-1");
  expect(engine.calculate(engine.OperationEnum.sign)).toBe("1");
});

test("all clear", () => {
  let engine = new Engine();

  expect(engine.calculate(engine.OperationEnum.percentage)).toBe("0");
  expect(engine.calculate(engine.OperationEnum.allClear)).toBe("0");
});

test("clear", () => {
  let engine = new Engine();

  expect(engine.calculate("1")).toBe("1");
  expect(engine.calculate(engine.OperationEnum.addition)).toBe("1");
  expect(engine.calculate(engine.OperationEnum.clear)).toBe("1");
  expect(engine.calculate(engine.OperationEnum.subtraction)).toBe("1");
  expect(engine.calculate("2")).toBe("2");
  expect(engine.calculate(engine.OperationEnum.equal)).toBe("-1");
});
