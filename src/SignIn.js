import React from "react";
import "./SignIn.css";
import email from "./icons8_mail_filled_50px_7.png";
import password from "./icons8_password_24px.png";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles(theme => ({
  progress: {
    margin: theme.spacing(2)
  }
}));

const SignIn = props => {
  const classes = useStyles();
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
      <span style={{ alignSelf: "flex-end", color: "#BCBCBC" }}>
        Forgot Password?
      </span>
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
          color: "#fff",
          cursor: "pointer"
        }}
        onClick={props.onClick}
      >
        {props.CircularProgress && (
          <CircularProgress className={classes.progress} />
        )}
        <span>Login</span>
      </div>
      <div className="social">
        <span>Login with</span>
        <img
          className="social-logo"
          src={require("./icons8_facebook_16px.png")}
          alt="icon"
        />
        <img
          className="social-logo"
          src={require("./icons8_google_30px.png")}
          alt="icon"
        />
      </div>
    </div>
  );
};
export default SignIn;
