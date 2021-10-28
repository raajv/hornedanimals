import {Component} from 'react'
import SelectedBeast from './selectedbeasts.js'
import Hornedbeasts from './Hornedbeasts'
import Horneddata from './data.json'
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
      {Horneddata.map(beast => 
          <SelectedBeast beast={beast}/>
      )}
      </>
    )
  }
}
export default Main;