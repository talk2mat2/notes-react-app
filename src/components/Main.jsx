import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";

const Container = styled.div`
  min-height: 300px;
  text-align: center;
  padding: 10px;
  padding-top: 130px;
`;

const BigText = styled.p`
  font-size: 60px;
  color: black;
  font-weight: 600;
  @media (max-width: 1100px) {
    font-size: 40px;
  }
`;

const MidTextMain = styled.p`
  font-size: 30px;
  color: #696969;
  font-weight: 600;
  //   @media (max-width: 1100px) {
  //     display: none;
  //   }
`;
const MidTextMain2 = styled.p`
  font-size: 30px;
  color: #696969;
  font-weight: 600;
  //   @media (max-width: 1100px) {
  //     display: none;
  //   }
`;

const SmallTextnav = styled.p`
  font-size: 20px;
  color: grey;
  text-decoration: underline;
  font-weight: 500;
  //   &:nth-child(n) {
  //     margin-right: 20px;
  //   }
  @media (max-width: 1100px) {
    font-size: 15px;
  }
`;
const SmallTextnav2 = styled.p`
  font-size: 20px;
  color: grey;

  font-weight: 500;
  //   &:nth-child(n) {
  //     margin-right: 20px;
  //   }
  @media (max-width: 1100px) {
    font-size: 15px;
  }
`;

// const SmallTextnav = styled.p`
//   font-size: 18px;
//   color: grey;
//   font-weight: 500;
//   &:nth-child(n) {
//     margin-right: 20px;
//   }
//   @media (max-width: 1100px) {
//     display: none;
//   }
// `;

const LaptopSection = styled.div`
  background-color: color;
  min-height: 300px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const Reviews = styled.div`
  padding: 10px;
  background-color: #f1f0f0;
  min-height: 300px;
  width: 100%;
  display: flex;
  //   flex-wrap: wrap;
  //   flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const Laptop = styled.img`
  width: 1000px;

  @media (max-width: 1100px) {
    max-width: 400px;
  }
`;

const Listing = styled.ul`
  &:nth-child(n) {
    // margin-right: 20px;
  }
  list-style: none;

  li {
    margin-bottom: 20px;
  }
`;

const Div = styled.div`
  max-width: 300px;
  @media (max-width: 1100px) {
    max-width: 80%;
  }
`;

const MainLanging = () => {
  return (
    <Container>
      <BigText>Archieve More With Notes</BigText>
      <MidTextMain>save your best moments </MidTextMain>
      <SmallTextnav>Already have an account? sing in</SmallTextnav>
      <Button
        variant="contained"
        color="primary"
        style={{ backgroundColor: "green", width: "200px", height: "50px" }}
      >
        Sign Up Now
      </Button>
      <LaptopSection>
        <Laptop src="./laptop.jpg" alt="laptop" />
        <Div>
          <Listing>
            <li>
              <MidTextMain2>lorem ipsum </MidTextMain2>
            </li>
            <li>
              <SmallTextnav2>
                lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
              </SmallTextnav2>
            </li>
            <li>
              <SmallTextnav2>
                lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
              </SmallTextnav2>
            </li>
          </Listing>
          <Listing>
            <li>
              <MidTextMain2>lorem ipsum </MidTextMain2>
            </li>
            <li>
              <SmallTextnav2>
                2 lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
              </SmallTextnav2>
            </li>
            <li>
              <SmallTextnav2>
                lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
              </SmallTextnav2>
            </li>
          </Listing>
        </Div>
      </LaptopSection>
      <Reviews>
        <SmallTextnav2 style={{ lineHeight: "2rem", maxWidth: "500px" }}>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit
        </SmallTextnav2>
      </Reviews>
    </Container>
  );
};

export default MainLanging;
