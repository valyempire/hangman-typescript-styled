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
    fontSize: 50,
    marginTop: 64,
    [theme.breakpoints.down("md")]: {
      fontSize: 55,
      marginTop: 15,
      marginBottom: 15,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 35,
      marginTop: 16,
    },
  };
});
