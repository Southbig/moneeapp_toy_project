import React from "react";
import style from "./signupPage.module.css";
import { useNavigate } from "react-router-dom";

import { useState } from "react";
import axios from "axios";

const SignupPage = () => {
  const navigate = useNavigate();

  const [signupOnOff, setSignupOnOff] = useState(false);

  const [signupInfo, setSignUpInfo] = useState({
    email: "",
    password: "",
    repassword: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const handleInputValue = (key) => (e) => {
    setSignUpInfo({ ...signupInfo, [key]: e.target.value });
  };

  const handlesignupOnOff = () => {
    !signupOnOff ? setSignupOnOff(true) : setSignupOnOff(false);
  };

  const checkEmail = (email) => {
    if (
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        email
      )
    ) {
      return true;
    }
    return false;
  };

  const handleSignUp = () => {
    const { email, password, repassword } = signupInfo;
    if (!email || !password || !repassword) {
      setErrorMessage("이메일, 비밀번호 모두 다 입력해야합니다.");
    } else if (!checkEmail(email)) {
      setErrorMessage("올바른 메일 양식으로 입력해주세요.");
    } else if (password.length < 8 || repassword.length < 8) {
      setErrorMessage("비밀번호는 8글자 이상이어야합니다.");
    } else if (repassword !== password) {
      setErrorMessage("비밀번호가 일치하지 않습니다.");
    } else {
      axios
        .post(`${process.env.REACT_APP_SERVER_URL}/users/signup`, signupInfo, {
          withCredentials: true,
        })
        .then((res) => {
          if (res.status === 201) {
            handlesignupOnOff();
            navigate("/login");
            alert("회원가입을 축하 드립니다 !");
          }
        })
        .catch((err) => {
          if (err.response.data.message === "이미 존재하는 이메일입니다.") {
            setErrorMessage("이미 사용하고 있는 이메일입니다");
          }
        });
    }
  };

  return (
    <div className={style.container}>
      <div className={style.login_text}>회원가입</div>
      <input
        className={style.email}
        type="text"
        placeholder="이메일을 써주세요"
        onChange={handleInputValue("email")}
      />
      <input
        className={style.password}
        type="password"
        placeholder="비밀번호를 써주세요"
        onChange={handleInputValue("password")}
      />
      <input
        className={style.password_check}
        type="password"
        placeholder="비밀번호 확인"
        onChange={handleInputValue("repassword")}
      />

      <button className={style.signup_button} onClick={handleSignUp}>
        회원가입
      </button>
      <span className={style.message}>{errorMessage}</span>
    </div>
  );
};

export default SignupPage;
