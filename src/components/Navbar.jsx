import React, { useState } from "react";
import styled from "styled-components";
// import { Colors } from "../themes";
import Button from "@material-ui/core/Button";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import ClearIcon from "@material-ui/icons/Clear";
import { useDispatch, useSelector } from "react-redux";

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

    border-bottom: 3px solid green;
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
const ButtonsStyle = {
  color: "green",
  borderColor: "green",
  width: "200px",
  alignSelf: "center",
};
const Buttons = styled(Button)`
  && {
    color: green;
    border-color: green;
    &:focus {
      background-color: white;
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

const SideNav = styled.div`
  z-index: 3;
  width: 300px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 20px;
  position: absolute;
  background-color: white;
  right: 0;
  top: 0;
  animation: apper 1s ease;
  animation-iteration-count: 1;
  p {
    font-size: 14px;
    color: #686868;
    font-weight: 600;
    height: 80px;
  }
  @keyframes apper {
    from {
      opacity: 0;
    }
    to {
      top: 1;
    }
  }
`;

const Filter = styled.div`
  width: 100%;
  height: 100vh;
  background-color: grey;
  position: absolute;
  z-index: 1;
  opacity: 0.6;
  top: 0;
  left: 0;
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
    display: flex;
    font-size: 16px;
    border-bottom: 0.1px solid silver;
    width: 100%;
    color: black;
    padding: 10px;
    // &:nth-child(1) {
    //   font-size: 20px;
    //   color: grey;
    // }
    // &:nth-child(2) {
    //   font-size: 30px;
    //   color: black;
    //   font-weight: 600;
    //   @media (max-width: 1100px) {
    //     font-size: 30px;
    //   }
    // }
    // &:nth-child(3) {
    //   font-size: 20px;
    //   color: grey;
    //   font-weight: 500;
    //   @media (max-width: 1100px) {
    //     font-size: 20px;
    //   }
    // }
  }
`;
const NavBar = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const CurrentUser = useSelector((state) => state.user.currentUser);
  const userdata = CurrentUser && CurrentUser.userdata;

  const handleOpenSideBar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <Nav>
      {sidebarVisible ? <Filter onClick={handleOpenSideBar} /> : null}
      <Div>
        <Link to="/">
          <Logo src="./logo.jpg" />
        </Link>
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
          {!CurrentUser ? (
            <Link to="/Login">Login </Link>
          ) : (
            <Link to="/">{userdata.Email}</Link>
          )}
        </MidTextnav>
        <Buttons
          style={{ ...ButtonsStyle, width: "100px" }}
          variant="outlined"
          color="secondary"
        >
          Download
        </Buttons>
      </Div>
      <MenuIconDiv
        onClick={() => {
          handleOpenSideBar();
        }}
      >
        <MenuIcon sixe={25} />
      </MenuIconDiv>
      {sidebarVisible ? (
        <SideNav>
          <ClearIcon
            onClick={() => {
              handleOpenSideBar();
            }}
            style={{ alignSelf: "flex-end", margin: "10px" }}
            size={20}
          />
          <Listing>
            <li>WHY NOTES</li>
            <li>
              FEATURES <ArrowDropDownIcon size={14} />
            </li>
            <li>
              PLANS <ArrowDropDownIcon size={14} />
            </li>
            <li>
              {!CurrentUser ? (
                <Link to="/Login">Login </Link>
              ) : (
                <Link to="/">{userdata.Email}</Link>
              )}
            </li>
          </Listing>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />

          <Button style={ButtonsStyle} variant="outlined" color="secondary">
            Download
          </Button>
        </SideNav>
      ) : null}
    </Nav>
  );
};

export default NavBar;
