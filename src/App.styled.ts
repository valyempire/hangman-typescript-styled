import { styled } from "@mui/system";

export const AppContainer = styled("div")(() => {
  return {
    // fontFamily: "Lucida Handwriting",
    textAlign: "center",
    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background:
      "url(https://c0.wallpaperflare.com/preview/696/429/190/paper-texture-structure-lined-paper.jpg)",
    backgroundRepeat: "no-repeat",
    objectFit: "contain",
    backgroundSize: "cover",
  };
});
