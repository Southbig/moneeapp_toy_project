import React from "react";
import style from "./loginPage.module.css";
import { useNavigate } from "react-router-dom";
import { useState, useCallback } from "react";
import axios from "axios";

const LoginPage = ({ handleResponseSuccess }) => {
  const navigate = useNavigate();
  const handleClickSignup = () => {
    navigate("/signuo");
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(false);
  console.log(email, password);
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
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

  const handleLogin = () => {
    const userinfo = { email, password };
    if (!email || !password) {
      setMessage("이메일, 비밀번호 모두 다 입력해야합니다.");
    } else {
      console.log("시작하자마자 요청을 한다.");
      axios
        .post(`${process.env.REACT_APP_SERVER_URL}/users/signin`, userinfo, {
          withCredentials: true,
        })
        .then((res) => {
          handleResponseSuccess(res.data.data.accessToken.split(" ")[1]);
          setEmail("");
          setPassword("");
          handleResponseSuccess(res.data.data.accessToken.split(" ")[1]);
        })
        .catch((err) => {
          if (
            err.response.data.message === "로그인 정보가 일치하지 않습니다."
          ) {
            setMessage("로그인 정보가 일치하지 않습니다");
          }
        });
    }
  };

  const handleClick = useCallback(() => {
    if (email === "") {
      setMessage("이메일을 입력해주세요.");
    } else if (!checkEmail(email)) {
      setMessage("올바른 메일 양식으로 입력해주세요.");
      return;
    } else if (password === "") {
      setMessage("비밀번호를 입력해주세요.");
    } else {
      handleLogin();
      setMessage("");
      navigate("/card");
      return;
    }
  }, [email, password, message]);

  return (
    <div className={style.container}>
      <div className={style.login_text}>로그인</div>
      <input
        className={style.email}
        type="text"
        placeholder="이메일을 써주세요"
        onChange={onChangeEmail}
      />
      <input
        className={style.password}
        type="password"
        placeholder="비밀번호를 써주세요"
        onChange={onChangePassword}
      />
      <button className={style.login_button} onClick={() => handleClick()}>
        로그인
      </button>
      <span className={style.message}>{message}</span>
      <div className={style.signIn_text}>아직 회원이 아니신가요 ?</div>
      <button className={style.signIn_button} onClick={handleClickSignup}>
        회원가입
      </button>
    </div>
  );
};

export default LoginPage;
