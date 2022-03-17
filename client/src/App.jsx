import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav from "./components/nav";
import MainPage from "./page/mainPage";
import LoginPage from "./page/loginPage";
import SignInPage from "./page/signInPage";
import CardWriting from "./components/cardWriting";
import Card from "./components/card";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signin" element={<SignInPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
