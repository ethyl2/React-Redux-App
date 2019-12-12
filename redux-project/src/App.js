import React from 'react';

import './App.css';
import Header from './components/Header';
import JokesList from './components/JokesList';
import Comic from './components/Comic';

function App() {
  return (
    <div className="App">
      <Header />
      <JokesList />
      <Comic />
    </div>
  );
}

export default App;
