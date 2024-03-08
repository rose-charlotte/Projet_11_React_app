import { useState } from "react";
import style from "./DropDown.module.scss";

export function DropDown(props: DropDownProps) {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);

  function openDropdown() {
    setIsOpen(!isOpen);
  }

  if (isOpen) {
    console.log("ok");
  }

  return (
    <div className={style.container}>
      <h1 className={style.title}>{props.title}</h1>
      <button onClick={openDropdown} className={style.arrow}>
        <img
          className={style.img}
          src="src/assets/images/arrow_back_ios-24px 2.png"
        />
      </button>
    </div>
  );
}
export interface DropDownProps {
  title: string;
}
