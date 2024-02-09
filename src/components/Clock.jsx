import React, { useState, useEffect } from 'react';
import '../App.scss';

const Clock = () => {
  const [time, setTime] = useState(getFormattedTime());
  const [colonVisible, setColonVisible] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(getFormattedTime());
      setColonVisible((prevVisible) => !prevVisible); 
    }, 1000);

    return () => clearInterval(intervalId); 
  }, []);

  function getFormattedTime() {
    const currentTime = new Date();
    const hours = currentTime.getHours().toString().padStart(2, '0');
    const minutes = currentTime.getMinutes().toString().padStart(2, '0');

    return `${hours}:${minutes}`;
  }

  return (
    <div className="clock">
      {time.split('').map((char, index) => (
        <span key={index} className={char === ':' && !colonVisible ? 'hidden' : ''}>
          {char}
        </span>
      ))}
    </div>
  );
};

export default Clock;
