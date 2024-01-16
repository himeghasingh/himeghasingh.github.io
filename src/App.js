// App.jsx
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Education from './components/Education';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading delay (replace with actual loading logic if needed)
    setTimeout(() => {
      setIsLoaded(true);
    }, 1000); // 1000 milliseconds = 1 second
  }, []);

  return (
    <div>
      <div className="fixed top-0 left-0 w-full h-20 px-4 text-white bg-black z-50">
        <NavBar />
      </div>
      <div className={`fade-in-container transition-opacity duration-1000 ease-in-out transform ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/education" element={<Education />} />
          {/* Add other routes/components here */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
