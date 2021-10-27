import {Component} from 'react'
import Hornedbeasts from './Hornedbeasts'
import Horneddata from './data.js'

class Main extends Component {
  constructor(props) {
    super(props);
    this.state={
      Horneddata ,noOfClicks:0}
  }

  handleClick =() =>{
    this.setState({noOfClicks : this.state.noOfClicks+1});
    console.log ('was clicked');
  }
  render(){
    return(
      <>
      <h3>Horned Beast</h3>
      <Hornedbeasts title={this.state.Horneddata.map(name=>{return name.title})} imgurl={this.state.Horneddata.map(img=>{return<img src={img.image_url} width={250} height = {250} onClick = {this.handleClick}/>})}  description={this.state.Horneddata.map(des=>{return des.description})}
      click={this.state.noOfClicks}/>
      
      </>
    )
  }
}
export default Main;