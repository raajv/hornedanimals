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
      <Modal show={this.props.show} onHide={this.handleClose} animation={false}size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{this.props.featuredBeast.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body><img src={this.props.featuredBeast.image_url}className="img-fluid"/></Modal.Body>
        <Modal.Footer>
          {this.props.featuredBeast.description}
        </Modal.Footer>
    </Modal>
  </>
    )
  }
}