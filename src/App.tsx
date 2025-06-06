import React from 'react';
import { Scene } from './components/Scene';
import { Toolbar } from './components/Toolbar';

function App() {
  return (
    <div className="w-full h-screen relative">
      <Scene />
      <Toolbar />
    </div>
  );
}

export default App;