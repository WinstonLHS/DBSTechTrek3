import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';
import ProfileCard from './components/ProfileCard'
import CreditCard from './components/CreditCard/CreditCard'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/download.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            {'DBS'}
          </Navbar.Brand>
        </Navbar>
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
            <ProfileCard></ProfileCard>
            <br></br>
            <CreditCard></CreditCard>
          <p>
            Edit <code>src/App.js</code> and save to reload. !
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
