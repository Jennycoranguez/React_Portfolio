import React from 'react'
import { Link, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import About from "./components/About"
import Contact from "./components/Contact"
import Portfolio from './components/Portfolio'
import Resume from "./components/Resume"
import Footer from "./components/Footer"
import Home from "./components/Home"


function App() {

  return (
    <>
  
    
      <Header></Header>
      
      <Routes>
      
          <Route  exact path="/"  element={<Home/>} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/contact" element={<Contact />} />
       </Routes>
    </>
    
  );
}

export default App;
