import { useState } from "react";
import style from "./DropDown.module.scss";

export function DropDown(props: DropDownProps) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  return (
    <div className={style.container}>
      <span className={style.title}>{props.title}</span>
      <button onClick={toggleDropdown} className={style.arrow}>
        <img
          className={style.img}
          src="src/assets/images/arrow_back_ios-24px 2.png"
          alt="arrow"
        />
      </button>
      {isOpen && <div>ca marche</div>}
    </div>
  );
}
export interface DropDownProps {
  title: string;
}
