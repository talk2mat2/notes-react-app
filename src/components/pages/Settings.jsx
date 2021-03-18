import React from "react";
import styled from "styled-components";
import NavBar from "../Navbar";
import PlansStepper from "../PlansStepper";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
const Container = styled.div`
  background-color: #cfe8fc;
  //   background-color: #cfe8fc;
  flex-direction: column;
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  box-sizing: border-box;
`;
const BigTextnav = styled.p`
  font-size: 14px;
  color: grey;
  font-weight: 300;
  @media (max-width: 1100px) {
    font-size: 12px;
  }
`;
const Line = styled.div`
  height: 1px;
  width: 100%;
  background-color: grey;
  margin-bottom: 30px;
`;
const Line2 = styled.div`
  height: 0.4px;
  width: 100%;

  background-color: #f1f0f0;
  margin-bottom: 30px;
`;

const Section = styled.div`
  width: 80%;
  flex-direction: column;
  display: flex;
  align-items: center;

  min-height: 80vh;
`;

const Marging = styled.div`
  height: 120px;
`;
const ListingContainer = styled.div`
  flex-direction: row;
  width: 100%;
  display: flex;

  justify-content: center;

  align-items: center;
  * {
    margin-right: 20px;
  }
`;
const Listing = styled.ul`
  max-width: 50%;
  height: 100px;
  padding: 0;
  li {
    font-size: 12px;
    color: grey;
    list-style-type: square;
    margin: 10px;
  }
`;
const Buttons = styled(Button)`
  min-width: 100px;
  height: 30px;

  && {
   

    color: green;
   
   
`;
const SettingsPage = () => {
  return (
    <>
      <NavBar />
      <Marging />
      <Container>
        <Section>
          <BigTextnav style={{ alignSelf: "flex-start" }}>
            Account Summary{" "}
          </BigTextnav>
          <Line />
          <PlansStepper />
          {/* Account Summary */}
          <Line2 />
          <BigTextnav style={{ alignSelf: "flex-start" }}>
            Upgrade to enjoy these great features:
          </BigTextnav>
          <ListingContainer>
            <Listing>
              <li>10 GB of new uploads per month </li>

              <li>10 GB of new uploads per month </li>
              <li>10 GB of new uploads per month </li>
              <li>10 GB of new uploads per month </li>
            </Listing>
            <Listing>
              <li>10 GB of new uploads per month </li>

              <li>10 GB of new uploads per month </li>
              <li>10 GB of new uploads per month </li>
              <li>10 GB of new uploads per month </li>
              <li style={{ color: "green" }}>
                <Link to="/plans"> Explore all features</Link>
              </li>
            </Listing>
            <Buttons
              variant="outlined"
              color="primary "
              style={{
                backgroundColor: "green",
                color: "white",
                justifySelf: "flex-end",
              }}
            >
              <small style={{ fontSize: "10px" }}>Upgrade</small>
            </Buttons>
          </ListingContainer>
        </Section>
      </Container>
    </>
  );
};

export default SettingsPage;
