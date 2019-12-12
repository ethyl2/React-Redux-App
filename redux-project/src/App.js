import React from 'react';

import './App.css';
import JokesList from './components/JokesList'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Get Jokes
      </header>
      <JokesList />
    </div>
  );
}

export default App;
