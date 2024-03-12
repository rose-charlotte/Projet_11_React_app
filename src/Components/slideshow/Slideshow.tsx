import style from "./Slideshow.module.scss";
import ArrowBackward from "../../assets/images/ArrowBackward.svg?react";
import ArrowForward from "../../assets/images/ArrowForward.svg?react";

import { useState } from "react";

export function Slideshow(props: SlideshowProps) {
  const [index, setIndex] = useState(0);

  const moveBackward = () => {
    setIndex((prevIndex) => prevIndex - 1);

    if (index <= 0) {
      setIndex((prevIndex) => prevIndex + props.photos.length);
    }
  };
  const moveForward = () => {
    setIndex((prevIndex) => prevIndex + 1);
    if (index >= props.photos.length - 1) {
      setIndex((prevIndex) => prevIndex - props.photos.length);
    }
  };

  const monoPhoto = props.photos.length === 1;
  return (
    <div className={style.container}>
      <div className={style.slideContainer}>
        {!monoPhoto && (
          <ArrowBackward onClick={moveBackward} className={style.arrowB} />
        )}

        <img
          className={style.img}
          src={props.photos[index]}
          alt="photo logement"
        />

        {!monoPhoto && (
          <p className={style.pageNum}>
            {index + 1}/{props.photos.length}
          </p>
        )}

        {!monoPhoto && (
          <ArrowForward onClick={moveForward} className={style.arrowF} />
        )}
      </div>
    </div>
  );
}

export interface SlideshowProps {
  photos: string[];
}
