import React from "react";
import { ANIMATION_STATES, AnimationState } from "../constants";

interface AnimationSelecterProps {
  state: string;
  setState: React.Dispatch<React.SetStateAction<AnimationState>>;
}

const AnimationSelecter: React.FC<AnimationSelecterProps> = ({
  state,
  setState,
}) => {
  return (
    <div className="m-4 p-4 mx-auto border border-black w-fit rounded-lg">
      <select
        defaultValue={state}
        onChange={(e) => setState(e.target.value as AnimationState)}
      >
        {ANIMATION_STATES.map((state) => (
          <option key={state.name} value={state.name}>
            {state.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default AnimationSelecter;
