import React, { Component } from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';
<<<<<<< Updated upstream
import ProfileCard from './components/ProfileCard'
import CreditCard from './components/CreditCard/CreditCard'
import Timeline from './components/TimeLineCard/ProfileCard'
=======
import Plogin from './login/login';

>>>>>>> Stashed changes
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
              <Nav.Item className='mr-auto'>
          <Nav.Link href="/home" >Customize</Nav.Link>
          </Nav.Item>
        </Navbar>
        <header className="App-header">
        <br></br>
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
            <ProfileCard></ProfileCard>
            <br></br>
            <CreditCard></CreditCard>
            <br></br>
            <Timeline></Timeline>
          <p>
<<<<<<< Updated upstream
            {/* Edit <code>src/App.js</code> and save to reload. ! */}
=======
          
            <Plogin/>
            Edit <code>src/App.js</code> and save to reload. !
>>>>>>> Stashed changes
          </p>
          {/* <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> */}
        </header>
      </div>
    );
  }
}

export default App;
