import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import AboutSabrina from "./Components/AboutUs/AboutSabrina/AboutSabrina";
import AboutNahir from "./Components/AboutUs/AboutNahir/AboutNahir";
import SoyEmpresa from "./Components/SoyEmpresa/SoyEmpresa";
import SoyCandidato from "./Components/SoyCandidato/SoyCandidato";
import Contact from "./Components/Contact/Contact";
import AboutUs from "./Components/AboutUs/AboutUs";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/about-us" component={<AboutUs />} />>
        <Route path="/aboutSabrina" element={<AboutSabrina />} />
        <Route path="/aboutNahir" element={<AboutNahir />} />
        <Route path="/soyEmpresa" element={<SoyEmpresa />} />
        <Route path="/soyCandidato" element={<SoyCandidato />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
