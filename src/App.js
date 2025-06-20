import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navibar from "./components/Navbar";
import About from "./pages/About";
import Academics from "./pages/Academics";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import ContactAndCertifications from "./pages/ContactAndCertifications";
import "./App.css";
function App() {
  return (
    <Router>
      <div style={{ minHeight: "100vh", backgroundColor: "#14213d" }}>
        <Navibar />
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<ContactAndCertifications />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}


export default App;
