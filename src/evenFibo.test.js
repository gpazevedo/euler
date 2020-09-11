const { fiboEvenSum } = require("./evenFibo");

describe("fiboEvenSum", () => {
  it("fiboEvenSum(5)", () => {
    expect(fiboEvenSum(10)).toEqual(10);
  });

  it("fiboEvenSum(34)", () => {
    expect(fiboEvenSum(34)).toEqual(44);
  });

  it("fiboEvenSum(60)", () => {
    expect(fiboEvenSum(60)).toEqual(44);
  });

  it("fiboEvenSum(1000)", () => {
    expect(fiboEvenSum(1000)).toEqual(798);
  });
});
