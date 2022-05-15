import React, { useState } from "react";
import "../css/Login.css";
import Az from "../assets/aznew.png";
import "../css/Register.css";
import { app } from "../firebase.config";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [cpw, setCpw] = useState("");
  const registerMe = () => {
    if (pw === cpw) {
      const authentication = getAuth();
      createUserWithEmailAndPassword(authentication, email, pw)
        .then((response) => {
          sessionStorage.setItem("auth", response._tokenResponse.refreshToken);
          navigate("/");
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      alert("Passwords do not match !");
    }
  };
  return (
    <div className="register">
      <div className="register_top">
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
            Create Account
          </p>
          <p
            style={{
              fontSize: "13px",
              fontWeight: "500",
              paddingBottom: "0px",
              marginBottom: "0px",
            }}
          >
            Your name
          </p>
          <input
            style={{
              height: "30px",
              marginBottom: "10px",
              borderRadius: "5px",
            }}
          />
          <p
            style={{
              fontSize: "13px",
              fontWeight: "500",
              padding: "0px",
              margin: "0px",
            }}
          >
            Email
          </p>
          <input
            style={{
              height: "30px",
              marginBottom: "10px",
              borderRadius: "5px",
            }}
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p
            style={{
              fontSize: "13px",
              fontWeight: "500",
              padding: "0px",
              margin: "0px",
            }}
          >
            Password
          </p>
          <input
            style={{
              height: "30px",
              marginBottom: "10px",
              borderRadius: "5px",
            }}
            type="password"
            placeholder="Enter password"
            value={pw}
            onChange={(e) => setPw(e.target.value)}
          />
          <p
            style={{
              fontSize: "13px",
              fontWeight: "500",
              padding: "0px",
              margin: "0px",
            }}
          >
            Confirm Password
          </p>
          <input
            style={{
              height: "30px",
              marginBottom: "10px",
              borderRadius: "5px",
            }}
            type="password"
            placeholder="Confirm password"
            value={cpw}
            onChange={(e) => setCpw(e.target.value)}
          />
          <button
            style={{
              height: "30px",
              backgroundColor: "#F3D078",
              borderRadius: "5px",
            }}
            onClick={registerMe}
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
        <button className="create_acc">Create your Amazon account</button>
      </div>
      <div className="register_bottom">
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

export default Register;
