import React from "react";
import style from "./card.module.css";
import { dummy } from "../dummy/dummy";

const Card = () => {
  console.log(dummy.writing[0]);
  return (
    <div className={style.container} key={dummy.writing[0].id}>
      <span>댓글 갯수: {dummy.writing[0].total_comments}</span>
      <div className={style.message_container}>
        <div className={style.message_email}>
          글 작성자: {dummy.writing[0].email}
        </div>
        <div className={style.message}>{dummy.writing[0].message}</div>
      </div>
      <div className={style.comment_container}>
        <div className={style.comment_craete_container}>
          <textarea
            type="text"
            name=""
            id={style.comment_craete_text}
            placeholder="댓글을 달아주세요"
          />
          <button className={style.comment_create_button}>등록</button>
        </div>
        <div className={style.comment_text}>댓글 목록</div>
        <div className={style.comment_list}>
          <div className={style.comment_id}>
            {dummy.writing[0].comments[0].email}
          </div>
          <div className={style.comment}>
            {dummy.writing[0].comments[0].comment}
          </div>
        </div>

        <div className={style.comment_list}>
          <div className={style.comment_id}>
            {dummy.writing[0].comments[0].email}
          </div>
          <div className={style.comment}>
            {dummy.writing[0].comments[0].comment}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
