import "./App.css";
import MainLanging from "./components/Main";
import NavBar from "./components/Navbar";
import Footers from "./components/pages/footer";
import { createGlobalStyle } from "styled-components";
import Home from "./components/pages/home";
import Login from "./components/pages/login";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Dashboard from "./components/pages/Dashboard";
import SideBar from "./components/pages/SideBar";
import Plans from "./components/pages/plans";
import Error404 from "./components/pages/404";
import { useEffect } from "react";
import { HistoryTwoTone } from "@material-ui/icons";

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
  const history = useHistory();
  const CurrentUser = useSelector((state) => state.user.currentUser);
  const userdata = CurrentUser && CurrentUser.userdata;

  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route exact path="/">
          {CurrentUser ? <Dashboard /> : <Home />}
        </Route>

        <Route exact path="/plans">
          <Plans />
        </Route>
        <Route path="/Login" render={(props) => <Login {...props} />} />

        {/* <Route path="/dashboard">
          <Dashboard />
        </Route> */}
        <Route>
          <Error404 />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
