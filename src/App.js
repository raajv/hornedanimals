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
      featuredBeast :{},
      allHorns : Horneddata,
    }}
    
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

  handleHorn =(selection) =>{
    let updatedHornArray
        
    if (selection === "1"){
          updatedHornArray = Horneddata.filter(i=>i.horns===1);
          this.setState ({allHorns : updatedHornArray})
    }else if (selection === "2"){
            updatedHornArray = Horneddata.filter(i=>i.horns===2);
            this.setState ({allHorns : updatedHornArray})
    }else if (selection === "3"){
              updatedHornArray = Horneddata.filter(i=>i.horns===3);
              this.setState ({allHorns : updatedHornArray})
    }else if (selection === "morethan3"){
                updatedHornArray = Horneddata.filter(i=>i);
                this.setState ({allHorns : updatedHornArray})
    }
  };
       
  render() {
    return (
      <div  style={{
        backgroundColor: '#1E90FF'}}>
        <Header beastData ={this.handleHorn}  />
        <Main updateBeast={this.updateBeast} hornedData={this.state.allHorns}/>
        <SelectedBeast featuredBeast={this.state.featuredBeast} show={this.state.show} hideModal={this.hideModal}showModal={this.showModal}/>
        <Footer/>
      </div>
    )
  }
}