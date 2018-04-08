import React, { Component } from 'react';
import Nav from './Nav';
// import Footer from './Footer';
import './App.css';
import Footer from './Footer';
import Home from './Home';
import Login from './Login';
import Signup from "./Signup";


class App extends Component {
  render() {
    return (
      <div>
        <Nav/>
        <Home />
        <Footer />
      </div>
    );
  }
}

export default App;
