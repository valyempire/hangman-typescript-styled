import { HangmanWords } from "../../constants";

/**
 * Gets general utils
 */
export const useUtils = () => {
  /**
   * Return a random word
   */
  const randomWord = () => {
    return HangmanWords[Math.floor(Math.random() * HangmanWords.length)];
  };
  return { randomWord };
};
