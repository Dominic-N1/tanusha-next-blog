import React, { useRef } from "react";

interface SlideProps {
  child: JSX.Element;
  sliderWidth: number;
  sliderHeight: number;
  scaleOnDrag?: boolean;
}

const css = String.raw;

function Slide({
  child,
  sliderWidth,
  sliderHeight,
  scaleOnDrag = false,
}: SlideProps) {
  const slideRef = useRef<HTMLDivElement>(null);

  const onPointerDown = () => {
    if (scaleOnDrag && slideRef.current)
      slideRef.current.style.transform = "scale(0.9)";
  };

  const onPointerUp = () => {
    if (scaleOnDrag && slideRef.current)
      slideRef.current.style.transform = "scale(1)";
  };
  const [heightScale, widthScale] = [
    child.props.height / sliderHeight,
    child.props.width / sliderWidth,
  ];

  let scale = 1.1;
  if (heightScale < widthScale) {
    scale *= widthScale / heightScale;
  }
  const [height, width] = [
    sliderHeight / scale,
    (sliderHeight * (child.props.width / child.props.height)) / scale,
  ];

  return (
    <>
      <style>
        {css`
          .rtds-single-slide-styles img {
            max-width: 100%;
            max-height: 100%;
          }
        `}
      </style>
      <div
        ref={slideRef}
        style={{
          width: `${sliderWidth}px`,
          height: `${sliderHeight}px`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "transform 0.2s ease-out",
        }}
        className="rtds-single-slide-styles"
      >
        <div
          style={{
            padding: "1rem",
            height: height,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            userSelect: "none",
            width: width,
          }}
          onPointerDown={onPointerDown}
          onPointerUp={onPointerUp}
          onPointerLeave={onPointerUp}
          onDragStart={(e) => {
            e.preventDefault();
            e.stopPropagation();
            return false;
          }}
        >
          {child}
        </div>
      </div>
    </>
  );
}

export default Slide;
