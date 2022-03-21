import React from "react";
import style from "./comments.module.css";
import { useState, useEffect } from "react";

import CommentsList from "./commentsList";
import axios from "axios";

const Comments = ({ id, userInfo, postid, comment, setComment }) => {
  const [addComment, setAddComment] = useState("");

  const onChangeComments = (e) => {
    setAddComment(e.target.value);
  };

  const getCommentsList = () => {
    if (userInfo) {
      axios.get(`${process.env.REACT_APP_SERVER_URL}/comments`).then((data) => {
        const commentsData = data.data.data;
        const commentsFilter = commentsData.filter((el) => el.post_id === id);

        setComment(commentsFilter);
      });
    } else {
      return;
    }
  };

  useEffect(() => {
    getCommentsList();
  }, [addComment]);

  const getCommentAdd = () => {
    if (userInfo) {
      const comments = { post_id: postid, comment: `${addComment}` };
      axios
        .post(`${process.env.REACT_APP_SERVER_URL}/comments/add`, comments, {
          withCredentials: true,
        })
        .then((data) => {
          setAddComment("");
        });
    } else {
      return;
    }
  };

  return (
    <div className={style.comment_container}>
      <div className={style.comment_craete_container}>
        <textarea
          type="text"
          name=""
          id={style.comment_craete_text}
          placeholder="댓글을 달아주세요"
          onChange={onChangeComments}
        />
        <button className={style.comment_create_button} onClick={getCommentAdd}>
          등록
        </button>
      </div>
      <div className={style.comment_text}>댓글 목록</div>
      {comment.map((el) => (
        <CommentsList el={el} key={el.id} />
      ))}
    </div>
  );
};

export default Comments;
