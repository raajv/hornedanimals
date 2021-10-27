import React ,{Component} from 'react'
import Main from './Main';

class Hornedbeasts extends Component{
  // constructor(props){
  //   super(props);
  //     this.state= {noOfClicks : 0};
  //   }
    
  render(){
    return (
      <>
      <h2>{this.props.title}</h2>
     {this.props.imgurl}
      <p>{this.props.description}</p>
      <p>no of facourites : {this.props.click}</p>
      </>
    )
  }
}
export default Hornedbeasts