import React from "react";

import BlurBackground from "./components/BlurBackground/BlurBackground";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import Auth from "./pages/Auth/Auth";

import "./App.scss";
const App = () => {
  return (
    <div className="App">
      <BlurBackground />
      {/* <Home /> */}
      <Profile />
      {/* <Auth /> */}
    </div>
  );
};

export default App;
