import React from 'react';
import "./index.css";
import "./App.css";
import Header from './components/Header';
import Carousel from './components/Carousel';

function App() {
  return (
    <div className="App">
      <Header styles={{ position: 'fixed', top: 0, left: 0 }} />
      <Carousel />
    </div>
  );
}

export default App;
