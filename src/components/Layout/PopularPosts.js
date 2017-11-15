import React, { Component } from 'react';
import Modal from 'react-responsive-modal';
import {Row, Col, Input, Button, Icon} from 'react-materialize';


import './PopularPosts.css';

class PopularPosts extends Component {

  contructor() {
      
  }

  state = {
    openFirstModal: false,
    openSecondModal: false,
  };

  onOpenFirstModal = () => {
    this.setState({ openFirstModal: true });
  };

  onCloseFirstModal = () => {
    this.setState({ openFirstModal: false });
  };

  onOpenSecondModal = () => {
    this.setState({ openSecondModal: true });
  };

  onCloseSecondModal = () => {
    this.setState({ openSecondModal: false });
  };

  render() {
    const { openFirstModal, openSecondModal } = this.state;
    const style = {
      content: {
        width: '40%',        
      }
    };
    return (
      <div>          
          <span><a style={{color: "#424242", padding: "20px"}} onClick={this.onOpenSecondModal} href="#">Sign Up</a></span>
          <span><a style={{color: "#424242", padding: "20px"}} onClick={this.onOpenFirstModal} href="#">Log In</a></span>
          <Modal open={openFirstModal} onClose={this.onCloseFirstModal} little>
            <Row>
              <h4>Log in to continue</h4>
            </Row>
            <Row>
              <Input s={12} m={12} label="Email Address" ><Icon>email</Icon></Input>
              <Input s={12} m={12} label="Password" ><Icon>lock_outline</Icon></Input>              
            </Row>
            <Row>
              <span style={{color: "#424242"}}>Remember me</span>
            </Row>
            <Row>
              <Button waves='light' style={{width: "500px"}}>Log in</Button>
            </Row>
            <Row style={{textAlign: "center"}}>
              <span><a href="#">forgot password?</a></span>
            </Row>
          </Modal>
          <Modal open={openSecondModal} onClose={this.onCloseSecondModal} little>
            <Row>
              <h4>Sign Up</h4>
            </Row>
            <Row>
              <Input s={12} m={12} label="Email Address" ><Icon>email</Icon></Input>
              <Input s={12} m={12} label="First Name" ><Icon>person</Icon></Input> 
              <Input s={12} m={12} label="Last Name" ><Icon>person</Icon></Input>
              <Input s={12} m={12} label="Password" ><Icon>lock_outline</Icon></Input>              
            </Row>
            <Row style={{textAlign: "center"}}>
              <Button waves='light' style={{width: "500px"}} >Sign Up</Button>
            </Row>
          </Modal>
          {/* <span><a style={{color: "#424242", padding: "20px"}} href="#">Log Out</a></span> */}

          
          <h1>Popular Posts</h1>
      </div>
    );
  }
}

export default PopularPosts;