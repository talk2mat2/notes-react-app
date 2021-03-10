import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import {
  Switch,
  Route,
  Link,
  // useRouteMatch,
  useLocation,
  // useParams
} from "react-router-dom";

const Container = styled.div`
  //   background-color: #afeeee;
  background-color: #f1f0f0;
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Buttons = styled(Button)`
  && {
    color: green;
    border-color: silver;
    min-width: 300px;
    &:focus {
      background-color: blue;
    }
  }
`;
const TextFields = styled(TextField)`
  && {
    width: 300px;
    height: 100px;
    &:focus {
      border-color: green;
    }
  }
`;
const Line = styled.div`
  width: 140px;
  height: 1px;
  background-color: silver;
`;
const LoginCard = styled.div`
  text-align: center;
  box-sizing: border-box;
  padding: 10px;
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 99vh;
  width: 500px;
  @media (max-width: 710px) {
    width: 100vw;
  }
  background-color: white;
  margin-bottom: 20px;
  box-shadow: 0 5px 10px rgba(154, 160, 185, 0.05),
    0 15px 40px rgba(166, 173, 201, 0.2);
  border-radius: 5px;
`;
const Logo = styled.img`
  height: 50px;
  width: 200px;
`;

const SmallTextnav2 = styled.p`
  font-size: 15px;
  color: grey;


  }
`;
const SmallText2 = styled.p`
  font-size: 13px;
  color: grey;


  }
`;
const Breaker = styled.div`
display:flex;
flex-direction:row;
align-items:center;


  }
`;

const LoginScreen = () => {
  return (
    <TextFields
      style
      id="outlined-basic"
      label="Enter email or username"
      variant="outlined"
    />
  );
};
const SignUpScreen = () => {
  return (
    <>
      <TextFields style id="outlined-basic" label="Email" variant="outlined" />
      <TextFields
        style
        id="outlined-basic"
        label="Password"
        variant="outlined"
      />
    </>
  );
};

const Login = (props) => {
  const { match, history } = props;
  const location = useLocation();

  return (
    <Container>
      <LoginCard>
        <Link to="/">
          <Logo src="logo.jpg" />
        </Link>
        <SmallTextnav2>Capture your memorable moments</SmallTextnav2>
        <Buttons variant="outlined" color="secondary">
          <img
            src="/google.png"
            style={{ height: "15px", marginRight: "10px" }}
            alt="G"
          />
          Continue with Google
        </Buttons>
        <Breaker>
          <Line />
          <SmallTextnav2 style={{ color: "silver" }}>or</SmallTextnav2>
          <Line />
        </Breaker>

        <Switch>
          <Route exact path={match.url}>
            <LoginScreen />
          </Route>
          <Route path={`${match.url}/signup`}>
            <SignUpScreen />
          </Route>
        </Switch>
        <Button
          variant="contained"
          color="primary"
          style={{ backgroundColor: "green", width: "300px", height: "50px" }}
        >
          Sign Up Now
        </Button>
        <div style={{ marginTop: "30px" }}>
          <SmallText2>Remember me</SmallText2>
        </div>
        <div>
          <SmallText2>
            {location.pathname === match.url ? (
              <>
                {" "}
                <SmallText2>dont have account?</SmallText2>
                <Link to={`${match.url}/signup`}>Create account</Link>
              </>
            ) : (
              <>
                <SmallText2>Already have an account?</SmallText2>
                <Link to={`${match.url}`}>Sign In</Link>
              </>
            )}
          </SmallText2>
        </div>
      </LoginCard>
    </Container>
  );
};

export default Login;
