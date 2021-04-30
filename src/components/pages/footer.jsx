import React from "react";
import styled from "styled-components";
// import { Colors } from "../themes";
import Button from "@material-ui/core/Button";

const Footer = styled.footer`
  background-color: white;
  min-height: 200px;
  // width: 80vw;
  padding: 10px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const BigText = styled.p`
  font-size: 16px;
  color: #696969;
  font-weight: 500;

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  &:nth-child(n) {
    margin-right: 20px;
  }
`;
const MidTextfoot = styled.p`
  font-size: 14px;
  color: grey;
  font-weight: 500;
  &:nth-child(n) {
    margin-right: 20px;
  }
`;
const SmallTextfoot = styled.p`
  font-size: 12px;
  color: grey;
  font-weight: 200;
`;
const FooterSection = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  flex-wrap: wrap;
`;

const Div = styled.div`
  display: flex;
  min-width: 100px;
  flex-direction: row;
  align-items: center;
`;

const Buttons = styled(Button)`
  && {
    color: green;
    border-color: green;
    &:focus {
      background-color: blue;
    }
  }
`;
const Logo = styled.img`
  height: 50px;
  width: 200px;
  align-self: flex-start;
`;
const Listing = styled.ul`
  &:nth-child(n) {
    margin-right: 20px;
  }
  list-style: none;

  li {
    margin-bottom: 20px;
  }
`;

const Divider = styled.div`
  width: 90VW;
  height: 2px;
  background-color: green;
margin-top:30px;
argin:-bottom: 20px;
`;
const DividerBottom = styled.div`
  width: 90VW;
  height: 1px;
  background-color: green;
  margin-top:30px;
  Margin:-bottom: 20px
`;
const Bottomdiv = styled.div`
  display: flex;
  min-width: 90%;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 60px;
`;
const Footers = () => {
  return (
    <Footer>
      <Logo src="./logo.jpg" />
      <Divider />
      <FooterSection>
        <Listing>
          <li>
            <BigText>PRODUCT</BigText>
          </li>
          <li>
            <MidTextfoot>Lorem ipsum </MidTextfoot>
          </li>
          <li>
            <MidTextfoot>Lorem ipsum </MidTextfoot>
          </li>
          <li>
            <MidTextfoot>Lorem ipsum </MidTextfoot>
          </li>
          <li>
            <MidTextfoot>Lorem ipsum </MidTextfoot>
          </li>
          <li>
            <MidTextfoot>Lorem ipsum </MidTextfoot>
          </li>
          <li>
            <MidTextfoot>Lorem ipsum </MidTextfoot>
          </li>
        </Listing>
        <Listing>
          <li>
            <BigText>FEATURES</BigText>
          </li>
          <li>
            <MidTextfoot>Lorem ipsum </MidTextfoot>
          </li>
          <li>
            <MidTextfoot>Lorem ipsum </MidTextfoot>
          </li>
          <li>
            <MidTextfoot>Lorem ipsum </MidTextfoot>
          </li>
          <li>
            <MidTextfoot>Lorem ipsum </MidTextfoot>
          </li>
          <li>
            <MidTextfoot>Lorem ipsum </MidTextfoot>
          </li>
          <li>
            <MidTextfoot>Lorem ipsum </MidTextfoot>
          </li>
        </Listing>
        <Listing>
          <li>
            <BigText>COMUNNITY</BigText>
          </li>
          <li>
            <MidTextfoot>Lorem ipsum </MidTextfoot>
          </li>
          <li>
            <MidTextfoot>Lorem ipsum </MidTextfoot>
          </li>
          <li>
            <MidTextfoot>Lorem ipsum </MidTextfoot>
          </li>
          <li>
            <MidTextfoot>Lorem ipsum </MidTextfoot>
          </li>
          <li>
            <MidTextfoot>Lorem ipsum </MidTextfoot>
          </li>
          <li>
            <MidTextfoot>Lorem ipsum </MidTextfoot>
          </li>
        </Listing>

        <Listing>
          <li>
            <BigText>COMPANY</BigText>
          </li>
          <li>
            <MidTextfoot>Lorem ipsum </MidTextfoot>
          </li>
          <li>
            <MidTextfoot>Lorem ipsum </MidTextfoot>
          </li>
          <li>
            <MidTextfoot>Lorem ipsum </MidTextfoot>
          </li>
          <li>
            <MidTextfoot>Lorem ipsum </MidTextfoot>
          </li>
          <li>
            <MidTextfoot>Lorem ipsum </MidTextfoot>
          </li>
          <li>
            <MidTextfoot>Lorem ipsum </MidTextfoot>
          </li>
        </Listing>
      </FooterSection>
      <DividerBottom />
      <Bottomdiv>
        <SmallTextfoot>2021 All Rights Reserved</SmallTextfoot>
        <SmallTextfoot>Privacy policy</SmallTextfoot>
      </Bottomdiv>
    </Footer>
  );
};

export default Footers;
