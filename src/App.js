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
  // console.log(user);
  return (
    <div className="App">
      <BlurBackground />
      <Routes>
        <Route
          path="/"
          element={user ? <Navigate to="home" /> : <Navigate to="auth" />}
        />
        <Route
          path="/auth"
          element={user ? <Navigate to="../home" /> : <Auth />}
        />
        <Route
          path="/home"
          element={user ? <Home /> : <Navigate to="../auth" />}
        />
        <Route
          path="/profile/:id"
          element={user ? <Profile /> : <Navigate to="../auth" />}
        />
      </Routes>
    </div>
  );
};

export default App;
