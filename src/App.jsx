import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/pages/Home";
import Projects from "./components/pages/Projects";
import Skills from "./components/pages/Skills";
import "./App.styles.css";
import About from "./components/pages/About";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className="page-content">
        <Routes>
          <Route exact path="" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/skills" element={<Skills />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;