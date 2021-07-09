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
  EffectFade,
} from "swiper";
import "swiper/components/effect-fade/effect-fade.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
const Container = styled.div`
  min-height: 300px;
  text-align: center;
  //   padding: 10px;
  padding-top: 130px;
  width: 100%;
`;

SwiperCore.use([Navigation, Pagination, A11y, Autoplay, EffectFade]);

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
  backgroundColor: "#f1f0f0",
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
const Ptitle = styled.p`
  font-family: "Soleil_Bold", Helvetica, Arial, sans-serif;
  font-size: 25px;
  letter-spacing: 1px;
  line-height: 150%;
`;
const Psmall = styled.p`
  font-size: 17px;
  letter-spacing: 1px;
  font-family: "Soleil_Bold", Helvetica, Arial, sans-serif;
`;
const H3 = styled.h3`
  font-family: "Soleil_Medium", Helvetica, Arial, sans-serif;
  font-size: 20px;
  line-height: 150%;
  font-weight: 550;
`;
const H4 = styled.h3`
  font-family: "Soleil_Medium", Helvetica, Arial, sans-serif;
  font-size: 28px;
  line-height: 150%;
  font-weight: 600;
`;
const H2 = styled.h3`
  font-family: "Soleil_Medium", Helvetica, Arial, sans-serif;
  font-size: 44px;
  line-height: 150%;
`;
const SmallTextnav4 = styled.p`
  font-size: 17px;

  color: #686868;
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
  margin-bottom: 30px;
  margin-top: 10px;
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

  padding: 0px;
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
      <MidTextMain>
        Save your best moments and also retrieve them fast{" "}
      </MidTextMain>
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
              <Ptitle>information" are often used </Ptitle>
            </li>
            <li>
              <Psmall>
                Although the terms "data" and "information" are often used
                interchangeably,
              </Psmall>
            </li>
            <li>
              <Psmall>
                these terms have distinct meanings. In some popular
                publications, data are sometimes said to be transformed
              </Psmall>
            </li>
          </Listing>
          <Listing>
            <li>
              <Ptitle>Data is important</Ptitle>
            </li>
            <li>
              <Psmall>
                Yet, it does not benefit workers; according to Karl Marx, the
                workers (proletariat) work to benefit the bourgeoisie through
                their production of capital.
              </Psmall>
            </li>
            <li>
              <Psmall>
                these terms have distinct meanings. In some popular
                publications, data are sometimes said to be transformed
              </Psmall>
            </li>
          </Listing>
        </Div>
      </LaptopSection>
      <Reviews>
        <Swiper
          effect="fade"
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
            <H3>
              {/* <SmallTextnav2 style={{ lineHeight: "2rem", maxWidth: "500px" }}> */}
              "Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit,
              sed do eiusmod tempor incididunt ut <br /> labore et dolore magna
              aliqua. Ut reprehenderit
              <br />
              <br />
              --dr jones
              {/* </SmallTextnav2> */}
            </H3>
          </SwiperSlide>
          <SwiperSlide style={slideSWiper}>
            <H3>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br />{" "}
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              <br /> Ut enim ad minim veniam, quis nostrud <br /> exercitation
              ullamco laboris nisi
              <br />
              <br />
              --cnn
            </H3>
          </SwiperSlide>
          <SwiperSlide style={slideSWiper}>
            <H3>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br />
              sed do e nisi ut aliquip ex ea commodo consequat. <br />
              Duis aute irure dolor in reprehenderit
              <br />
              <br />
              --engr kelis
            </H3>
          </SwiperSlide>
        </Swiper>
      </Reviews>
    </Container>
  );
};

export default MainLanging;
