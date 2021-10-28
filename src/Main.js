import {Component} from 'react'
import Hornedbeasts from './Hornedbeasts'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'



class Main extends Component {
 

render(){
    return(
      <div >
    
      <h3>Horned Beast</h3>
      <Container fluid className="text-center">
        <Row sm={3}className="justify-content-md-center">
          {this.props.hornedData.map(beast => 
          <Hornedbeasts updateBeast={this.props.updateBeast} beast={beast}/>
          )}
        </Row>
      
      
      </Container >
      </div>
    )
  }
}
export default Main;