import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";



function App() {
  return (
    <div className="App">
   
      <Navbar />
      <About />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
     
    </div>
 
  );
}

export default App;
