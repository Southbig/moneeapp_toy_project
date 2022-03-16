import "./App.css";
import Nav from "./components/nav";
import MainPage from "./page/mainPage";
import LoginPage from "./page/loginPage";
import SignInPage from "./page/signInPage";
import CardWriting from "./components/cardWriting";
import Card from "./components/card";

function App() {
  return (
    <div>
      <Nav />
      <Card />
      {/* <MainPage /> */}
      <CardWriting />
      <SignInPage />
      <LoginPage />
    </div>
  );
}

export default App;
