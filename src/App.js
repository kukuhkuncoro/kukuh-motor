import Navbar from './components/navbar';
import React from 'react';
import Home from './components/home';

function App() {
  return (
    <React.Fragment>
      <div className="inline-block align-middle w-full h-screen bg-cover bg-center bg-[url('./assets/Mechanics.jpg')]">
        <Navbar />
        <Home />
      </div>
    </React.Fragment>
  );
}

export default App;
