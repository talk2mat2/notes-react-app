import React from "react";
import styled from "styled-components";
import NavBar from "../Navbar";
import Button from "@material-ui/core/Button";
import Footers from "./footer";
import BusinessIcon from "@material-ui/icons/Business";
import CheckIcon from "@material-ui/icons/Check";
import StarIcon from "@material-ui/icons/Star";
import FlareIcon from "@material-ui/icons/Flare";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Container = styled.div`
  min-height: 300px;
  text-align: center;
  //   padding: 10px;
  padding-top: 130px;
  width: 100%;
`;
const Buttons2 = styled(Button)`
  background-color: green;
  color: #ffffff;
`;

const BigText = styled.p`
  font-size: 60px;
  color: black;
  line-height: 2px;
  font-weight: 600;
  @media (max-width: 1100px) {
    font-size: 30px;
  }
`;

const PlansSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  flex-wrap: wrap;
  padding: 10px;
  box-sizing: border-box;
`;

const Flexcards = styled.div`
  width: 400px;
  // border: 1px solid green;
  min-height: 400px;
  border-radius: 8px;
  margin-left: 5px;
  margin-right: 5px;
  padding: 10px;
  box-sizing: border-box;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;

  align-items: center;
`;
const Flexcards2 = styled.div`
  position: relative;

  width: 300px;
  border: 1px solid green;
  min-height: 400px;
  border-radius: 8px;
  margin-left: 5px;
  margin-right: 5px;
  padding: 10px;
  box-sizing: border-box;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;

  align-items: center;
`;
const Listing = styled.ul`
  display: flex;
  margin: 0;
  list-style-type: none;
  padding: 0;

  flex-direction: column;
  align-items: flex-start;
  width: 98%;
  li {
    margin-top: 2px;
    margin-bottom: 2px;
  }
`;
const GreenHeader = styled.div`
  width: 100%;
  background-color: green;
  height: 20px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  position: absolute;
  top: 0;
  margin-bottom: auto;
`;

const Buttons = styled(Button)`
  && {
    color: #fffff;
    background-color: white;
    &:focus {
      background-color: white;
    }
    @media (max-width: 1100px) {
      display: none;
    }
  }
`;
const ButtonsStyle = {
  color: "green",
  borderColor: "green",
  width: "200px",
  alignSelf: "center",
};
const Mybuttons = {
  backgroundColor: "green",
  color: "#ffffff",
  width: "300px",
};

const MidText = styled.p``;
const AlmostThere = () => {
  const CurrentUser = useSelector((state) => state.user.currentUser);
  const userdata = CurrentUser && CurrentUser.userdata;
  return (
    <>
      <NavBar />

      <Container>
        <PlansSection>
          <Flexcards>
            <Listing>
              <li>
                <BigText style={{ fontSize: "26px" }}>
                  You are just few seconds away
                </BigText>
              </li>
              <li>Choose apayment method : </li>
              <li>
                <Buttons
                  style={{
                    ...Mybuttons,
                    backgroundColor: "#ffffff",
                    border: "1px solid green",
                    color: "green",
                    marginBottom: "10px",
                    marginTop: "10px",
                  }}
                >
                  Enter Card Details
                </Buttons>
              </li>
              <li>
                <Buttons style={{ ...Mybuttons }}>Pay with Paypal</Buttons>
              </li>
            </Listing>
          </Flexcards>

          <Flexcards2>
            <GreenHeader />
            <Listing>
              <li>
                <BigText style={{ fontSize: "26px" }}>Premium</BigText>
              </li>
              <li>Organize everything</li>
              <li>
                <BigText style={{ fontSize: "26px", lineHeight: "0%" }}>
                  NGN 5000.0
                </BigText>
              </li>
              <l>
                {" "}
                <BigText
                  style={{
                    fontSize: "18px",
                    color: "grey",
                    textDecoration: "line-through",
                    lineHeight: "0%",
                  }}
                >
                  NGN 5000.0
                </BigText>
              </l>
            </Listing>
          </Flexcards2>
        </PlansSection>
      </Container>
      <Footers />
    </>
  );
};

export default AlmostThere;
