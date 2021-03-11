import React from "react";
import NavBar from "../Navbar";
import Footers from "./footer";
import styled from "styled-components";
import Container from "@material-ui/core/Container";
import SentimentVeryDissatisfiedIcon from "@material-ui/icons/SentimentVeryDissatisfied";

const Body = styled.div`
  width: 100%;
  background-color: #cfe8fc;
  min-height: 100vh;
  padding: 10px;
  padding-top: 200px;
  box-sizing: border-box;
`;
const SmallText = styled.p`
  font-size: 20px;
  color: grey;

  //   font-weight: 500;
  //   //   &:nth-child(n) {
  //   //     margin-right: 20px;
  //   //   }
  //   @media (max-width: 1100px) {
  //     font-size: 15px;
  //   }
`;
const BigText = styled.p`
  font-size: 30px;
  color: grey;
  font-weight: 600;
  @media (max-width: 1100px) {
    font-size: 20px;
  }
`;
const Error404 = () => {
  return (
    <>
      <NavBar />
      <Container
        style={{
          backgroundColor: "white",
          height: "100vh",
          paddingTop: "150px",
          width: "100%",
          textAlign: "center",
        }}
      >
        <div>
          <SentimentVeryDissatisfiedIcon
            fontSize="large"
            style={{ color: "grey", fontSize: "160px" }}
          />
          <BigText>404</BigText>
          <BigText>
            An error occured ,it seems you followed a broken Url
          </BigText>
        </div>
      </Container>

      <Footers />
    </>
  );
};

export default Error404;
