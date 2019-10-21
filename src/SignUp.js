import React from "react";
import "./SignIn.css";
import email from "./icons8_mail_filled_50px_7.png";
import password from "./icons8_password_24px.png";
const SignUp = props => {
  return (
    <div style={{ marginTop: 40, display: "flex", flexDirection: "column" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "row"
        }}
      >
        <img
          src={email}
          style={{
            position: "absolute",
            width: 20,
            height: 20,
            marginLeft: 10
          }}
          alt="icon"
        />
        <input
          placeholder="Enter mail id"
          style={{
            width: 250,
            height: 45,
            borderRadius: 10,
            borderWidth: 0,
            backgroundColor: "#BCBCBC",
            color: "#000000",
            paddingLeft: 40
          }}
          onChange={props.onChangeEmail}
          className="placeholder"
        />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          marginTop: 20
        }}
      >
        <img
          src={password}
          style={{
            position: "absolute",
            width: 20,
            height: 20,
            marginLeft: 10
          }}
          alt="icon"
        />
        <input
          placeholder="Enter password"
          style={{
            width: 250,
            height: 45,
            borderRadius: 10,
            borderWidth: 0,
            backgroundColor: "#BCBCBC",
            color: "#000000",
            paddingLeft: 40
          }}
          className="placeholder"
          onChange={props.onChangePassword}
        />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          marginTop: 20
        }}
      >
        <img
          src={password}
          style={{
            position: "absolute",
            width: 20,
            height: 20,
            marginLeft: 10
          }}
          alt="icon"
        />
        <input
          placeholder="Confirm password"
          style={{
            width: 250,
            height: 45,
            borderRadius: 10,
            borderWidth: 0,
            backgroundColor: "#BCBCBC",
            color: "#000000",
            paddingLeft: 40
          }}
          className="placeholder"
          onChange={props.onChangePassword}
        />
      </div>
      <div
        className="login-button"
        style={{
          borderRadius: 10,
          backgroundColor: "#FF6600",
          width: 290,
          height: 45,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 30,
          color: "#fff"
        }}
      >
        <span>SignUp</span>
      </div>
    </div>
  );
};
export default SignUp;
