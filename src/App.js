import Navbar from './components/navbar';
import React from 'react';

function App() {
  return (
    <React.Fragment>
      <div className="w-full h-screen bg-cover bg-center bg-[url('./assets/Mechanics.jpg')]">
        <Navbar />
      </div>
    </React.Fragment>
  );
}

export default App;
