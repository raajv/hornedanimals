import { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
import BeastData from './data.json'
import ListGroup from 'react-bootstrap/ListGroup'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'




class Header extends Component{
 
  handleEvent=(e)=>{
   let selection =e.target.value;
   this.props.beastData(selection);
  };
  
  render(){
    return(
      <Navbar bg="dark" variant="dark"fixed="top">
        <Container>
          <Form>
             <Form.Select onChange={this.handleEvent} aria-label="Default select example">
              <option>Select number of horns</option>
              <option value="1">one</option>
              <option value="2">two</option>
              <option value="3">three</option>
              <option value="morethan3">more than three</option>
              </Form.Select>
           </Form>
       <Navbar.Brand href="#home">Horned Beasts</Navbar.Brand>
      </Container>
       </Navbar>
     )
  }
}
export default Header;