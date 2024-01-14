import React, { useState, useEffect } from 'react';
import NavBar from "./components/NavBar";
import About from "./components/About";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setIsLoaded(true);
    }, 1000); // Adjust the delay as needed

    return () => clearTimeout(timerId);
  }, []);

  return (
    <div className={`transition-opacity duration-1000 ease-in-out transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
      <NavBar />
      <About />
    </div>
  );
}

export default App;
