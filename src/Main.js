import {Component} from 'react'
import SelectedBeast from './selectedbeasts.js'
import Hornedbeasts from './Hornedbeasts'
import Horneddata from './data.json'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'



class Main extends Component {
 

render(){
    return(
      <div >
    
      <h3>Horned Beast</h3>
      <Container fluid className="text-center">
        <Row sm={3}className="justify-content-md-center">
          {Horneddata.map(beast => 
          <Hornedbeasts beast={beast}/>
          )}
        </Row>
      
      {Horneddata.map(beast => 
          <SelectedBeast beast={beast}/>
      )}
      </Container >
      </div>
    )
  }
}
export default Main;