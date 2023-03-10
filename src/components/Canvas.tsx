import React, { useEffect, useState } from "react";
import {
  AnimationState,
  ANIMATION_FRAMES,
  CANVAS_HEIGHT,
  CANVAS_WIDTH,
  SPRITE_HEIGHT,
  SPRITE_WIDTH,
  STAGGER_DELAY,
} from "../constants";
import { useCanvasContext } from "../hooks";
import { generateImage } from "../utils";
import DogAsset from "../assets/DOG_ASSETS.png";
import { useFrame } from "../hooks/useFrame";

function draw(
  context: CanvasRenderingContext2D,
  image: HTMLImageElement,
  frame: number,
  state: AnimationState
) {
  context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  const position =
    Math.floor(frame / STAGGER_DELAY) % ANIMATION_FRAMES[state].location.length;
  const { y, x } = ANIMATION_FRAMES[state].location[position];
  context.drawImage(
    image,
    x,
    y,
    SPRITE_WIDTH,
    SPRITE_HEIGHT,
    0,
    0,
    SPRITE_WIDTH,
    SPRITE_HEIGHT
  );
}

interface CanvasProps {
  state: AnimationState;
  setState: (state: AnimationState) => void;
}

const Canvas: React.FC<CanvasProps> = ({ state, setState }) => {
  const { canvasRef, context } = useCanvasContext();
  const { frame, setFrame } = useFrame();

  if (context) {
    const image = generateImage(DogAsset);
    draw(context, image, frame, state);
  }

  return (
    <>
      <canvas
        height={CANVAS_HEIGHT}
        width={CANVAS_WIDTH}
        ref={canvasRef}
        className="mx-auto"
      />
    </>
  );
};

export default Canvas;
