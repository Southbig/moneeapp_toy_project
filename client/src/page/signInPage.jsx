import React from "react";
import style from "./signInPage.module.css";

const SignInPage = () => {
  return (
    <div className={style.container}>
      <div className={style.login_text}>회원가입</div>
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
      <input
        className={style.password_check}
        type="password"
        placeholder="비밀번호 확인"
      />

      <button className={style.signIn_button}>회원가입</button>
    </div>
  );
};

export default SignInPage;
