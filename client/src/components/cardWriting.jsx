import React from "react";
import style from "./cardWriting.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";

import { useNavigate } from "react-router-dom";

import { useState } from "react";
import axios from "axios";

const CardWriting = ({ userInfo }) => {
  const navigate = useNavigate();
  const element = <FontAwesomeIcon icon={faArrowCircleLeft} fontSize="30px" />;
  const [write, setWrite] = useState("");

  const handleClickBack = () => {
    navigate("/cardView");
  };

  const onChangeWriting = (e) => {
    setWrite(e.target.value);
  };

  const getWriteAdd = () => {
    if (userInfo) {
      const message = { message: `${write}` };
      console.log(message);
      axios
        .post(`${process.env.REACT_APP_SERVER_URL}/posts/add`, message, {
          withCredentials: true,
        })
        .then((data) => {
          setWrite("");
          navigate("/cardView");
        });
    } else {
      alert("로그인 정보가 맞지 않습니다");
      return;
    }
  };
  return (
    <div className={style.container}>
      <button className={style.comeback_button} onClick={handleClickBack}>
        {element}
      </button>
      <div className={style.writing_text}>글 작성</div>
      <textarea
        name="text"
        id={style.text}
        placeholder="자유롭게 써주세요"
        onChange={onChangeWriting}
      ></textarea>
      <button className={style.writing_button} onClick={getWriteAdd}>
        등록
      </button>
    </div>
  );
};

export default CardWriting;
