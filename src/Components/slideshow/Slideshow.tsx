import style from "./Slideshow.module.scss";
import ArrowBackward from "../../assets/images/ArrowBackward.svg?react";
import ArrowForward from "../../assets/images/ArrowForward.svg?react";

import { useState } from "react";

export function Slideshow(props: SlideshowProps) {
  const [index, setIndex] = useState(0);

  const moveBackward = () => {
    setIndex((prevIndex) => prevIndex - 1);

    if (index <= 0) {
      setIndex(index);
    }
  };
  const moveForward = () => {
    setIndex((prevIndex) => prevIndex + 1);
    if (index >= props.photos.length - 1) {
      setIndex(index);
    }
  };
  const minIndex = index > 0;
  const maxIndex = index < props.photos.length - 1;
  return (
    <div className={style.container}>
      <div className={style.slideContainer}>
        {minIndex && (
          <ArrowBackward onClick={moveBackward} className={style.arrowB} />
        )}
        <img
          className={style.img}
          src={props.photos[index]}
          alt="photo logement"
        />

        {maxIndex && (
          <ArrowForward onClick={moveForward} className={style.arrowF} />
        )}
      </div>
    </div>
  );
}

export interface SlideshowProps {
  photos: string[];
}
