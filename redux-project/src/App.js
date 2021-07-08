import React from 'react';

import './App.css';
import Header from './components/Header';
import JokesList from './components/JokesList';
import Comic from './components/Comic';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <JokesList />
      <Comic />
      <Footer />
    </div>
  );
}

export default App;
