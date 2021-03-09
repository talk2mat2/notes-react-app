import React from "react";
import styled from "styled-components";
// import { Colors } from "../themes";
import Button from "@material-ui/core/Button";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";

const Nav = styled.nav`
  background-color: white;
  height: 80px;
  position: fixed;
  z-index: 4;
  width: 100vw;
  box-shadow: 0 5px 10px rgba(134, 137, 148, 0.09);
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 1100px) {
    justify-content: space-between;
  }
`;

const BigTextnav = styled.p`
  font-size: 14px;
  color: #686868;
  font-weight: 600;
  height: 80px;

  border-bottom: 3px solid white;

  @media (max-width: 1100px) {
    display: none;
  }
  &:hover {
    color: green;
    border-bottom-color: green;
  }

  display: flex;
  flex-direction: row;
  align-items: center;
  &:nth-child(n) {
    margin-right: 20px;
  }
`;
const MidTextnav = styled.p`
  font-size: 13px;
  color: grey;
  font-weight: 500;
  &:nth-child(n) {
    margin-right: 20px;
  }
  @media (max-width: 1100px) {
    display: none;
  }
`;
const MenuIconDiv = styled.div`
  margin-right: 20px;
  @media (min-width: 1100px) {
    display: none;
  }
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
    @media (max-width: 1100px) {
      display: none;
    }
  }
`;
const Logo = styled.img`
  height: 50px;
  width: 200px;
`;
const NavBar = () => {
  return (
    <Nav>
      <Div>
        <Logo src="./logo.jpg" />
        <BigTextnav>WHY NOTES </BigTextnav>
        <BigTextnav>
          FEATURES <ArrowDropDownIcon size={14} />
        </BigTextnav>
        <BigTextnav>
          PLANS <ArrowDropDownIcon size={14} />
        </BigTextnav>
      </Div>
      <Div>
        <MidTextnav>Help</MidTextnav>
        <MidTextnav>
          <Link to="/Login">Login </Link>
        </MidTextnav>
        <Buttons variant="outlined" color="secondary">
          Download
        </Buttons>
      </Div>
      <MenuIconDiv>
        <MenuIcon sixe={25} />
      </MenuIconDiv>
    </Nav>
  );
};

export default NavBar;
