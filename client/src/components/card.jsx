import React from "react";
import style from "./card.module.css";
import { dummy } from "../dummy/dummy";

const Card = ({ write }) => {
  return (
    <div className={style.container} key={write.id}>
      <span className={style.comment_number}>
        댓글 갯수: {write.total_comments}
      </span>
      <div className={style.message_container}>
        <div className={style.message_email}>글 작성자: {write.email}</div>
        <div className={style.message}>{write.message}</div>
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
        {/* {console.log("write comment", write.comments)} */}
        {write.comments.map((el) => (
          <div className={style.comment_list} key={el.user_id}>
            <div className={style.comment_id}>{el.email}</div>
            <div className={style.comment}>{el.comment}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
