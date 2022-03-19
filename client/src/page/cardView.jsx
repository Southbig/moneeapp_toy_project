import React from "react";
import style from "./cardView.module.css";

import { useNavigate } from "react-router-dom";

import Card from "../components/card";
import { dummy } from "../dummy/dummy";

const CardView = () => {
  const naviagte = useNavigate();

  const handleClick = () => {
    naviagte("/cardwriting");
  };

  return (
    <div className={style.container}>
      <button className={style.card_add} onClick={handleClick}>
        글쓰기
      </button>
      <div className={style.card_view}>
        {dummy.writing.map((el) => (
          <Card write={el} key={el.id} />
        ))}
      </div>
    </div>
  );
};

export default CardView;
