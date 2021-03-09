import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { Link, useHistory } from "react-router-dom";
import SwiperCore, {
  Navigation,
  Pagination,
  // Scrollbar,
  A11y,
  Autoplay,
} from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
const Container = styled.div`
  min-height: 300px;
  text-align: center;
  //   padding: 10px;
  padding-top: 130px;
  width: 100%;
`;

SwiperCore.use([Navigation, Pagination, A11y, Autoplay]);

const BigText = styled.p`
  font-size: 60px;
  color: black;
  font-weight: 600;
  @media (max-width: 1100px) {
    font-size: 40px;
  }
`;
const slideSWiper = {
  width: "100%",
  alignItems: "center",
  textAlign: "center",

  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "center",
};
const MidTextMain = styled.p`
  font-size: 30px;
  color: #696969;
  font-weight: 600;
  @media (max-width: 1100px) {
    font-size: 24px;
  }
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
  padding: 10px;
  box-sizing: border-box;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const Reviews = styled.div`
  background-color: #f1f0f0;
  min-height: 300px;
  width: 100%;
  display: flex;
  box-sizing: border-box;
  padding: 10px;
  //   flex-wrap: wrap;
  //   flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const Laptop = styled.img`
  width: 1000px;

  @media (max-width: 1100px) {
    max-width: 300px;
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
  const history = useHistory();
  return (
    <Container>
      <BigText>Archieve More With Notes</BigText>
      <MidTextMain>save your best moments </MidTextMain>
      <SmallTextnav>
        <Link to="/Login">Already have an account? sign in</Link>
      </SmallTextnav>
      <Button
        onClick={() => history.push("/plans")}
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
        <Swiper
          loop={true}
          autoplay={true}
          spaceBetween={50}
          slidesPerView={1}
          navigation={true}
          onSwiper={(swiper) => {}}
          onSlideChange={(e) => {
            // console.log(e.activeIndex);
          }}
          style={{ height: "90%" }}
        >
          <SwiperSlide style={slideSWiper}>
            <SmallTextnav2 style={{ lineHeight: "2rem", maxWidth: "500px" }}>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              reprehenderit
              <br />
              <br />
              <b>--dr jones</b>
            </SmallTextnav2>
          </SwiperSlide>
          <SwiperSlide style={slideSWiper}>
            <SmallTextnav2 style={{ lineHeight: "2rem", maxWidth: "500px" }}>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi
              <br />
              <br />
              <b>--cnn</b>
            </SmallTextnav2>
          </SwiperSlide>
          <SwiperSlide style={slideSWiper}>
            <SmallTextnav2 style={{ lineHeight: "2rem", maxWidth: "500px" }}>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do e
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit
              <br />
              <br />
              <b>--engr kelis</b>
            </SmallTextnav2>
          </SwiperSlide>
        </Swiper>
      </Reviews>
    </Container>
  );
};

export default MainLanging;
