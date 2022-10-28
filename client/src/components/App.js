import "../App.css";
import Login from "./Login";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import Signup from "./Signup";
import About from "./About";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route exact path="/home" element={<Home />}></Route>
        <Route exact path="/signup" element={<Signup />}></Route>
        <Route exact path="/about" element={<About />}></Route>
      </Routes>
    </div>
  );
}

export default App;
