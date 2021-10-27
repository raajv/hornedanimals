import { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import { Container } from 'react-bootstrap';
class Header extends Component{
  render(){
    return(
      <Navbar bg="dark" variant="dark"fixed="top">
    <Container>
    <Navbar.Brand href="#home">Horned Beasts</Navbar.Brand>
    </Container>
  </Navbar>
      
    )
  }
}
export default Header;