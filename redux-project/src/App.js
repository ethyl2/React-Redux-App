import React from 'react';

import './App.css';
import Header from './components/Header';
import JokesList from './components/JokesList';

function App() {
  return (
    <div className="App">
      <Header />
      <JokesList />
    </div>
  );
}

export default App;
