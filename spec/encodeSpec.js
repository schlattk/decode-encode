describe("encode", () => {
  // Uncomment these tests one by one and make them pass.
  // Write the simplest possible implementation to pass the test.
  // I've done the first one for you :)

//   it("example 1: '' => ''", () => {
//     var result = encode("");
//     expect(result).toEqual("");
//   });

//   it("example 2: 's' => '1s'", () => {
//     var result = encode("s");
//     expect(result).toEqual("1s");
//   });

//   it("example 3: 'ss' => '2s'", () => {
//     var result = encode("ss");
//     expect(result).toEqual("2s");
//   });

//   it("example 3: 'soo' => '1s2o'", () => {
//     var result = encode("soo");
//     expect(result).toEqual("1s2o");
//   });

  // That last one was more challenging than the previous two.
  // What makes it more challenging?
  // If you were managing someone who had to solve 100 similar problems in a day
  // what tools would you give them to make them most effective?

//   it("example 4: 'abba' => '1a2b1a'", () => {
//     var result = encode("abba");
//     expect(result).toEqual("1a2b1a");
//   });

  // `xit` out all the preceding tests before attempting the next

  it("example 5: 'abba' => 'a2ba'", () => {
    var result = encode("abba");
    expect(result).toEqual("a2ba");
  });
});
