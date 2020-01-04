import React from 'react';
// import './css/App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Tech from "./components/Tech";
import { TinyButton as ScrollUpButton } from "react-scroll-up-button";


function App() {
  return (
    <div>
      <Nav />
      <Home />
      <About />
      <Projects />
      <Tech />
      <Contact />
      <Footer />
      <ScrollUpButton />
    </div>
  );
}

export default App;
