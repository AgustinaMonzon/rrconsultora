import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import AboutSabrina from "./Components/AboutUs/AboutSabrina/AboutSabrina";
import AboutNahir from "./Components/AboutUs/AboutNahir/AboutNahir";
import Services from "./Components/Services/Services";
import Contact from "./Components/Contact/Contact";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutSabrina" element={<AboutSabrina />} />
        <Route path="/aboutNahir" element={<AboutNahir />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
