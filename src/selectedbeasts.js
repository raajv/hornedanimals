import {Component} from "react";
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"

export default class SelectedBeast extends Component{

handleShow=()=>{
this.props.handleClickSize();
}

handleClose=()=>{
  this.props.hideModal();
}

render(){
  return(
    <>
    <Button variant="primary" onClick={this.handleShow}>
      Launch demo modal
    </Button>

    <Modal show={this.props.show} onHide={this.handleClose} animation={false}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
      <Modal.Footer>
        
      </Modal.Footer>
    </Modal>
  </>
  )
}
}