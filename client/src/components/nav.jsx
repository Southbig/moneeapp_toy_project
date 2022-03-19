import React from "react";
import style from "./nav.module.css";
import { useNavigate } from "react-router-dom";

import axios from "axios";

const Nav = ({ isLogin, setIsLogin }) => {
  const navigate = useNavigate();
  const handleClickMain = () => {
    if (isLogin) {
      navigate("/cardView");
    } else {
      navigate("/");
    }
  };
  const handleClickLogin = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    axios
      .post(`${process.env.REACT_APP_SERVER_URL}/users/signout`)
      .then((res) => {
        setIsLogin(false);
        navigate("/");
      });
  };

  const handleClickSignup = () => {
    if (isLogin) {
      alert("현재 로그인 중입니다");
    } else {
      navigate("/signup");
    }
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
        {!isLogin ? (
          <button className={style.sign_in} onClick={handleClickLogin}>
            로그인
          </button>
        ) : (
          <button className={style.sign_in} onClick={handleLogout}>
            로그아웃
          </button>
        )}
        <button className={style.sign_up} onClick={handleClickSignup}>
          회원가입
        </button>
      </div>
    </div>
  );
};

export default Nav;
