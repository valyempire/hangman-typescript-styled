/**
 * Imports types
 */
import { ColorLetterProps } from "./Word.types";

/**
 * Imports styled
 */
import { styled } from "@mui/system";

/**
 * Styles the Container
 */
export const WordContainer = styled("div")(() => {
  return {
    fontFamily: "sans-serif",
    letterSpacing: "1em",
    margin: "0.2em -1em 0.2em 0",
    fontSize: "2rem",
    "@media (max-width: 391px)": {
      marginTop: 10,
      fontSize: 20,
    },
  };
});

/**
 * Styles the ColorLetter
 */
export const ColorLetter = styled("span")<ColorLetterProps>((props) => {
  const { gameOver, lettersPressed, letter } = props;

  return {
    color:
      gameOver && !lettersPressed.includes(letter)
        ? "rgb(255,0,0)"
        : "rgb(0,0,0)",
  };
});
