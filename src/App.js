import React, { Component, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Form from "./Login.js";
import house from "./house.jpeg";
import Tabs from "./Button";
import Button from "./Button";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
const App = () => {
  const [color, setColor] = useState({
    signInColor: "#FF6600",
    signUpColor: "#BCBCBC"
  });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInState, setSignInState] = useState(true);
  const click = () => {
    setColor({
      signInColor: "#FF6600",
      signUpColor: "#BCBCBC"
    });
    setSignInState(true);
    console.log("clicked");
  };
  const clickSignUp = () => {
    setColor({
      signUpColor: "#FF6600",
      signInColor: "#BCBCBC"
    });
    setSignInState(false);
  };
  const getValue = (value, state) => {
    state(value.target.value);
  };
  return (
    <div className="container">
      {/* <Form /> */}
      <div className="sub_container">
        <div className="image-container"></div>
        <div className="login-main-container">
          <div className="login-container">
            <h2>Welcome to DC </h2>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <Button
                buttonText="SIGN IN"
                borderColor={color.signInColor}
                onClick={click}
              />
              <Button
                buttonText="SIGN UP"
                borderColor={color.signUpColor}
                onClick={clickSignUp}
                marginLeft={30}
              />
            </div>
            {signInState && (
              <div>
                <SignIn
                  onChangeEmail={value => getValue(value, setEmail)}
                  onChangePassword={value => getValue(value, setPassword)}
                />
              </div>
            )}
            {!signInState && (
              <div>
                <SignUp />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;
