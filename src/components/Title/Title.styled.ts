/**
 * Imports styled
 */
import { styled } from "@mui/system";

/**
 * Styles the Pokecard
 */
export const TitleContainer = styled("h1")(({ theme }) => {
  return {
    fontFamily: "Lucida Handwriting",
    color: "blue",
    fontSize: 40,
    [theme.breakpoints.down("md")]: {
      fontSize: 55,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 35,
    },
  };
});
