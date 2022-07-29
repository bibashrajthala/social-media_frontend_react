import React, { useState } from "react";

import "./login.scss";

const defaultLogInFormData = {
  username: "",
  password: "",
};

const Login = ({ setIsSignUp }) => {
  const [formData, setFormData] = useState(defaultLogInFormData);

  const { username, password } = formData;

  const changeFormHandler = () => setIsSignUp(true);

  const resetFormFields = () => {
    setFormData(defaultLogInFormData);
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(formData);

    resetFormFields();
  };
  return (
    <form className="log-in" onSubmit={onSubmitHandler}>
      <h3 className="log-in__heading">Log In</h3>

      <div className="log-in__inputs">
        <input
          type="email"
          placeholder="Username"
          name="username"
          onChange={onChangeHandler}
          value={username}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={onChangeHandler}
          value={password}
        />
      </div>

      <div className="log-in__check">
        <span className="log-in__text" onClick={changeFormHandler}>
          Don't have an account? <span>SignUp!</span>
        </span>

        <button type="submit" className="button log-in__button">
          Login
        </button>
      </div>
    </form>
  );
};

export default Login;
