import React, { Component } from 'react';
import './header.css';
import logo from '../../assets/logo.png';

export default class header extends Component{


  render(){
    return(
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
    );
  }
}
