import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import About from "./sections/About";
import Work from "./sections/Work";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App" id="app">
      <Navbar />
      <About />
      <Work />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
