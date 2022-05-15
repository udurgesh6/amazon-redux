import React, { useState, useEffect } from "react";
import "../css/Login.css";
import Az from "../assets/aznew.png";
import { useNavigate } from "react-router-dom";
import { app } from "../firebase.config";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

function Login() {
  const navigate = useNavigate();

  useEffect(() => {
    const userExists = sessionStorage.getItem("auth");
    console.log(userExists);
    if (userExists) {
      navigate("/");
    } else {
      //
    }
  }, []);

  const routeToRegister = () => {
    navigate("/register");
  };
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const loginMe = () => {
    const authentication = getAuth();
    signInWithEmailAndPassword(authentication, email, pw)
      .then((response) => {
        console.log(response);
        sessionStorage.setItem("auth", response._tokenResponse.refreshToken);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="login">
      <div className="login_top">
        <img src={Az} height="50px" />
        <div className="signIn_box">
          <p
            style={{
              fontSize: "23px",
              fontWeight: "500",
              padding: "0px",
              margin: "0px",
            }}
          >
            Sign-In
          </p>
          <p style={{ fontSize: "13px", fontWeight: "500" }}>
            Email or mobile phone number
          </p>
          <input
            style={{
              height: "30px",
              marginBottom: "10px",
              borderRadius: "5px",
            }}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <p style={{ fontSize: "13px", fontWeight: "500" }}>Password</p>
          <input
            style={{
              height: "30px",
              marginBottom: "10px",
              borderRadius: "5px",
            }}
            type="password"
            value={pw}
            onChange={(e) => setPw(e.target.value)}
            placeholder="Password"
          />
          <button
            style={{
              height: "30px",
              backgroundColor: "#F3D078",
              borderRadius: "5px",
            }}
            onClick={loginMe}
          >
            Continue
          </button>
          <p style={{ fontSize: "12px", fontWeight: "400" }}>
            By continuing, you agree to Amazon's{" "}
            <span className="hoverPrivacy">Conditions of Use</span> and{" "}
            <span className="hoverPrivacy">Privacy Notice</span>.
          </p>
          <p style={{ fontSize: "14px" }} className="hoverPrivacy">
            Need help ?
          </p>
        </div>
        <p style={{ fontSize: "12px", color: "grey" }}>New to Amazon</p>
        <button className="create_acc" onClick={routeToRegister}>
          Create your Amazon account
        </button>
      </div>
      <div className="login_bottom">
        <div
          style={{
            width: "300px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            marginTop: "20px",
          }}
        >
          <p className="login_lowerLinks">Conditions of use</p>
          <p className="login_lowerLinks">Privacy Notice</p>
          <p className="login_lowerLinks">Help</p>
        </div>
        <p style={{ fontSize: "12px" }}>
          © 1996-2022, Amazon.com, Inc. or its affiliates
        </p>
      </div>
    </div>
  );
}

export default Login;
