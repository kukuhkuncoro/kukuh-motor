import Navbar from './components/navbar';
import React from 'react';
import Home from './components/home';
import Info from './components/info';

function App() {
  return (
    <React.Fragment>
      <div className="align-middle w-full h-[480px] bg-cover bg-center bg-[url('./assets/Mechanics.jpg')]">
        <Navbar />
        <Home />
      </div>
      <Info />
    </React.Fragment>
  );
}

export default App;
