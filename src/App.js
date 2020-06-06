import React from 'react';
import './App.css';
import './style.css'

function App({name, age}) {
  return (
    <div className="text">
      <h1>{name}</h1>
      <h1>{age-1}</h1>
    </div>
  );
}

export default App;
