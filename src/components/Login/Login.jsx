import React from "react";

import "./login.scss";

const Login = () => {
  return (
    <form className="log-in">
      <h3 className="log-in__heading">Log In</h3>

      <div className="log-in__inputs">
        <input type="email" placeholder="Username" name="username" />
        <input type="password" placeholder="Password" name="password" />
      </div>

      <div className="log-in__check">
        <span className="log-in__text">Don't have an account? SignUp!</span>

        <button type="submit" className="button log-in__button">
          Login
        </button>
      </div>
    </form>
  );
};

export default Login;
