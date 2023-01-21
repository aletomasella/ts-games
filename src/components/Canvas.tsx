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
  requestAnimationFrame(() => draw(context, image, frame, state));
}

const Canvas = () => {
  const { canvasRef, context } = useCanvasContext();
  const [frame, setFrame] = useState(0);
  const [state, setState] = useState<AnimationState>("FALL");

  if (context) {
    const image = generateImage(DogAsset);
    draw(context, image, frame, state);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setFrame((frame) => frame + 1);
    }, 1000 / 60);
    return () => clearInterval(interval);
  }, [frame]);

  return (
    <>
      <canvas
        height={CANVAS_HEIGHT}
        width={CANVAS_WIDTH}
        ref={canvasRef}
        className="border border-black transform"
      />
    </>
  );
};

export default Canvas;
