import { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
import BeastData from './data.json'
import ListGroup from 'react-bootstrap/ListGroup'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'




class Header extends Component{
 
  render(){
    return(
      <Navbar bg="dark" variant="dark"fixed="top">
    <Container>
      <Form>
      <Form.Select onChange={this.props.beastData} aria-label="Default select example">
            <option>Select a number filter</option>
            <option value="1">one</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="more than 3">more than 3</option>
     </Form.Select>
    </Form>
    <ListGroup>
          <ListGroup.Item>
          <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={this.props.newBeast.image_url } alt={this.props.newBeast.title} />
  <Card.Body>
    <Card.Title>{this.props.newBeast.title}</Card.Title>
    <Card.Text>
    {this.props.newBeast.description}
    </Card.Text>
    
  </Card.Body>
</Card>
          </ListGroup.Item>
        </ListGroup>
    <Navbar.Brand href="#home">Horned Beasts</Navbar.Brand>
    </Container>
  </Navbar>
      
    )
  }
}
export default Header;