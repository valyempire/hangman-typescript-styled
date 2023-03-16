import React from "react";

/**
 * Imports images
 */
import img0 from "./ImagesContainer/0.jpg";
import img1 from "./ImagesContainer/1.jpg";
import img2 from "./ImagesContainer/2.jpg";
import img3 from "./ImagesContainer/3.jpg";
import img4 from "./ImagesContainer/4.jpg";
import img5 from "./ImagesContainer/5.jpg";
import img6 from "./ImagesContainer/6.jpg";

/**
 * Imports styles
 */
import { ImgContainer } from "./Images.styled";

/**
 * Imports types
 */
import { ImagesProps } from "./Images.types";

const Image = [img0, img1, img2, img3, img4, img5, img6];

/**
 * Displays the component
 */
export const Images: React.FC<ImagesProps> = (props) => {
  const { numberOfMistakes } = props;

  return (
    <div>
      <ImgContainer src={Image[numberOfMistakes]} alt={"img"} />
    </div>
  );
};
