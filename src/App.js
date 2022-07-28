import React from "react";

import BlurBackground from "./components/BlurBackground/BlurBackground";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";

import "./App.scss";
const App = () => {
  return (
    <div className="App">
      <BlurBackground />
      {/* <Home /> */}
      <Profile />
    </div>
  );
};

export default App;
