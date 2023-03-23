/* eslint-disable no-restricted-syntax */
import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
import "./Login.css";
import Form from "../../components/Form/Form";
import logo from "../../assets/Scrypt-Education.png";
import Button from "../../components/Button/Button";
import UserPool from "../../UserPool";
import UserContext from "../../contexts/UserContext";

function Login() {
  const { setUserDetails, userDetails, InsertToSqlDb, searchUser } =
    useContext(UserContext);
  const navigate = useNavigate();
  const [loginCredentials, setLoginCredentials] = useState({
    email: "",
    password: "",
  });
  const [userObj, setUserObj] = useState(null);
  const [loginError, setLoginError] = useState(null);
  const [roleError, setRoleError] = useState(null);
  const [confirmError, setConfirmError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const user = await searchUser();
    };
    fetchUser();
  }, []);

  const submitHandler = () => {
    navigate("/gallery");

    // setLoginError(null);
    // setConfirmError(null);
    // setRoleError(null);
    // const user = new CognitoUser({
    //   Username: userObj.email,
    //   Pool: UserPool,
    // });

    // const authDetails = new AuthenticationDetails({
    //   Username: userObj.email,
    //   Password: userObj.password,
    // });

    // user.authenticateUser(authDetails, {
    //   onSuccess: (data) => {
    //     console.log("On Success");
    //     console.log(data.accessToken);
    //     if (data.accessToken.payload["cognito:groups"] === undefined) {
    //       setRoleError(true);
    //       return;
    //     }
    //     console.log(data.accessToken.payload["cognito:groups"][0]);
    //     console.log(data.idToken.payload.email);
    //     InsertToSqlDb({
    //       username: data.accessToken.payload.username,
    //       role: data.accessToken.payload["cognito:groups"][0],
    //       email: data.idToken.payload.email,
    //     });
    //     setUserDetails({
    //       username: data.accessToken.payload.username,
    //       role: data.accessToken.payload["cognito:groups"][0],
    //       email: data.idToken.payload.email,
    //     });
    //     navigate("/gallery");
    //   },
    //   onFailure: (err) => {
    //     console.log("On Failure");
    //     console.log(err);
    //     setLoginError(err);
    //   },
    //   newPasswordRequired: () => {
    //     setConfirmError(true);
    //     console.log("New password required");
    //     UserPool.signUp(
    //       userObj.email,
    //       userObj.password,
    //       [],
    //       null,
    //       (err, data) => {
    //         if (err) {
    //           console.log(err);
    //         }
    //         console.log(data);
    //       }
    //     );
    //     console.log("User Created");
    //   },
    // });
  };

  const changeHandle = (event) => {
    setUserObj({ ...userObj, [event.target.name]: event.target.value });
  };

  return (
    <div className="login-container">
      <div className="form-container">
        <div className="company-logo-wrapper">
          <img className="company-logo" src={logo} alt="company-logo" />
        </div>
        <Form
          loginCredentials={loginCredentials}
          setLoginCredentials={setLoginCredentials}
          className="email"
          updateState={(e) => changeHandle(e)}
        />
        <div>
          <Form
            loginCredentials={loginCredentials}
            setLoginCredentials={setLoginCredentials}
            className="password"
            updateState={(e) => changeHandle(e)}
          />
        </div>
        <div className="forgot-password-wrapper">
          <a href="/">Forgot password?</a>
        </div>
        {loginError !== null && <p className="wrong">Details are wrong</p>}
        {roleError !== null && (
          <p className="wrong">
            Your role is not assigned, please contact your admin
          </p>
        )}
        {confirmError !== null && (
          <p className="wrong">
            Your new user has not been confirmed yet, please contact your admin
          </p>
        )}
        <div className="button-wrapper">
          <Button
            className="Login"
            functionality={() => submitHandler()}
            loginCredentials={loginCredentials}
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
