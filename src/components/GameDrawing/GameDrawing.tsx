import React from "react";

/**
 * Imports images
 */
import gallow from "../../assets/gallow.jpg";
import head from "../../assets/head.jpg";
import body from "../../assets/body.jpg";
import leftHand from "../../assets/leftHand.jpg";
import rightHand from "../../assets/rightHand.jpg";
import leftLeg from "../../assets/leftLeg.jpg";
import rightLeg from "../../assets/rightLeg.jpg";
/* Imports styles
 */

import { ImgContainer } from "./GameDrawing.styles";

/**
 * Imports types
 */
import { GameDrawingProps } from "./GameDrawing.types";

const Image = [gallow, head, body, leftHand, rightHand, leftLeg, rightLeg];

/**
 * Displays the component
 */
export const GameDrawing: React.FC<GameDrawingProps> = (props) => {
  const { numberOfMistakes } = props;

  return (
    <div>
      <ImgContainer src={Image[numberOfMistakes]} alt="img" />
    </div>
  );
};
