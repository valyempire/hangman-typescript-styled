/**
 * Imports styled
 */
import { styled } from "@mui/system";

/**
 * Styles the Container
 */
export const Container = styled("div")(({ theme }) => {
  return {
    position: "absolute",
    left: "auto",
    width: 200,
    height: 300,
    margin: 70,
    color: " red",
    fontSize: "large",
    fontWeight: "bold",
    marginTop: 140,
    marginLeft: 250,

    [theme.breakpoints.down("md")]: {
      marginLeft: 14,
      marginTop: 197,
    },
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      marginTop: -12,
      height: 200,
      marginLeft: -62,
      fontSize: 10,
    },
  };
});

/**
 * Styles the Title
 */
export const Title = styled("p")(({ theme }) => {
  return {
    textDecoration: "underline",
    color: "dark",
    fontSize: " x-large",

    [theme.breakpoints.down("sm")]: {
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
