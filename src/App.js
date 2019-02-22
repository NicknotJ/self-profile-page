import React, { Component } from 'react';
import './App.css';
import Home from './components/Home.js';
import AboutMe from './components/AboutMe.js';
import {Link, BrowserRouter as Router, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div role='container'>
        <header>
          <nav>
            <Link className="link" to="/">Home</Link>
            <Link className="link" to="/AboutMe">About Me</Link>
            <Link className="link" to="/Projects">Projects</Link>
            <Link className="link" to="/Contact">Contact Me</Link>
          </nav>
        </header>
        <div role='container'>
          <Route path="/" exact  component={Home}/>
          <Route path="/AboutMe" exact  component={AboutMe} />
        </div>
      </div>
    );
  }
}

export default App;

/* #DAFFEF #D0FFD6 #D5E2BC #A6979C #D3C0D2 */