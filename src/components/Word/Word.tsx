import React from "react";
import { WordProps } from "./Word.types";

export const Word: React.FC<WordProps> = (props) => {
  const { wordToGuess, formatLetter } = props;

  const renderWord = () => {
    return wordToGuess.split("").map((letter: string, index: number) => {
      return (
        <span
          style={{
            letterSpacing: "0.75em",
            color: letter ? "green" : "red",
          }}
          key={index}
        >
          {formatLetter(letter, index)}
        </span>
      );
    });
  };

  return <div>{renderWord()}</div>;
};
