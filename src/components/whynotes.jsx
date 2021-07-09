import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { Link, useHistory } from "react-router-dom";
import NoteAddIcon from "@material-ui/icons/NoteAdd";
import ImageSearchIcon from "@material-ui/icons/ImageSearch";
import PermMediaIcon from "@material-ui/icons/PermMedia";
import RotateLeftIcon from "@material-ui/icons/RotateLeft";
import Footers from "./pages/footer";
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
import NavBar from "./Navbar";
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
const Pbig = styled.p`
  font-size: 25px;
  line-spacing: 2px;
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
  // font-family: "Soleil_Bold", Helvetica, Arial, sans-serif;
  font-size: 25px;
  letter-spacing: 1px;
  line-height: 150%;
`;
const Psmall = styled.p`
  font-size: 16px;

  font-weight: 400;
  letter-spacing: 1px;

  // color: rgb(94, 94, 94);

  // font-size: 17px;
  // letter-spacing: 1.2px;
  // // font-family: "Soleil_Bold", Helvetica, Arial, sans-serif;
  // // font-family: "Soleil_Medium", Helvetica, Arial, sans-serif;
`;
const H3 = styled.h3`
  // font-family: "Soleil_Medium", Helvetica, Arial, sans-serif;
  font-size: 28px;
  letter-spacing: 1.5px;
  line-height: 150%;
  font-weight: 550;
`;
const H4 = styled.h4`
  // font-family: "Soleil_Medium", Helvetica, Arial, sans-serif;
  font-size: 20px;
  line-height: 150%;
  font-weight: 500;
  letter-spacing: 2px;
`;
const H2 = styled.h2`
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

const CardSection1 = styled.div`
  width: 100%;
  flex-wrap: wrap;
  min-height: 40px;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 50px;
`;
const FeaturesCard = styled.div`
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  height: 300px;
  width: 280px;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 5px;
  margin: 10px;
`;

const WhyNotes = () => {
  const history = useHistory();
  return (
    <>
      <NavBar />

      <Container>
        <BigText>Why To Choose Notes</BigText>
        <H4>
          Although the terms and "information" are often used interchangeably,
          <br />
          these terms have distinct meanings. In some popular publications,
          data,
          <br />
          are sometimes said to be transformed into,
          <br />
        </H4>

        <Button
          onClick={() => history.push("/plans")}
          variant="contained"
          color="primary"
          style={{ backgroundColor: "green", width: "200px", height: "50px" }}
        >
          <small> Sign up now to begin..</small>
        </Button>
        <CardSection1>
          <FeaturesCard>
            <NoteAddIcon
              fontSize="large"
              style={{
                color: "green",
                fontSize: "60px",
              }}
            />
            <H3>Transform Into</H3>
            <Psmall>
              Although the terms "data" and "information" are often used
              interchangeably, Although the terms "data" and "information" are
              often used interchangeably,
            </Psmall>
          </FeaturesCard>
          <FeaturesCard>
            <ImageSearchIcon
              fontSize="large"
              style={{ color: "green", fontSize: "60px" }}
            />
            <H3>Transform Into</H3>
            <Psmall>
              Al, Although the terms "data" and "information" are often used
              interchangeably,
            </Psmall>
          </FeaturesCard>
          <FeaturesCard>
            <RotateLeftIcon
              fontSize="large"
              style={{ color: "green", fontSize: "60px" }}
            />
            <H3>Transform Into</H3>
            <Psmall>
              nformation" are often used interchangeably, Although the terms
              "data" and "information" are often used interchangeably,
            </Psmall>
          </FeaturesCard>
          <FeaturesCard>
            <PermMediaIcon
              fontSize="large"
              style={{ color: "rgb(34, 139, 34)", fontSize: "60px" }}
            />
            <H3>Transform Into</H3>
            <Psmall>
              information" are often used interchangeably, Although the terms
              "data" and "information" are often used interchangeably,
            </Psmall>
          </FeaturesCard>
        </CardSection1>
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
                sed do eiusmod tempor incididunt ut <br /> labore et dolore
                magna aliqua. Ut reprehenderit
                <br />
                <br />
                --dr jones
                {/* </SmallTextnav2> */}
              </H3>
            </SwiperSlide>
            <SwiperSlide style={slideSWiper}>
              <H3>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br />{" "}
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. <br /> Ut enim ad minim veniam, quis nostrud <br />{" "}
                exercitation ullamco laboris nisi
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
        <Footers />
      </Container>
    </>
  );
};

export default WhyNotes;
