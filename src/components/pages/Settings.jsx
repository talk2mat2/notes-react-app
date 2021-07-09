import React from "react";
import styled from "styled-components";
import NavBar from "../Navbar";
import PlansStepper from "../PlansStepper";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Container = styled.div`
  background-color: #ffffff;
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
const AccountSection = styled.div`
  min-height: 300px;
  background-color: rgb(247, 252, 252);
  width: 100%;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;
const Buttons = styled(Button)`
  min-width: 100px;
  height: 30px;
  text-align: center;

  && {
    color: green;
  }
`;
const SettingsPage = () => {
  const CurrentUser = useSelector((state) => state.user.currentUser);
  const userdata = CurrentUser && CurrentUser.userdata;
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

            <Link to="/PlansUpgrade">
              <button
                style={{
                  backgroundColor: "green",
                  color: "#ffffff",
                  border: "none",
                  padding: "9px",
                  cursor: "pointer",
                }}
              >
                upgrade
              </button>
            </Link>
          </ListingContainer>
          <Marging />
          <AccountSection>
            <Listing style={{ width: "300px" }}>
              <li className="verticalCenterRowSpaceBetween">
                <b>Account Level</b>
                <p>{userdata.plans}</p>
              </li>
              <li className="verticalCenterRowSpaceBetween">
                <b>Email</b>
                <p>{userdata.Email}</p>
              </li>
              <li className="verticalCenterRowSpaceBetween">
                <b>Member Since</b>
                <p>null</p>
              </li>
              <li className="verticalCenterRowSpaceBetween">
                <b>Monthlu Usage</b>
                <p>null</p>
              </li>
            </Listing>
          </AccountSection>
        </Section>
      </Container>
    </>
  );
};

export default SettingsPage;
