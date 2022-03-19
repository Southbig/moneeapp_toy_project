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
  const [accessToken, setAccessToken] = useState(null);

  const isAuthenticated = (accessToken) => {
    console.log(accessToken);
    setAccessToken(accessToken);
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
          console.log(res.data.data.userInfo);
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
      {/* <CardView /> */}
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route
          path="/login"
          element={
            <LoginPage
              handleResponseSuccess={handleResponseSuccess}
              setAccessToken={setAccessToken}
              isLogin={isLogin}
            />
          }
        />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/cardView" element={<CardView />} />
        <Route path="/card" element={<Card />} />
        <Route path="/cardwriting" element={<CardWriting />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
