import { styled } from "@mui/system";

/**
 * Styles the Container
 */
export const Container = styled("div")(() => {
  return {
    position: "relative",
    height: "100%",
    width: 1000,
    color: "black",
    textAlign: "center",
    zoom: "1.3",
    "& button": {
      border: "none",
      fontFamily: "inherit",
      fontSize: "1rem",
      cursor: "pointer",
      width: 30,
      margin: "5px 2px 2px 2px",
      letterSpacing: 1,
      outline: "none",
      background: "#0031d4ad",
      color: "#fff",
      boxShadow: "0 6px #0f5ded",
      borderRadius: 5,
      paddingTop: 4,
      "&:hover": {
        backgroundColor: "rgb(0, 8, 255)",
      },
      "&:disabled": {
        background: "#bdbdbd",
        color: "#eeeeee",
        boxShadow: "0 6px #9e9e9e",
      },
    },
    "& #reset": {
      display: "inline-block",
      position: "absolute",
      width: "auto",
      marginLeft: 183,
      marginTop: 332,
      background: " rgb(0, 8, 255)",
      boxShadow: "0 6px rgb(0, 129, 210)",
      transform: "rotate(20deg)",
      "&:hover": {
        background: "rgb(244, 3, 3)",
        color: "white",
      },
    },
  };
});

/**
 * Styles the MistakesContainer
 */
export const MistakesContainer = styled("div")(() => {
  return {
    color: "red",
    fontSize: "large",
    fontWeight: "bold",
  };
});

/**
 * Styles the WinnerContainer
 */
export const WinnerContainer = styled("div")(() => {
  return {
    font: " 1.7rem rapscallion",
    color: "blue",
    fontSize: "x-large",
    fontWeight: "bold",
    margin: 0,
  };
});
