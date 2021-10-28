import {Component} from "react";
import Modal from "react-bootstrap/Modal"


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
   

    <Modal show={this.props.show} onHide={this.handleClose} animation={false}size="lg"
        >
      <Modal.Header closeButton>
        <Modal.Title>{this.props.beastselect}</Modal.Title>
      </Modal.Header>
      <Modal.Body><img src={this.props.beastimg}className="img-fluid"/></Modal.Body>
      <Modal.Footer>
        {this.props.beastdes}
      </Modal.Footer>
    </Modal>
  </>
  )
}
}