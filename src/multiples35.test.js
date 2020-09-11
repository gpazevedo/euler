const { multiplesOf3and5 } = require("./multiples35");

describe("multiplesOf3and5", () => {
  it("multiplesOf3and5(10)", () => {
    expect(multiplesOf3and5(10)).toEqual(23);
  });

  it("multiplesOf3and5(49)", () => {
    expect(multiplesOf3and5(49)).toEqual(543);
  });

  it("multiplesOf3and5(1000)", () => {
    expect(multiplesOf3and5(1000)).toEqual(233168);
  });

  it("multiplesOf3and5(8456)", () => {
    expect(multiplesOf3and5(8456)).toEqual(16687353);
  });

  it("multiplesOf3and5(19564)", () => {
    expect(multiplesOf3and5(19564)).toEqual(89301183);
  });
});
