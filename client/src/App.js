import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Nav from './Nav';
// import Footer from './Footer';
import './App.css';
import Footer from './Footer';
import Home from './Home';
import Login from './Login';
import Signup from "./Signup";
import Collections from './Collections';
import Profile from './Profile';
import BasicLayout from './BasicLayout';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav/>
          <Route exact path ='/' render={() => <Home />} />
          <Route path='/login' render={() => <Login />} />
          <Route path='/Signup' render={() => <Signup />} />
          <Route path='/collections' render={() => <Collections />} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
