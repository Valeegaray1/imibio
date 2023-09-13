import React from 'react';
import Header from './components/principal/Header1';
import Inicio from './components/principal/Inicio';
import Portal from './components/principal/Portal';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header /> 
      <Inicio />
      <Portal />
    </div>
  );
}

export default App;
