import React from "react";

/**
 * Imports types
 */
import { WordProps } from "./Word.types";

/**
 * Imports styled
 */
import { WordContainer } from "./Words.styled";

/**
 * Displays the component
 */
export const Word: React.FC<WordProps> = (props) => {
  const { wordToGuess, formatLetter, gameOver, lettersPressed } = props;

  const renderWord = () => {
    return wordToGuess.split("").map((letter: string, index: number) => {
      return (
        <span
          style={{
            color:
              gameOver && !lettersPressed.includes(letter) ? "red" : "dark",
          }}
          key={`${wordToGuess}_${index}`}
        >
          {formatLetter(letter, index)}
        </span>
      );
    });
  };

  return <WordContainer>{renderWord()}</WordContainer>;
};
