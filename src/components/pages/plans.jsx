import React from "react";
import styled from "styled-components";
import NavBar from "../Navbar";
import Button from "@material-ui/core/Button";
import Footers from "./footer";

const Container = styled.div`
  min-height: 300px;
  text-align: center;
  //   padding: 10px;
  padding-top: 130px;
  width: 100%;
`;
const Buttons = styled(Button)`
  width: 200px;
  height: 40px;

  && {
    margin:3px;

    color: green;
    border-color: green;
    &:focus {
      background-color: blue;
    }
`;
const BigText = styled.p`
  font-size: 60px;
  color: black;
  font-weight: 600;
  @media (max-width: 1100px) {
    font-size: 40px;
  }
`;

const PlansSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  padding: 10px;
  box-sizing: border-box;
`;

const Flexcards = styled.div`
  width: 300px;
  border: 1px solid green;
  min-height: 400px;
  border-radius: 4px;
  margin-left: 5px;
  margin-right: 5px;
  margin-bottom: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const Plans = () => {
  return (
    <>
      <NavBar />
      <Container>
        <BigText>Which notes plan is the best for you</BigText>
        <PlansSection>
          <Flexcards>
            <BigText style={{ fontSize: "30px" }}>Free</BigText>
            <Buttons variant="outlined" color="primary">
              Get started
            </Buttons>
          </Flexcards>
          <Flexcards></Flexcards>
          <Flexcards></Flexcards>
        </PlansSection>
      </Container>
      <Footers />
    </>
  );
};

export default Plans;
