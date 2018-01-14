describe("decode", () => {
  it("example 6: 'a2ba' => 'abba'", () => {
    var result = decode("a2ba");
    expect(result).toEqual("abba");
  });

  it("example 7: 'y10ea i guess' => 'yeeeeeeeeeea i guess'", () => {
    var result = decode("y10ea i guess");
    expect(result).toEqual("yeeeeeeeeeea i guess");
  });

  // Finally, let's try some generated tests to see if we've missed anything.

  it("example 8: reverses encoding", () => {
    for (let i = 0; i < 1000; i++) {
      var string = generateRandomLengthString();
      expect(decode(encode(string))).toEqual(string);
    }
  });

  function randomLowerCaseCharacter() {
    const letterIndex = Math.floor(Math.random() * 26);
    return String.fromCharCode(97 + letterIndex);
  }

  function generateRandomString(length) {
    if (length == 0) {
      return "";
    }
    return generateRandomString(length - 1) + randomLowerCaseCharacter();
  }

  function generateRandomLengthString() {
    const length = Math.floor(Math.random() * 50);
    return generateRandomString(length);
  }
});
