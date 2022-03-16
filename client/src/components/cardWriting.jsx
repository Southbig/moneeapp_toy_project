import React from "react";
import style from "./cardWriting.module.css";

const CardWriting = () => {
  return (
    <div className={style.container}>
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
