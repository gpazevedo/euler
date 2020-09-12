const { smallestMult, factorsOf } = require("./smallestMultiple");

describe("smallestMultiple", () => {
  it("Factors of 18", () => {
    expect(factorsOf(18)).toEqual(
      new Map([
        [2, 1],
        [3, 2],
      ])
    );
  });

  it("smallestMult 5 ", () => {
    expect(smallestMult(5)).toEqual(60);
  });

  it("smallestMult 7 ", () => {
    expect(smallestMult(7)).toEqual(420);
  });

  it("smallestMult 10 ", () => {
    expect(smallestMult(10)).toEqual(2520);
  });

  it("smallestMult 13 ", () => {
    expect(smallestMult(13)).toEqual(360360);
  });

  it("smallestMult 20 ", () => {
    expect(smallestMult(20)).toEqual(232792560);
  });
});
