import React from 'react';

import './App.css';
import JokesList from './components/JokesList'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Awesome Programming Jokes</h1>
      </header>
      <JokesList />
    </div>
  );
}

export default App;
