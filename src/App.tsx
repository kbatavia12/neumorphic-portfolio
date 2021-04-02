import React, { useState } from 'react';
import './App.css'
import MainScreen from './Screen/MainScreen';
import { ScreenType, ScreenContext } from './ScreenContext';


function App() {
  const [screen, setScreen] = useState(ScreenType.home)


  return (
    <ScreenContext.Provider value={{ screen, setScreen }} >
      <div className="App" >
        <MainScreen />
      </div>
    </ScreenContext.Provider>
  );
}

export default App;
