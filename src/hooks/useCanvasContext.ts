import { useEffect, useRef, useState } from "react";

export const useCanvasContext = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;
    setContext(context);
  }, [canvasRef, context]);
  return { canvasRef, context };
};
