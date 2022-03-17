import React from "react";
import style from "./nav.module.css";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  const handleClickMain = () => {
    navigate("/");
  };
  const handleClickLogin = () => {
    navigate("/login");
  };
  const handleClickSignin = () => {
    navigate("/signin");
  };
  return (
    <div className={style.container}>
      <img
        className={style.logo}
        src="../logo.jpg"
        alt=""
        onClick={handleClickMain}
      />
      <div className={style.button_container}>
        <button className={style.sign_in} onClick={handleClickLogin}>
          로그인
        </button>
        <button className={style.sign_up} onClick={handleClickSignin}>
          회원가입
        </button>
      </div>
    </div>
  );
};

export default Nav;
