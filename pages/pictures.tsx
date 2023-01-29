import { useState } from "react";
import Image from "next/image";
import Slider from "../components/slider/lib/Slider";
import images from "../components/slider/images";

// Whatever you render out in the Slider will be draggable 'slides'
export default function Pictures() {
  // state should start with the index you want to start the slide on
  const [index, setIndex] = useState(1);

  const increment = () => {
    if (index < images.length - 1) setIndex(index + 1);
  };

  const decrement = () => {
    if (index > 0) setIndex(index - 1);
  };

  return (
    <>
      <main className="main_pictures text-gray-700 bg-gray-400">
        <button className="btn left" onClick={decrement} disabled={index === 0}>
          〈
        </button>
        <button
          className="btn right"
          onClick={increment}
          disabled={index === images.length - 1}
        >
          〉
        </button>
        <Slider
          onSlideComplete={setIndex}
          onSlideStart={(i: number) => {
            // console.log("started dragging on slide", i);
          }}
          activeIndex={index}
          threshHold={100}
          transition={0.3}
          scaleOnDrag={true}
        >
          {images.map(({ url, title, width, height }) => (
            <Image
              src={url}
              key={title}
              alt={title}
              width={width}
              height={height}
            />
          ))}
        </Slider>
      </main>
    </>
  );
}
