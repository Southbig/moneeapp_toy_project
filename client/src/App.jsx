import "./App.css";
import Nav from "./components/nav";
import MainPage from "./page/mainPage";
import LoginPage from "./page/loginPage";
import SignInPage from "./page/signInPage";

function App() {
  return (
    <div>
      <Nav />
      {/* <MainPage /> */}
      <SignInPage />
      <LoginPage />
    </div>
  );
}

export default App;
