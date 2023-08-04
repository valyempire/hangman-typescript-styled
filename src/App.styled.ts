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
      // "url(https://c0.wallpaperflare.com/preview/696/429/190/paper-texture-structure-lined-paper.jpg)",
      "url(https://imgv2-1-f.scribdassets.com/img/document/483690001/original/0a764cf1b6/1685189413?v=1)",
    backgroundRepeat: "no-repeat",
    objectFit: "contain",
    backgroundSize: "cover",
  };
});
