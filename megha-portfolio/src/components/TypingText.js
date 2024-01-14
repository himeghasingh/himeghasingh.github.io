// TypingText.js
import React, { useState, useEffect } from 'react';
import handWave from '../assets/handWave.png';
const TypingText = () => {
  const [text, setText] = useState('');
  const fullText = "Hello, I'm Megha!👋";

  useEffect(() => {
    let animationFrameId;
    let index = 0;

    const typeText = (timestamp) => {
      if (!animationFrameId) {
        animationFrameId = timestamp;
      }

      const elapsed = timestamp - animationFrameId;

      if (elapsed > 100) { // Adjust the typing speed here (50 milliseconds in this example)
        setText(fullText.substring(0, index));
        index++;

        animationFrameId = timestamp;
      }

      if (index <= fullText.length) {
        requestAnimationFrame(typeText);
      }
    };

    requestAnimationFrame(typeText);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <h3 className="text-md sm:text-4xl font-bold text-white">{text}</h3>
  );
};

export default TypingText;
