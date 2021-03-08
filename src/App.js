import "./App.css";
import MainLanging from "./components/Main";
import NavBar from "./components/Navbar";
import Footers from "./components/pages/footer";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
  background-color:#ffff;


    font-family: Arial, Helvetica, sans-serif;
    font-size: 13px;


  }
`;

function App() {
  return (
    <div>
      <GlobalStyle />
      <NavBar />
      <MainLanging />
      <Footers />
    </div>
  );
}

export default App;
