/**
 * Imports styled
 */
import { styled } from "@mui/system";

/**
 * Styles the Title
 */
export const Container = styled("div")(({ theme }) => {
  return {
    fontFamily: "sans-serif",
    textAlign: "center",
    display: "inline-block",
    width: 306,
    marginTop: 0,
    marginBottom: 10,
    [theme.breakpoints.down("md")]: {
      width: "70%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  };
});
