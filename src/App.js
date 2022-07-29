import React from "react";
import { Routes, Route } from "react-router-dom";
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
        {/*but using this way ,eventhough we are in '/home' or '/profile' path , we can be rendering <auth/> page, so instead of using useNavigate() in login and signup component lets use Navigate provided by react -router */}
        <Route path="/" element={user ? <Home /> : <Auth />} />
        <Route path="/home" element={user ? <Home /> : <Auth />} />
        <Route path="/profile" element={user ? <Profile /> : <Auth />} />
      </Routes>
    </div>
  );
};

export default App;
