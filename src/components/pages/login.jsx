import React, { useState } from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { useDispatch, useSelector } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";
import { LOGINSUCCESS } from "../../redux/action";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import { useFormik } from "formik";
import axios from "axios";
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

const LoginScreen = (props) => {
  const [isRegistered, setIsregistered] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  // error: true,

  const handleCheckIsRegistered = (values) => {
    setIsLoading(true);
    console.log(process.env);
    axios
      .post(`${process.env.REACT_APP_API_URL}/users/CheckIsRegistered`, values)
      .then((res) => {
        setIsLoading(false);
        console.log(res.data);
        setErrorMessage("");
        setIsregistered(true);
      })
      .catch((err) => {
        setIsLoading(false);
        if (err.response) {
          console.log(err.response.data.message);
          err.response.data.message &&
            setErrorMessage(err.response.data.message);
          err.response.data.error && setIsregistered(false);
        }
        console.log(err);
      });
  };
  const handleLogin = (values) => {
    setIsLoading(true);
    axios
      .post(`${process.env.REACT_APP_API_URL}/users/Login`, values)
      .then((res) => {
        setIsLoading(false);
        console.log(res.data);
        setIsregistered(true);
        history.push("/");
        dispatch(LOGINSUCCESS(res.data));
      })
      .catch((err) => {
        setIsLoading(false);
        if (err.response) {
          console.log(err.response.data.message);
          err.response.data.message &&
            setErrorMessage(err.response.data.message);
          err.response.data.error && setIsregistered(false);
        }
        console.log(err);
      });
  };
  const Loginformik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginValidateschema,
    onSubmit: (values) => {
      !Loginformik.values.password && handleCheckIsRegistered(values);
      Loginformik.values.password && handleLogin(values);
      // alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
      <TextFields
        style
        id="email"
        label="Enter email or username"
        value={Loginformik.values.email}
        variant="outlined"
        onChange={Loginformik.handleChange}
        error={Loginformik.touched.email && Boolean(Loginformik.errors.email)}
        helperText={Loginformik.touched.email && Loginformik.errors.email}
      />
      {isRegistered ? (
        <TextFields
          style
          id="password"
          type="password"
          label="password"
          value={Loginformik.values.password}
          variant="outlined"
          onChange={Loginformik.handleChange}
          // error={Loginformik.touched.password && Boolean(Loginformik.errors.email)}
          helperText={
            Loginformik.touched.password && Loginformik.errors.password
          }
        />
      ) : null}
      {errorMessage && (
        <small style={{ color: "red", fontSize: "13px", marginBottom: "10px" }}>
          {errorMessage}
        </small>
      )}
      <Button
        onClick={Loginformik.handleSubmit}
        variant="contained"
        color="primary"
        style={{ backgroundColor: "green", width: "300px", height: "50px" }}
      >
        {isLoading ? (
          <CircularProgress
            size={20}
            color="primary"
            style={{ color: "white" }}
          />
        ) : isRegistered ? (
          "login"
        ) : (
          "Continue"
        )}
      </Button>
    </>
  );
};
const SignUpScreen = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  const Signupformik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: SignuPValidateschema,
    onSubmit: (values) => {
      setIsLoading(true);
      axios
        .post(`${process.env.REACT_APP_API_URL}/users/Register`, values)
        .then((res) => {
          setIsLoading(false);
          console.log(res.data);
          history.push("/");
          dispatch(LOGINSUCCESS(res.data));
        })
        .catch((err) => {
          setIsLoading(false);
          if (err.response) {
            console.log(err.response.data.message);
            err.response.data.message &&
              setErrorMessage(err.response.data.message);
          }
          console.log(err);
        });
      // !Loginformik.values.password && handleCheckIsRegistered(values);
      // Loginformik.values.password && handleLogin(values);
      // // alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <>
      <TextFields
        style
        id="email"
        label="Email"
        value={Signupformik.values.email}
        variant="outlined"
        onChange={Signupformik.handleChange}
        error={Signupformik.touched.email && Boolean(Signupformik.errors.email)}
        helperText={Signupformik.touched.email && Signupformik.errors.email}
      />
      <TextFields
        style
        id="password"
        type="password"
        label="password"
        value={Signupformik.values.password}
        variant="outlined"
        onChange={Signupformik.handleChange}
        error={
          Signupformik.touched.password && Boolean(Signupformik.errors.password)
        }
        helperText={
          Signupformik.touched.password && Signupformik.errors.password
        }
      />{" "}
      {errorMessage && (
        <small style={{ color: "red", fontSize: "13px", marginBottom: "10px" }}>
          {errorMessage}
        </small>
      )}
      <Button
        onClick={Signupformik.handleSubmit}
        variant="contained"
        color="primary"
        style={{ backgroundColor: "green", width: "300px", height: "50px" }}
      >
        {isLoading ? (
          <CircularProgress
            size={20}
            color="primary"
            style={{ color: "white" }}
          />
        ) : (
          "Sign up now"
        )}
      </Button>
    </>
  );
};

var LoginValidateschema = yup.object().shape({
  email: yup
    .string("pls enter an email")
    .email("pls enter a valid email")
    .required("email is reqired"),
  // password: yup
  //   .string("enter a password")
  //   .lowercase()
  //   .min(6, "should be higher than 5 letters")
  //   .required(),
  // createdOn: yup.date().default(function () {
  //   return new Date();
  // }),
});
var SignuPValidateschema = yup.object().shape({
  email: yup
    .string("pls enter an email")
    .email("pls enter a valid email")
    .required("email is reqired"),
  password: yup
    .string("enter a password")
    .lowercase()
    .min(6, "should be higher than 5 letters")
    .required("password is required"),
  // createdOn: yup.date().default(function () {
  //   return new Date();
  // }),
});

const Login = (props) => {
  const { match, history } = props;
  const location = useLocation();

  return (
    <Container>
      <LoginCard>
        <Link to="/">
          <Logo src="/logo.jpg" />
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
