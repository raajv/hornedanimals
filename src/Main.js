import {Component} from 'react'
import Hornedbeasts from './Hornedbeasts'
import Horneddata from './data.js'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
class Main extends Component {
 
  
  render(){
    return(
      <>
    
      <h3>Horned Beast</h3>
      <Container>
        <Row sm={3}>
      {Horneddata.map(beast => 
        <Hornedbeasts beast={beast}/>
    )}
    </Row>
      </Container>
      </>
    )
  }
}
export default Main;