const calculate = require("../../src/bl/calculate");


describe("cal", () => {
  it("should add two numbers", () => {
    expect(calculate(1, 2, "+")).toBe(3);
  });
});

describe("cal", () => {
  it("should sub two numbers", () => {
    expect(calculate(1, 2, "-")).toBe(-1);
  });
});

describe("cal", () => {
  it("should mul two numbers", () => {
    expect(calculate(1, 2, "*")).toBe(2);
  });
});

describe("cal", () => {
  it("should div two numbers", () => {
    expect(calculate(1, 2, "/")).toBe(0.5);
  });
});

describe("cal", () => {
  it("should throw an error", () => {
    expect(() => {
      calculate("a", 2, "+");
    }).toThrow();
  });
});

describe("cal", () => {
  it("should throw an error", () => {
    expect(() => {
      calculate(1, "a", "+");
    }).toThrow();
  });
});

describe("cal", () => {
  it("should throw an error", () => {
    expect(() => {
      calculate(1, 2, "a");
    }).toThrow();
  });
});
