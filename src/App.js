import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Icdn from "./Components/Icdn";
import Ten from "./Components/Ten";
import Hund from "./Components/Hund";
import Five from "./Components/Five";
import Thous from "./Components/Thous";
import Tent from "./Components/Tent";
import Lakh from "./Components/Lakh";
function App() {
  
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/+1" element={<Icdn />}></Route>
        <Route exact path="/+10"  element={<Ten />}></Route>
        <Route exact path="/+100" element={<Hund />}></Route>
        <Route exact path="/+500" element={<Five />}></Route>
        <Route exact path="/+1000" element={<Thous />}></Route>
        <Route exact path="/+10000" element={<Tent />}></Route>
        <Route exact path="/+100000" element={<Lakh />}></Route>
        <Route exact path="/about" element={<About />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
