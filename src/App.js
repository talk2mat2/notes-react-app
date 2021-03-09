import "./App.css";
import MainLanging from "./components/Main";
import NavBar from "./components/Navbar";
import Footers from "./components/pages/footer";
import { createGlobalStyle } from "styled-components";
import Home from "./components/pages/home";
import Login from "./components/pages/login";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Dashboard from "./components/pages/Dashboard";
import SideBar from "./components/pages/SideBar";
import Plans from "./components/pages/plans";

const GlobalStyle = createGlobalStyle`
  body {
  background-color:#ffff;


    font-family: Arial, Helvetica, sans-serif;
    font-size: 13px;


  }
  a{color: inherit;
    text-decoration: none;}
    li{
      list-style:none;
    }
`;

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/plans">
          <Plans />
        </Route>
        <Route exact path="/Login">
          <Login />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
