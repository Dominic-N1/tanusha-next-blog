import React, { useRef, useEffect } from "react";
import leafHeart from "../utils/leafHeart";
import { LEAF, HEART } from "../config/index";

export interface CanvasProps {
  children: React.ReactNode;
  className: string;
  width: number;
  height: number;
}

const Canvas = (props: CanvasProps): JSX.Element => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas === null) return;
    const context = canvas.getContext("2d");
    if (context === null) return;

    leafHeart(canvas, context, LEAF, HEART);
  }, []);

  return <canvas ref={canvasRef} {...props} />;
};

export default Canvas;
