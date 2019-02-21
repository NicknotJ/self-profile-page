import React, { Component } from 'react';
import './App.css';
import Home from './components/Home.js';
import AboutMe from './components/AboutMe.js';

class App extends Component {
  render() {
    return (
      <div role='container'>
        <header>
          <a>Home</a>
          <a>About Me</a>
          <a>Projects</a>
          <a>Contact Me</a>
        </header>
        <div role='container'>
          <AboutMe />
        </div>
      </div>
    );
  }
}

export default App;

/* #DAFFEF #D0FFD6 #D5E2BC #A6979C #D3C0D2 */