import React from "react";
import styled from "styled-components";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import SideBar from "./SideBar";

const Container = styled.div`
  position: relative;
  max-width: calc(100% - 260px);
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 250px;
  //   background-color: grey;
  min-height: 400px;
  //   justify-self: flex-end;
`;
const RightPanelContainer = styled.div`
  position: relative;
  background-color: #f1f0f0;
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NotesPanel = styled.div`
  height: 300px;
  position: absolute;
  width: 90%;
  background-color: white;
  border-radius: 5px;
  top: -200px;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
  z-index: 5;
`;
const HeaderImage = styled.img`
  width: 100%;
`;

const Headertext = styled.div`
  color: white;
  font-size: 16px;
`;
const GreetingsPanel = styled.div`
  margin-top: 20px;
  padding: 10px;
  box-sizing: border-box;
  height: 100px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  opacity: 1;
  position: absolute;
`;

const MainContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const MainDash = (props) => {
  return (
    <Container>
      <GreetingsPanel>
        <Headertext>Good Afternoon User</Headertext>
      </GreetingsPanel>
      <HeaderImage src="./headerImage.jpg" />
      <RightPanelContainer>
        <NotesPanel></NotesPanel>
      </RightPanelContainer>
    </Container>
  );
};

const Dashboard = () => {
  return (
    <MainContainer>
      <SideBar />
      <Router>
        <Switch>
          <Route to="/home">
            <MainDash />
          </Route>
        </Switch>
      </Router>
    </MainContainer>
  );
};

export default Dashboard;
