import React ,{Component} from 'react'

class Hornedbeasts extends Component{
  render(){
    return (
      <>
      <h2>{this.props.title}</h2>
      <img src={this.props.imgurl} alt={this.props.name}/>
      <p>{this.props.description}</p>
      </>
    )
  }
}
export default Hornedbeasts