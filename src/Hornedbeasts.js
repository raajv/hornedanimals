import React ,{Component} from 'react'

class Hornedbeasts extends Component{
  render(){
    return (
      <>
      <h2>{this.props.title}</h2>
      <img src={this.props.imgurl}/>
      <p>{this.props.description}</p>
      </>
    )
  }
}
export default Hornedbeasts