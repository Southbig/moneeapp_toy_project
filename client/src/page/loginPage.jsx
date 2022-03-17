import React from "react";
import style from "./loginPage.module.css";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const handleClickSignin = () => {
    navigate("/signin");
  };
  return (
    <div className={style.container}>
      <div className={style.login_text}>로그인</div>
      <input
        className={style.email}
        type="text"
        placeholder="이메일을 써주세요"
      />
      <input
        className={style.password}
        type="password"
        placeholder="비밀번호를 써주세요"
      />
      <button className={style.login_button}>로그인</button>
      <div className={style.signIn_text}>아직 회원이 아니신가요 ?</div>
      <button className={style.signIn_button} onClick={handleClickSignin}>
        회원가입
      </button>
    </div>
  );
};

export default LoginPage;
