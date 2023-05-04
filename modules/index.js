const guessVocals = () => {
  const vocals = ["a", "e", "i", "o", "u"];
  return vocals.every((vowel) => word.includes(vowel));
};
export default guessVocals
