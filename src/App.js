import React, { Component } from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import Horneddata from './data.json'
import 'bootstrap/dist/css/bootstrap.min.css';
import SelectedBeast from './selectedbeasts.js';
export default class App extends Component {
  constructor(props){
    super(props);
      this.state= {show:false,
      featuredBeast :{}}
    }
    hideModal =() =>{
      this.setState({show:false});
    }
    showModal = () =>{
      this.setState({show:true});
    }
    updateBeast =(beast)=>{
      this.setState({
        featuredBeast : beast
      })
        this.showModal();
      
    }
  render() {
    return (
      
      
      <div  style={{
        backgroundColor: '#1E90FF'}}>
        
        
        <Header/>
        <Main updateBeast={this.updateBeast} hornedData={Horneddata}/>
        <SelectedBeast featuredBeast={this.state.featuredBeast} show={this.state.show} hideModal={this.hideModal}showModal={this.showModal}/>
        <Footer/>
      </div>
    )
  }
}