import React, { Component } from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import Hornedbeasts from './Hornedbeasts.js';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends Component {
  
  render() {
    return (
      
      
      <div  style={{
        backgroundColor: '#1E90FF'}}>
        
        
        <Header/>
        <Main />
        <Footer/>
      </div>
    )
  }
}