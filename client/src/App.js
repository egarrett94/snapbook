import React, { Component } from 'react';
import Nav from './Nav';
// import Footer from './Footer';
import './App.css';
import Footer from './Footer';
import Home from './Home';
import Login from './Login';
import Signup from "./Signup";
import Collections from './Collections';
import Profile from './Profile';
import DogLayout from './DogLayout';

class App extends Component {
  render() {
    return (
      <div>
        <Nav/>
        <DogLayout />
        <Footer />
      </div>
    );
  }
}

export default App;
