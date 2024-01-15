import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import NavBar from './components/NavBar';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';

// Import other components as needed

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setIsLoaded(true);
    }, 1000);

    return () => clearTimeout(timerId);
  }, []);

  return (
    <div className={`transition-opacity duration-1000 ease-in-out transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
        <NavBar />
        <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/about" element={ <About />} />
        <Route path="/education" element={ <Education />} />
        <Route path="/experience" element={ <Experience />} />
        <Route path="/projects" element={ <Projects />} />
      </Routes>
    </div>
  );
}

export default App;
