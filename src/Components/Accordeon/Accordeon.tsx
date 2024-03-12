import { useState } from "react";
import ArrowUp from "../../assets/images/ArrowUp.svg?react";
import ArrowDown from "../../assets/images/ArrowDown.svg?react";
import style from "./Accordeon.module.scss";

export function Accordeon(props: DropDownProps) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  return (
    <div className={style.container}>
      <button onClick={toggleDropdown} className={style.arrow}>
        <span className={style.title}>{props.title}</span>
        {!isOpen && <ArrowUp />}
        {isOpen && <ArrowDown />}
      </button>

      {isOpen && (
        <div className={style.description}>
          <div className={style.text}> {props.description}</div>
          <ul className={style.list}>
            {props.list?.map((equipement) => (
              <li>{equipement}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
export interface DropDownProps {
  title: string;
  description?: string;
  list?: string[];
}
