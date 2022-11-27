import Navbar from "./Components/Navbar";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Icdn from "./Components/Icdn";
function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
      <Route exact path="/number"  element={<Icdn/>}></Route>
      <Route exact path="/"  element={<Home/>}></Route>
      <Route exact path="/about"  element={<About/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
