import React, { Component,useState, useEffect } from 'react';

const Tick = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
        setTime(time => new Date().toLocaleTimeString());
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
      It is {time} now.
      </header>
    </div>
  );
};

export default Tick;
