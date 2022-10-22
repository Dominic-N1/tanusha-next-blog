import React, { useRef, useEffect } from "react";
import leafHeart from "@/utils/leafHeart";
import { LEAF, HEART } from "@/config/index";

const Canvas = (props) => {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    leafHeart(canvas, context, LEAF, HEART);
  }, []);

  return <canvas ref={canvasRef} {...props} />;
};

export default Canvas;
