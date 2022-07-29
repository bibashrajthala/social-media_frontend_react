import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { signUp } from "../../actions/AuthActions";

import "./SignUp.scss";

const defaultSignUpFormData = {
  firstName: "",
  lastName: "",
  username: "",
  password: "",
  confirmPassword: "",
};

const SignUp = ({ setIsSignUp }) => {
  const [formData, setFormData] = useState(defaultSignUpFormData);
  const [isPasswordsSame, setIsPasswordsSame] = useState(true);
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.authReducer.loading);

  const { firstName, lastName, username, password, confirmPassword } = formData;

  const changeFormHandler = () => setIsSignUp(false);

  const resetFormFields = () => {
    setFormData(defaultSignUpFormData);
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(formData);

    if (password !== confirmPassword) {
      setIsPasswordsSame(false);
    } else {
      setIsPasswordsSame(true);
      dispatch(signUp(formData)); // only dispatch data entered to action's signUp only when two passwords entered are same
    }

    resetFormFields();
  };

  return (
    <form className="sign-up" onSubmit={onSubmitHandler}>
      <h3 className="sign-up__heading">Sign Up</h3>

      <div className="sign-up__inputs">
        <div className="input-names">
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            onChange={onChangeHandler}
            value={firstName}
          />
          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            onChange={onChangeHandler}
            value={lastName}
          />
        </div>
        <div className="input-email">
          <input
            type="email"
            placeholder="Username"
            name="username"
            onChange={onChangeHandler}
            value={username}
          />
        </div>
        <div className="input-password">
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={onChangeHandler}
            value={password}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            onChange={onChangeHandler}
            value={confirmPassword}
          />
        </div>
      </div>

      <span
        style={{
          display: isPasswordsSame ? "none" : "block",
          fontSize: "1.1rem",
          color: "red",
          alignSelf: "flex-end",
        }}
      >
        * Confirm Password is not same as your Password
      </span>

      <span className="sign-up__text" onClick={changeFormHandler}>
        Already have an account? <span>Login!</span>
      </span>

      <button
        type="submit"
        className="button sign-up__button"
        disabled={loading} // disable button(non-clickable) when loading is true
      >
        {loading ? "Loading..." : "Sign Up"}
      </button>
    </form>
  );
};

export default SignUp;
