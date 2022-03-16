import React from "react";
import style from "./mainPage.module.css";

const MainPage = () => {
  return (
    <div className={style.container}>
      <div className={style.warning}>
        게시판 사용을 위해 로그인이 필요합니다
      </div>
      <button className={style.login_button}>로그인 하기</button>
    </div>
  );
};

export default MainPage;
