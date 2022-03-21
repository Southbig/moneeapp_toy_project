import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav from "./components/nav";
import MainPage from "./page/mainPage";
import LoginPage from "./page/loginPage";
import SignupPage from "./page/signupPage";
import CardWriting from "./components/cardWriting";
import Card from "./components/card";
import CardView from "./page/cardView";

import axios from "axios";

import { useState, useEffect } from "react";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  const isAuthenticated = (accessToken) => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/users/auth`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then((res) => {
        if (res) {
          setUserInfo(res.data.data.data);
          setIsLogin(true);
        }
      })
      .catch((err) => {
        setIsLogin(false);
      });
  };

  const handleResponseSuccess = (data) => {
    isAuthenticated(data);
  };

  useEffect(() => {
    isAuthenticated();
  }, []);

  return (
    <BrowserRouter>
      <Nav isLogin={isLogin} setIsLogin={setIsLogin} />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route
          path="/login"
          element={
            <LoginPage
              handleResponseSuccess={handleResponseSuccess}
              setUserInfo={setUserInfo}
              isLogin={isLogin}
              setIsLogin={setIsLogin}
            />
          }
        />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/cardView" element={<CardView userInfo={userInfo} />} />
        <Route path="/card" element={<Card />} />
        <Route
          path="/cardwriting"
          element={<CardWriting userInfo={userInfo} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
