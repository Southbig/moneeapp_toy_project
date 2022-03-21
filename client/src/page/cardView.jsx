import React from "react";
import style from "./cardView.module.css";

import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import Card from "../components/card";
import { dummy } from "../dummy/dummy";

import axios from "axios";

const CardView = ({ userInfo }) => {
  const naviagte = useNavigate();

  const [posts, setPosts] = useState([]);

  const handleClick = () => {
    naviagte("/cardwriting");
  };

  const getPostsList = () => {
    axios.get(`${process.env.REACT_APP_SERVER_URL}/posts`).then((data) => {
      const contentsData = data.data.data;
      setPosts(contentsData);
    });
  };

  useEffect(() => {
    getPostsList();
  }, []);

  return (
    <div className={style.container}>
      <div className={style.postLength}>{`글 카드 갯수: ${posts.length}`}</div>
      <button className={style.card_add} onClick={handleClick}>
        글쓰기
      </button>
      {posts.length !== 0 ? (
        <div className={style.card_view}>
          {posts.map((el) => (
            <Card write={el} key={el.id} userInfo={userInfo} />
          ))}
        </div>
      ) : (
        <div className={style.zero}>소감이나 생각나는 글귀를 적어보세요</div>
      )}
    </div>
  );
};

export default CardView;
