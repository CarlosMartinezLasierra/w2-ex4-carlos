import guessVocals from "./index";

describe("guessVocals function", () => {
  test("should return true if the word contains all vowels", () => {
    const word = "murcielago";
    const result = guessVocals(word);
    expect(result).toBe(true);
  });

  test("should return false if the word doesn't contain all vowels", () => {
    const word = "hello";
    const result = guessVocals(word);
    expect(result).toBe(false);
  });
});
