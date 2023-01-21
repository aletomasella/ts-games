import { useEffect, useState } from "react";

export const useFrame = () => {
  const [frame, setFrame] = useState(1);

  useEffect(() => {
    const id = setInterval(() => {
      setFrame((frame) => frame + 1);
    }, 1000 / 60);

    return () => clearInterval(id);
  }, [frame]);

  return {
    frame,
    setFrame,
  };
};
