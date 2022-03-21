import React from "react";
import style from "./card.module.css";
import { dummy } from "../dummy/dummy";

import { useState, useEffect } from "react";

import Comments from "./comments";

const Card = ({ write, userInfo }) => {
  const [postid, setPostId] = useState(0);
  const [comment, setComment] = useState([]);

  const getPostId = () => {
    setPostId(write.id);
  };
  console.log("write", write);
  return (
    <div className={style.container} key={write.id} onClick={getPostId}>
      <span className={style.comment_number}>댓글 갯수: {comment.length}</span>
      <div className={style.message_container}>
        <div className={style.message_email}>글 작성자: {write.email}</div>
        <div className={style.message}>{write.message}</div>
      </div>
      <Comments
        id={write.id}
        userInfo={userInfo}
        postid={postid}
        comment={comment}
        setComment={setComment}
      />
    </div>
  );
};

export default Card;
