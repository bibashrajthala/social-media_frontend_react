import Home from "./pages/Home/Home";
import BlurBackground from "./components/BlurBackground/BlurBackground";

import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <BlurBackground />
      <Home />
    </div>
  );
};

export default App;
