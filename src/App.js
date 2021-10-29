import React, { Component } from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import Horneddata from './data.json'
import 'bootstrap/dist/css/bootstrap.min.css';
import SelectedBeast from './selectedbeasts.js';

let data = Horneddata.map(beast=>beast= beast.horns)


export default class App extends Component {
  
  constructor(props){
    super(props);
      this.state= {show:false,
      featuredBeast :{},
      allHorns : data,
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

      newbeast = ()=>{
        let newBeast= {};
       let  newData={}
       newData=  Horneddata.includes(this.state.allHorns)
       newBeast.push({newData});
        return newBeast;}
        
      handleHorn =(e) =>{
        let selection = e.target.value;
        let updatedHornArray
        let newBeast= {};
          let  newData={}
      if (selection === "1"){
          updatedHornArray = data.filter(horns=>horns===1);
          this.setState ({allhorns : updatedHornArray})
          newData=  Horneddata.includes(this.state.allHorns)
          newBeast.push({newData});
         return newBeast;
        }
          
          else if (selection === "2"){
            updatedHornArray = data.filter(horns=>horns===2);
            this.setState ({allhorns : updatedHornArray})
            newData=  Horneddata.includes(this.state.allHorns)
          newBeast.push({newData});
         return newBeast;
            }
          else if (selection === "3"){
              updatedHornArray = data.filter(horns=>horns===3);
              this.setState ({allhorns : updatedHornArray})
              newData=  Horneddata.includes(this.state.allHorns)
          newBeast.push({newData});
         return newBeast;
              }
          else if (selection === "more than 3"){
                updatedHornArray = data.filter(horns=>horns>3);
                this.setState ({allhorns : updatedHornArray})
                newData=  Horneddata.includes(this.state.allHorns)
          newBeast.push({newData});
         return newBeast;
          }
          
        };
       
        render() {
    return (
      
      
      <div  style={{
        backgroundColor: '#1E90FF'}}>
        <Header beastData ={this.handleHorn} hornNumb ={this.state.allHorns} newBeast={this.newBeast}/>
        <Main updateBeast={this.updateBeast} hornedData={Horneddata}/>
        <SelectedBeast featuredBeast={this.state.featuredBeast} show={this.state.show} hideModal={this.hideModal}showModal={this.showModal}/>
        <Footer/>
      </div>
    )
  }
}