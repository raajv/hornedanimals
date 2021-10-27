import React ,{Component} from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

class Hornedbeasts extends Component{
  constructor(props){
    super(props);
      this.state= {noOfClicks : 0};
    }
    
    handleClick =() =>{
      this.setState({noOfClicks : this.state.noOfClicks+1});
      console.log ('was clicked');
    }
  render(){
    return (
      <>
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={this.props.beast.image_url } alt={this.props.beast.title} />
  <Card.Body>
    <Card.Title>{this.props.beast.title}</Card.Title>
    <Card.Text>
    {this.props.beast.description}
    </Card.Text>
    <Button variant="primary" onClick={this.handleClick}>Favourite</Button>
    <p>No of favourites &#10084;&#65039;: {this.state.noOfClicks}</p>
  </Card.Body>
</Card>
     
      
      
      
      
      </>
    )
  }
}
export default Hornedbeasts