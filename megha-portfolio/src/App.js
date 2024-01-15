import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import NavBar from './components/NavBar';
import About from './components/About';
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
        {/* Add more routes for other components as needed */}
      </Routes>
    </div>
  );
}

export default App;
