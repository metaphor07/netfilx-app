import React, { useRef, useState } from "react";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import "./register.css";
import { API_URL } from "../../Helper";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const navigate = useNavigate();

  const emailRef = useRef();
  const passwordRef = useRef();
  const usernameRef = useRef();

  const handleStart = () => {
    setEmail(emailRef.current.value);
  };
  const handleFinish = async (e) => {
    e.preventDefault();
    setUsername(usernameRef.current.value);
    setPassword(passwordRef.current.value);
    try {
      await axios.post(`${API_URL}/auth/register`, {
        email,
        username,
        password,
      });
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img
            className="registerImgLogo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
          {/* <div className="loginButton" onClick={() => console.log("click")}>
            <NavLink to="/login">Sign in</NavLink>
          </div> */}
          {/* <button className="loginButton">Sign</button> */}
        </div>
      </div>
      <div className="registerContainer">
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>

        {!email ? (
          <>
            <div className="input">
              <input
                required
                type="email"
                placeholder="email address"
                ref={emailRef}
              />
              <button className="registerButton" onClick={handleStart}>
                Get Started
              </button>
            </div>
            <NavLink
              to="/login"
              style={{ textDecoration: "none", color: "white" }}
            >
              <span className="signSpan">
                already have an Account? <b style={{ color: "red" }}>Sign In</b>{" "}
                now.
              </span>
            </NavLink>
          </>
        ) : (
          <>
            <form className="input nextForm">
              <input type="text" placeholder="Username" ref={usernameRef} />
              <input type="password" placeholder="password" ref={passwordRef} />

              <button className="registerButton" onClick={handleFinish}>
                Started
              </button>
            </form>
            <NavLink
              to="/login"
              style={{ textDecoration: "none", color: "white" }}
            >
              <span className="signSpan nextSignSpan">
                already have an Account? <b style={{ color: "red" }}>Sign In</b>{" "}
                now.
              </span>
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Register;
