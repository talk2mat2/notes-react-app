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
    font-size: 30px;
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
  width: 320px;
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
  justify-content: space-between;
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
    display: flex;
    font-size: 16px;
    color: black;
    padding: 10px;
    &:nth-child(1) {
      font-size: 20px;
      color: grey;
    }
    &:nth-child(2) {
      font-size: 30px;
      color: black;
      font-weight: 600;
      @media (max-width: 1100px) {
        font-size: 30px;
      }
    }
    &:nth-child(3) {
      font-size: 20px;
      color: grey;
      font-weight: 500;
      @media (max-width: 1100px) {
        font-size: 20px;
      }
    }
  }
`;
const MidText = styled.p``;
const PlansUpgrade = () => {
  const CurrentUser = useSelector((state) => state.user.currentUser);
  const userdata = CurrentUser && CurrentUser.userdata;
  return (
    <>
      <NavBar />
      <Container>
        <BigText style={{ fontSize: "40px" }}>
          We've got affordable Notes plans for <br />
          you in every level
        </BigText>
        <PlansSection>
          <Flexcards>
            <Listing>
              <li>
                <BusinessIcon size={18} style={{ marginRight: "5px" }} /> Basic
              </li>
              <li>Free</li>
              <li>great notes</li>
              <li>
                <CheckIcon size={15} /> great note "Lorem ipsum dolor sit s
              </li>
              <li>
                <CheckIcon size={15} /> great notes "Lorem ipsum dol
              </li>
              <li>
                <CheckIcon size={15} /> great note "Lorem ipsum dolor sit s
              </li>
              <li>
                <CheckIcon size={15} /> great notes "Lorem ipsum dol
              </li>
              <li>
                <CheckIcon size={15} /> great notes "Lorem ipsum dol
              </li>
              <li>
                <CheckIcon size={15} /> great note "Lorem ipsum dolor sit s
              </li>
              <li>
                {" "}
                <CheckIcon size={15} /> great notes "Lorem ipsum dol
              </li>
              <li>
                {" "}
                <CheckIcon size={15} /> great notes"Lorem{" "}
              </li>
            </Listing>
            <Link>
              <Buttons
                disabled={userdata.plans === "basic"}
                variant="outlined"
                color="primary "
                style={{ backgroundColor: "white", color: "green" }}
              >
                {userdata.plans === "basic" ? "Current Plan" : "free plan"}
              </Buttons>
            </Link>
          </Flexcards>
          <Flexcards>
            <Listing>
              <li>
                <StarIcon
                  size={18}
                  style={{ color: "green", marginRight: "5px" }}
                />{" "}
                Premium
              </li>
              <li>=N= 5,000</li>
              <li>great notes</li>
              <li>
                <CheckIcon size={15} /> great note "Lorem ipsum dolor sit s
              </li>
              <li>
                <CheckIcon size={15} /> great notes "Lorem ipsum dol
              </li>
              <li>
                <CheckIcon size={15} /> great note "Lorem ipsum dolor sit s
              </li>
              <li>
                <CheckIcon size={15} /> great notes "Lorem ipsum dol
              </li>
              <li>
                <CheckIcon size={15} /> great notes "Lorem ipsum dol
              </li>
              <li>
                <CheckIcon size={15} /> great note "Lorem ipsum dolor sit s
              </li>
              <li>
                {" "}
                <CheckIcon size={15} /> great notes "Lorem ipsum dol
              </li>
              <li>
                {" "}
                <CheckIcon size={15} /> great notes"Lorem{" "}
              </li>
            </Listing>
            <Link
              to={{ pathname: "/almost_there", state: { plans: "premium" } }}
            >
              <Buttons
                variant="outlined"
                color="primary "
                style={{ backgroundColor: "green", color: "white" }}
              >
                {userdata.plans === "premium" ? (
                  "Current Plan"
                ) : (
                  <small>Upgrade to Premium</small>
                )}
              </Buttons>
            </Link>
          </Flexcards>
          <Flexcards>
            <Listing>
              <li>
                <FlareIcon
                  size={18}
                  style={{ color: "green", marginRight: "5px" }}
                />
                Business
              </li>
              <li>=N= 10,000</li>
              <li>great notes</li>
              <li>
                <CheckIcon size={15} /> great note "Lorem ipsum dolor sit s
              </li>
              <li>
                <CheckIcon size={15} /> great notes "Lorem ipsum dol
              </li>
              <li>
                <CheckIcon size={15} /> great note "Lorem ipsum dolor sit s
              </li>
              <li>
                <CheckIcon size={15} /> great notes "Lorem ipsum dol
              </li>
              <li>
                <CheckIcon size={15} /> great notes "Lorem ipsum dol
              </li>
              <li>
                <CheckIcon size={15} /> great note "Lorem ipsum dolor sit s
              </li>
              <li>
                {" "}
                <CheckIcon size={15} /> great notes "Lorem ipsum dol
              </li>
              <li>
                {" "}
                <CheckIcon size={15} /> great notes"Lorem{" "}
              </li>
            </Listing>

            <Link
              to={{ pathname: "/almost_there", state: { plans: "business" } }}
            >
              <Buttons
                variant="outlined"
                color="primary "
                style={{ backgroundColor: "green", color: "white" }}
              >
                {userdata.plans === "business" ? (
                  "Current Plan"
                ) : (
                  <small>Upgrade to business</small>
                )}
              </Buttons>
            </Link>
          </Flexcards>
        </PlansSection>
      </Container>
      <Footers />
    </>
  );
};

export default PlansUpgrade;
