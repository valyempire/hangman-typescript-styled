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
export const WordContainer = styled("div")(({ theme }) => {
  return {
    fontFamily: "sans-serif",
    letterSpacing: "1em",
    margin: "5px 2px 2px 2px",
    fontSize: "2rem",
    [theme.breakpoints.down("md")]: {
      marginTop: 10,
      fontSize: 30,
    },
    [theme.breakpoints.down("sm")]: {
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
