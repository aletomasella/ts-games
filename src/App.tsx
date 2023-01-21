import { useState } from "react";
import AnimationSelecter from "./components/AnimationSelecter";
import Canvas from "./components/Canvas";
import { AnimationState } from "./constants";

function App() {
  const [state, setState] = useState<AnimationState>("FALL");

  return (
    <>
      <Canvas state={state} setState={setState} />
      <AnimationSelecter state={state} setState={setState} />
    </>
  );
}

export default App;
