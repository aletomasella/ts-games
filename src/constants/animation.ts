export const SPRITE_WIDTH = 575;
export const SPRITE_HEIGHT = 523;

export const STAGGER_DELAY = 3;

export type AnimationState =
  | "IDLE"
  | "JUMP"
  | "FALL"
  | "RUN"
  | "DIZZY"
  | "SIT"
  | "ROLL"
  | "BITE"
  | "KO"
  | "HIT";

export const ANIMATION_STATES: { name: AnimationState; frames: number }[] = [
  {
    name: "IDLE",
    frames: 7,
  },
  {
    name: "JUMP",
    frames: 7,
  },
  {
    name: "FALL",
    frames: 7,
  },
  {
    name: "RUN",
    frames: 9,
  },
  {
    name: "DIZZY",
    frames: 11,
  },
  {
    name: "SIT",
    frames: 5,
  },
  {
    name: "ROLL",
    frames: 7,
  },
  {
    name: "BITE",
    frames: 7,
  },
  {
    name: "KO",
    frames: 12,
  },
  {
    name: "HIT",
    frames: 4,
  },
];

// TRANSFORM THIS ARRAY TO A MAP OF ANIMATION STATES
export const ANIMATION_FRAMES = ANIMATION_STATES.map((state, index) => {
  const frames = {
    location: [] as { x: number; y: number }[],
  };

  for (let i = 0; i < state.frames; i++) {
    frames.location.push({
      x: i * SPRITE_WIDTH,
      y: index * SPRITE_HEIGHT,
    });
  }

  return {
    name: state.name,
    ...frames,
  };
}).reduce((acc, curr) => {
  acc[curr.name] = { location: curr.location };
  return acc;
}, {} as { [animation in AnimationState]: { location: { x: number; y: number }[] } });
