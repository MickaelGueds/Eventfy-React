import React from 'react';
import { AnimationBackground } from './components/AnimationLogin/AnimationBackground';
import './App.css';
import Login from './components/Paginas/Login/Login';
import AppRoutes from './routes';

function App() {
  return (
    <div>
      <div className="App">
      <div className="backgroundAnimation">
        <AnimationBackground/>
      </div>
      
      <Login />
    </div> 
      <AppRoutes/>

    </div>
  );
}

export default App;