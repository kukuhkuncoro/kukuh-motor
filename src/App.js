import Navbar from './components/navbar';
import React from 'react';
import Home from './components/home';
import Info from './components/info';
import Adventage from './components/adventage';
import Service from './components/service';

function App() {
  return (
    <React.Fragment>
      <div className="align-middle w-full bg-fixed h-[480px] bg-cover bg-center bg-[url('./assets/Mechanics.jpg')]">
        <Navbar />
        <Home />
      </div>
      <Info />
      <Service />
      <Adventage />
    </React.Fragment>
  );
}

export default App;
