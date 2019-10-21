import React, { Component } from "react";
import ReactDOM from "react-dom";
import logo from "./logo.svg";
import wavy_house from "./wavy_house.jpg";
import wavy from "./wavy.svg";
import orange_facebook from "./orange-facebook.gif";
import google_orange from "./google-orange.jpg";

class Login extends Component {
  state = {
    userName: "Enter Username",
    password: ""
  };

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.userName);
    console.log(event);
    event.preventDefault();
  }
  render() {
    return <div></div>;
  }
}

export default Login;
