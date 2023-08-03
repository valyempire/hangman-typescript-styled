/**
 * Imports styled
 */
import { styled } from "@mui/system";

/**
 * Styles the Container
 */
export const Container = styled("div")(() => {
  return {
    position: "absolute",
    left: "auto",
    width: 200,
    height: 300,
    margin: 70,
    color: " red",
    fontSize: "large",
    fontWeight: "bold",

    marginLeft: 250,
    "@media (max-width: 820px)": {
      marginLeft: 60,
    },

    "@media (max-width: 391px)": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      marginTop: -12,
      height: 200,
      marginLeft: -66,
      fontSize: 10,
    },
  };
});

/**
 * Styles the Title
 */
export const Title = styled("p")(() => {
  return {
    textDecoration: "underline",
    color: "dark",
    fontSize: " x-large",
    "@media (max-width: 391px)": {
      marginTop: 100,
      fontSize: 18,
    },
  };
});

/**
 * Styles the Display
 */
export const Display = styled("div")(() => {
  return {
    maxHeight: 350,
    overflow: "auto",
  };
});
