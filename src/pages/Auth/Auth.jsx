import React, { useState } from "react";

import Logo from "../../assets/logo.png";

import SignUp from "../../components/SignUp/SignUp";
import Login from "../../components/Login/Login";

import "./auth.scss";

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  return (
    <div className="auth">
      <div className="project-details">
        <div className="project-logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="project-detail">
          <h2 className="project-name">TweetBook</h2>
          <span className="project-motto">
            Explore the ideas throughout the world
          </span>
        </div>
      </div>

      {isSignUp ? (
        <SignUp setIsSignUp={setIsSignUp} />
      ) : (
        <Login setIsSignUp={setIsSignUp} />
      )}
    </div>
  );
};

export default Auth;
