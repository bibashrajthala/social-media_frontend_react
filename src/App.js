import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import BlurBackground from "./components/BlurBackground/BlurBackground";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import Auth from "./pages/Auth/Auth";

import "./App.scss";
const App = () => {
  const user = useSelector((state) => state.authReducer.authData);
  console.log(user); // if user is NOT logged in or  signed up ie  we dont authData in authReducer's state of store ,we need to go to auth page .
  return (
    <div className="App">
      <BlurBackground />
      <Routes>
        <Route
          path="/"
          element={
            user ? (
              <Navigate to="home" />
            ) : (
              <Navigate to="auth" />
            ) /* instead of rendering component directly Navigate Component can be used to change and go to diff. path from the current path for which certain component can be rendered( here from '/' go to "home"=>'/home' or 'auth'=>'/auth') */
          }
        />
        <Route
          path="/auth"
          element={
            user ? (
              <Navigate to="../home" />
            ) : (
              <Auth />
            ) /* from '/auth' go one path up ie '/' then to 'home'=>'/home'  or directly render <Auth/> if user is not NUll*/
          }
        />
        <Route
          path="/home"
          element={user ? <Home /> : <Navigate to="../auth" />}
        />
        <Route
          path="/profile"
          element={user ? <Profile /> : <Navigate to="../auth" />}
        />
      </Routes>
    </div>
  );
};

export default App;
