import React from "react";
import style from "./commentsList.module.css";

const CommentsList = ({ el }) => {
  return (
    <div className={style.container}>
      <div className={style.comment_list} key={el.id}>
        <div className={style.comment_id}>{el.email}</div>
        <div className={style.comment}>{el.comment}</div>
      </div>
    </div>
  );
};

export default CommentsList;
