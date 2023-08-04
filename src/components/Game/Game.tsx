import React, { useEffect, useState } from "react";

/**
 * Imports styles
 */
import { Container, MistakesContainer, WinnerContainer } from "./Game.styled";
import { Button, Grid } from "@mui/material";
/**
 * Imports types
 */
import { HistoryItem } from "./Game.types";

/**
 * Imports components
 */
import { Title } from "../Title";
import { GameDrawing } from "../GameDrawing";
import { Keyboard } from "../Keyboard";
import { History } from "../History";
import { Word } from "../Word";

/**
 * Imports hooks
 */
import { useUtils } from "../../hooks";

/**
 * Displays the component
 */
export const Game: React.FC = () => {
  /**
   * Initializes the guessed letters
   */
  const [lettersPressed, setLettersPressed] = useState<string[]>([]);

  /**
   * Initializes the word to guess
   */
  const [wordToGuess, setWordToGuess] = useState("");
  /**
   * Initializes the number of mistakes
   */
  const [numberOfMistakes, setNumberOfMistakes] = useState(0);

  /**
   * Initializes the game over
   */
  const [gameOver, setGameOver] = useState(false);

  /**
   * Initializes the winner
   */
  const [isWinner, setIsWinner] = useState(false);

  /**
   * Initializes the history
   */
  const [history, setHistory] = useState<HistoryItem[]>([]);

  /**
   * Gets utility
   */
  const { randomWord } = useUtils();

  /**
   * Handles the words guess
   */
  useEffect(() => {
    setWordToGuess(randomWord);
    // eslint-disable-next-line
  }, []);

  /**
   * Handles the format letters
   */
  const formatLetter = (letter: string, index: number) => {
    if (index === 0 || gameOver) return letter;
    if (wordToGuess.length - 1 === index) return letter;
    return lettersPressed.includes(letter) ? letter : "_";
  };

  /**
   * Handles the winner
   */
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

  /**
   * Handles the letters presed
   */
  useEffect(() => {
    if (wordToGuess.length > 0 && lettersPressed.length < 1) {
      const firstLetter = wordToGuess[0];
      const lastLetter = wordToGuess[wordToGuess.length - 1];
      setLettersPressed([firstLetter, lastLetter]);
    }
    // eslint-disable-next-line
  }, [wordToGuess]);

  /**
   * Handles the game over
   */
  useEffect(() => {
    if (numberOfMistakes >= 6) {
      setGameOver(true);
    }
  }, [numberOfMistakes]);

  /**
   * Handles the letters includes in array
   */
  const handleClick = (letter: string) => {
    if (lettersPressed.includes(letter) || gameOver) return;
    setLettersPressed((currentState) => {
      return [...currentState, letter];
    });
    if (!wordToGuess.split("").includes(letter)) {
      setNumberOfMistakes((currentState) => (currentState += 1));
    }
  };

  /**
   * Handles the reset game
   */
  const handleResetGame = () => {
    setLettersPressed([]);
    setWordToGuess(randomWord);
    setGameOver(false);
    setNumberOfMistakes(0);
    setIsWinner(false);
    setHistory((currentState) => {
      return [{ wordToGuess, isWinner, numberOfMistakes }, ...currentState];
    });
  };

  return (
    <Container className="hangman">
      <Grid item xs={12}>
        <History history={history} />
      </Grid>
      <Title />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Button id="reset" onClick={handleResetGame}>
            Reset
          </Button>
          <WinnerContainer className="winner" variant="h1">
            {gameOver && !isWinner ? "You Lose!!!" : null}
            {isWinner ? "You Won!!!" : null}
          </WinnerContainer>
        </Grid>
        <Grid item xs={12}>
          <GameDrawing numberOfMistakes={numberOfMistakes} />
        </Grid>
        <Grid item xs={12}>
          <MistakesContainer variant="body1">{`Numbers of mistakes: ${numberOfMistakes}`}</MistakesContainer>
        </Grid>
        <Grid item xs={12}>
          <Word
            wordToGuess={wordToGuess}
            formatLetter={formatLetter}
            gameOver={gameOver}
            lettersPressed={lettersPressed}
          />
        </Grid>
        <Grid item xs={12}>
          {!gameOver && (
            <Keyboard onClick={handleClick} lettersPressed={lettersPressed} />
          )}
        </Grid>
      </Grid>
    </Container>
  );
};
