import React from "react";
import style from "./nav.module.css";

const Nav = () => {
  return (
    <div className={style.container}>
      {/* <div className={style.logo}>로고</div> */}
      <img className={style.logo} src="../logo.jpg" alt="" />
      <div className={style.button_container}>
        <button className={style.sign_in}>로그인</button>
        <button className={style.sign_up}>회원가입</button>
      </div>
    </div>
  );
};

export default Nav;
