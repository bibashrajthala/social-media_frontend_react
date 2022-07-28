import React from "react";

import "./SignUp.scss";

const SignUp = () => {
  return (
    <form className="sign-up">
      <h3 className="sign-up__heading">Sign Up</h3>

      <div className="sign-up__inputs">
        <div className="input-names">
          <input type="text" placeholder="First Name" name="firstname" />
          <input type="text" placeholder="Last Name" name="lastname" />
        </div>
        <div className="input-email">
          <input type="email" placeholder="Username" name="username" />
        </div>
        <div className="input-password">
          <input type="password" placeholder="Password" name="password" />
          <input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
          />
        </div>
      </div>
      <span className="sign-up__text">Already have an account? Login!</span>

      <button type="submit" className="button sign-up__button">
        Sign Up
      </button>
    </form>
  );
};

export default SignUp;
