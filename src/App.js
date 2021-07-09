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

import SettingsPage from "./components/pages/Settings";
import WhyNotes from "./components/whynotes";
import Checkout from "./components/pages/enterCard";
import PlansUpgrade from "./components/pages/plans_upgrade";
import AlmostThere from "./components/pages/almostThere";

const GlobalStyle = createGlobalStyle`
  body {
  background-color:#ffff;
box-sizing:border-box;

    //font-family: Arial, Helvetica, sans-serif;
     font-family: 'Trebuchet MS', sans-serif;
  
    
    
}
    
  

   
    font-size: 16px;



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
        <Route
          exact
          path="/"
          render={(props) =>
            CurrentUser ? <Dashboard {...props} /> : <Home {...props} />
          }
        />
        {/* {CurrentUser ? <Dashboard /> : <Home />}
        </Route> */}

        <Route exact path="/plans">
          <Plans />
        </Route>
        <Route exact path="/WHYNOTES">
          <WhyNotes />
        </Route>
        <Route
          path="/Login"
          render={(props) =>
            CurrentUser ? <Dashboard {...props} /> : <Login {...props} />
          }
        />

        {/* <Route path="/dashboard">
          <Dashboard />
        </Route> */}
        <Route path="/settings">
          <SettingsPage />
        </Route>
        <Route path="/PlansUpgrade">
          <PlansUpgrade />
        </Route>
        <Route path="/almost_there">
          <AlmostThere />
        </Route>
        <Route path="/checkout">
          <Checkout />
        </Route>
        <Route>
          <Error404 />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
