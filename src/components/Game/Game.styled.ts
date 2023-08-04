import { styled } from "@mui/system";

/**
 * Imports Material UI components
 */
import { Typography, Grid } from "@mui/material";

/**
 * Styles the Container
 */
export const Container = styled(Grid)(({ theme }) => {
  return {
    height: "100vh",
    width: "100%",
    display: "flex",
    alignItem: "center",
    justifyContent: "center",
    flexDirection: "column",
    position: "relative",
    // height: "100%",
    color: "black",
    textAlign: "center",

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
      background: " rgb(0, 8, 255)",
      boxShadow: "0 6px rgb(0, 129, 210)",
      transform: "rotate(20deg)",
      "&:hover": {
        background: "rgb(244, 3, 3)",
        color: "white",
      },
    },
    [theme.breakpoints.down("md")]: {
      display: "flex",
      "& button": {
        width: "17%",
        // margin: "4px 4px 5px 3px",
        "&#reset": {
          display: "flex",
          position: "absolute",
          width: "16%",
          marginLeft: 609,
          marginTop: 100,
          transform: "rotate(8deg)",
        },
      },
    },
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      "& button": {
        width: "9%",
        "&#reset": {
          display: "flex",
          position: "absolute",
          width: "auto",
          // marginLeft: 235,
          marginLeft: 251,
          marginTop: -15,
          // marginRight: 30,
          transform: "rotate(8deg)",
          fontSize: 10,
          padding: 4,
        },
      },
    },
  };
});

/**
 * Styles the MistakesContainer
 */
export const MistakesContainer = styled(Typography)(({ theme }) => {
  return {
    color: "red",
    fontSize: "large",
    fontWeight: "bold",
    [theme.breakpoints.down("sm")]: {
      marginTop: 0,
      fontSize: 20,
    },
  };
});

/**
 * Styles the WinnerContainer
 */
export const WinnerContainer = styled(Typography)(({ theme }) => {
  return {
    font: " 1.7rem rapscallion",
    color: "blue",
    fontSize: 62,
    fontWeight: "bold",
    margin: 0,
    [theme.breakpoints.down("sm")]: {
      fontSize: 20,
      marginBottom: 20,
    },
  };
});
