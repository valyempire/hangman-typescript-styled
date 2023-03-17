import { HANGMAN_WORDS } from "../../constants";

/**
 * Gets general utils
 */
export const useUtils = () => {
  /**
   * Return a random word
   */
  const randomWord = () => {
    return HANGMAN_WORDS[Math.floor(Math.random() * HANGMAN_WORDS.length)];
  };
  return { randomWord };
};
