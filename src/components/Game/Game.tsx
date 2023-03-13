import React, { useEffect, useState } from "react";
import { Title } from "../Title/Title";
import { Images } from "../Images/Images";
import { Keyboard } from "../Keyboard/Keyboard";
import { Word } from "../Word/Word";
import words from "../wordlist.json";
import "./Game.css";
// import { LettersProps } from "./Game.types";

const getWord = () => {
  return words[Math.floor(Math.random() * words.length)];
};

export const Game: React.FC = () => {
  const [lettersPressed, setLettersPressed] = useState<string[]>([]);
  const [wordToGuess, setWordToGuess] = useState("");
  const [numberOfMistakes, setNumberOfMistakes] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [isWinner, setIsWinner] = useState(false);

  useEffect(() => {
    setWordToGuess(getWord());
  }, []);

  const formatLetter = (letter: string, index: number) => {
    if (index === 0) return letter;
    if (wordToGuess.length - 1 === index) return letter;
    return lettersPressed.includes(letter) ? letter : "_";
  };

  useEffect(() => {
    if (wordToGuess.length > 0 && lettersPressed.length > 0) {
      const isWinner = wordToGuess
        .split("")
        .every((letter) => lettersPressed.includes(letter));
      if (isWinner) {
        setIsWinner(true);
        setGameOver(true);
      }
    }
    // eslint-disable-next-line
  }, [lettersPressed, wordToGuess]);

  useEffect(() => {
    if (wordToGuess.length > 0 && lettersPressed.length < 1) {
      const firstLetter = wordToGuess[0];
      const lastLetter = wordToGuess[wordToGuess.length - 1];
      setLettersPressed([firstLetter, lastLetter]);
    }
    // eslint-disable-next-line
  }, [wordToGuess]);

  useEffect(() => {
    if (numberOfMistakes >= 6) {
      setGameOver(true);
    }
  }, [numberOfMistakes]);

  const handleClick = (letter: string) => {
    if (lettersPressed.includes(letter) || gameOver) return;
    setLettersPressed((currentState) => {
      return [...currentState, letter];
    });
    if (!wordToGuess.split("").includes(letter)) {
      setNumberOfMistakes((currentState) => (currentState += 1));
    }
  };

  const handleResetGame = () => {
    setLettersPressed([]);
    setWordToGuess(getWord());
    setGameOver(false);
    setNumberOfMistakes(0);
    setIsWinner(false);
  };

  return (
    <div className="Hangman">
      <Title />
      <div
        style={{ color: "blue", lineHeight: 1, padding: 1 }}
      >{`numbers of mistakes are : ${numberOfMistakes}`}</div>

      <div style={{ color: "red", lineHeight: 1, padding: 1 }}>
        {gameOver && !isWinner && <h1>gameOver</h1>}
      </div>
      <div style={{ color: "green", lineHeight: 1, padding: 1 }}>
        {isWinner && <h1>YOU WON</h1>}
      </div>
      <Images numberOfMistakes={numberOfMistakes} />

      <Word wordToGuess={wordToGuess} formatLetter={formatLetter} />
      {!gameOver && <Keyboard onClick={handleClick} />}
      <hr />
      <button id="reset" onClick={handleResetGame}>
        Reset
      </button>
    </div>
  );
};
