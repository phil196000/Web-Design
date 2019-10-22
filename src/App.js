import React, { useState } from "react";

import "./App.css";
import firebase from "firebase";
import Button from "./Button";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

var firebaseConfig = {
  apiKey: "AIzaSyBcsBC70u7Pf0CfIA-WF_u8I1C7i0F7bS0",
  authDomain: "exiteck-cfa58.firebaseapp.com",
  databaseURL: "https://exiteck-cfa58.firebaseio.com",
  projectId: "exiteck-cfa58",
  storageBucket: "exiteck-cfa58.appspot.com",
  messagingSenderId: "425621983536",
  appId: "1:425621983536:web:79d733859835bdb85f78f5",
  measurementId: "G-H4K9SMW48K"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// firebase.initializeApp(firebaseConfig);
firebase.analytics();

const App = () => {
  let db = firebase.firestore();
  const [color, setColor] = useState({
    signInColor: "#FF6600",
    signUpColor: "#BCBCBC"
  });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [signInState, setSignInState] = useState(true);
  const [circularProgress, setCircularProgress] = useState(false);
  const [loginState, setLoginState] = useState(false);
  const click = () => {
    setColor({
      signInColor: "#FF6600",
      signUpColor: "#BCBCBC"
    });
    setSignInState(true);

    setEmail("");
    setConfirmPassword("");
    setPassword("");
  };
  const clickSignUp = () => {
    setColor({
      signUpColor: "#FF6600",
      signInColor: "#BCBCBC"
    });
    setSignInState(false);
    setEmail("");
    setConfirmPassword("");
    setPassword("");
  };
  const getValue = (value, state) => {
    state(value.target.value);
    console.log(value.target.value);
  };
  const register = () => {
    setCircularProgress(true);
    if (
      email.length > 10 &&
      password.length >= 8 &&
      confirmPassword.length >= 8
    ) {
      if (password === confirmPassword) {
        const data = {
          email: email,
          password: password
        };
        let auth = firebase.auth();
        auth.si;
        let query = db.collection("Users").where("email", "==", email);
        query.get().then(doc => {
          if (doc.empty) {
            db.collection("Users")
              .doc(email)
              .set(data)
              .then(() => {
                setCircularProgress(false);
                setEmail("");
                setConfirmPassword("");
                setPassword("");
                alert("Successful");
              })
              .catch(error => {
                console.log(error.message);
                setCircularProgress(false);
              });
          } else {
            setCircularProgress(false);
            alert("email already exists");
          }
        });
      } else {
        setCircularProgress(false);
        alert("password mismatch");
      }
    } else {
      setCircularProgress(false);
      alert("length of field not met");
    }
  };
  const login = () => {
    setCircularProgress(true);
    if (email.length > 10 && password.length >= 8) {
      const query = db.collection("Users").where("email", "==", email);

      query
        .get()
        .then(docs => {
          if (docs.empty) {
            alert("you don't have an account with us");
          }
          docs.forEach(doc => {
            if (doc.data().password === password) {
              setCircularProgress(false);
              setLoginState(true);
            } else {
              setCircularProgress(false);
            }
          });
        })
        .catch(error => {
          setCircularProgress(false);
        });
    } else {
      setCircularProgress(false);
    }
  };
  return (
    <div className="container">
      {/* <Form /> */}
      <div className="sub_container">
        <div className="image-container"></div>
        <div className="login-main-container">
          <div className="login-container">
            <h2>Welcome to DC </h2>
            {!loginState && (
              <div>
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
                      CircularProgress={circularProgress}
                      onClick={login}
                    />
                  </div>
                )}
                {!signInState && (
                  <div>
                    <SignUp
                      onChangeEmail={value => getValue(value, setEmail)}
                      onChangePassword={value => getValue(value, setPassword)}
                      onChangeConfirmPassword={value =>
                        getValue(value, setConfirmPassword)
                      }
                      onClick={register}
                      CircularProgress={circularProgress}
                    />
                  </div>
                )}
              </div>
            )}
            {loginState && <div>Welcome {email}</div>}
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;
