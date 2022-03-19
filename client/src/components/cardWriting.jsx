import React from "react";
import style from "./cardWriting.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";

import { useNavigate } from "react-router-dom";

const CardWriting = () => {
  const navigate = useNavigate();
  const element = <FontAwesomeIcon icon={faArrowCircleLeft} fontSize="30px" />;

  const handleClickBack = () => {
    console.log("click");
    navigate("/cardView");
  };
  return (
    <div className={style.container}>
      <img src="../" alt="" />
      <button className={style.comeback_button} onClick={handleClickBack}>
        {element}
      </button>
      <div className={style.writing_text}>글 작성</div>
      <textarea
        name="text"
        id={style.text}
        // cols="30"
        // rows="20"
        placeholder="자유롭게 써주세요"
      ></textarea>
      <button className={style.writing_button}>등록</button>
    </div>
  );
};

export default CardWriting;
