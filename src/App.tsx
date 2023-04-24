import { useState } from "react";
import AnimationSelecter from "./components/AnimationSelecter";
import Canvas from "./components/Canvas";
import { AnimationState } from "./constants";
import Background from "./components/Background";

function App() {
  const [state, setState] = useState<AnimationState>("FALL");

  return (
    <>
      <Canvas state={state} setState={setState} />
      <AnimationSelecter state={state} setState={setState} />
      <Background />
    </>
  );
}

export default App;
