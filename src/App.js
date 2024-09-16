import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Me from "./components/AboutMe/moreMe";
import Intro from "./components/Intro/intro";
import Navbar from "./components/NavBar/navbar";
import Cv from "./components/Resume/cv";
import Sub from "./components/Subjects/subjects";




function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/components/Resume/cv" element={<Cv />} />
          <Route path="/components/AboutMe/moreMe" element={<Me />} />
          <Route path="/components/Subjects/subjects" element={<Sub />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;