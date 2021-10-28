import React ,{Component} from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import SelectedBeast from './selectedbeasts.js';

class Hornedbeasts extends Component{
  constructor(props){
    super(props);
      this.state= {noOfClicks : 0,
                    show:false
                  }
    }
    
    handleClick =() =>{
      this.setState({noOfClicks : this.state.noOfClicks+1});
      ;
    }

    handleClickSize = () =>{
      this.setState({show:true});
      console.log ('was clicked')
    }


    hideModal =() =>{
      this.setState({show:false});
    }



  render(){
    return (
      <>
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={this.props.beast.image_url }onClick={this.handleClickSize} alt={this.props.beast.title} />
  <Card.Body>
    <Card.Title>{this.props.beast.title}</Card.Title>
    <Card.Text>
    {this.props.beast.description}
    </Card.Text>
    <Button variant="primary" onClick={this.handleClick}>Favourite</Button>
    <p>No of favourites &#10084;&#65039;: {this.state.noOfClicks}</p>
  </Card.Body>
</Card>
     
      <SelectedBeast show={this.state.show} />
      
      
      
      </>
    )
  }
}
export default Hornedbeasts