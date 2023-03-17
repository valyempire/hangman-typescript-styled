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
