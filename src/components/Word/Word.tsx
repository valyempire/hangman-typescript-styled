import React from "react";

/**
 * Imports types
 */
import { WordProps } from "./Word.types";

/**
 * Imports styled
 */
import { WordContainer, ColorLetter } from "./Words.styled";

/**
 * Displays the component
 */
export const Word: React.FC<WordProps> = (props) => {
  const { wordToGuess, formatLetter, gameOver, lettersPressed } = props;

  /**
   * Dispalys the word to guees and format letters
   */
  const renderWord = () => {
    return wordToGuess.split("").map((letter: string, index: number) => {
      return (
        <ColorLetter
          gameOver={gameOver}
          lettersPressed={lettersPressed}
          letter={letter}
          key={`${wordToGuess}_${index}`}
        >
          {formatLetter(letter, index)}
        </ColorLetter>
      );
    });
  };

  return <WordContainer>{renderWord()}</WordContainer>;
};
