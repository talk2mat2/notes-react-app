import React from "react";
import styled from "styled-components";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
const Container = styled.div`
  max-width: 320px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: white;
`;
const Container2 = styled.div`
  max-width: 320px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: white;
  * {
    margin: 20px;
    @media (max-width: 1100px) {
      margin: 15px;
    }
  }
`;
const Line = styled.div`
  height: 2px;
  width: 150px;
  background-color: grey; ;
`;
const BigText = styled.p`
  font-size: 13px;
  color: black;
  font-weight: 600;
  @media (max-width: 1100px) {
    font-size: 11px;
  }
`;

const PackageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transform: translateY(30px);
`;
const PlansStepper = () => {
  return (
    <>
      <Container>
        <CheckCircleOutlineIcon
          fontSize="large"
          style={{ color: " green", fontSize: "40px" }}
        />

        <Line />

        <RadioButtonUncheckedIcon
          fontSize="large"
          style={{ color: " green", fontSize: "40px" }}
        />

        <Line />

        <RadioButtonUncheckedIcon
          fontSize="large"
          style={{ color: " green", fontSize: "40px" }}
        />
        {/* <BigText>BUSINESS</BigText>
      </PackageContainer> */}
      </Container>
      <Container2>
        <PackageContainer>
          <BigText>BASIC </BigText>
        </PackageContainer>
        <div style={{ width: "5px" }}></div>
        <PackageContainer>
          <BigText> PREMIUM </BigText>
        </PackageContainer>
        <div style={{ width: "2px" }}></div>
        <PackageContainer>
          <BigText>BUSINESS</BigText>
        </PackageContainer>
      </Container2>
    </>
  );
};

export default PlansStepper;
