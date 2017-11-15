import React, { Component } from 'react';
import {Row, Col, Modal, Button} from 'react-materialize';
import Sidebar from '../Layout/Sidebar';
import PopularPosts from '../Layout/PopularPosts.js';
import Footer from '../Layout/Footer'

import './Style.css';

class HomePage extends Component {

  contructor() {
      
  }

  render() {
    return (
      <div>          
          <Row>
	          <Col s={12} m={9} >
              <Sidebar />  
              <div className="workarea">
                <h1>Welcome to my Blog</h1>
                
                
              </div>
            </Col>
	          <Col s={12} m={3}>
              <PopularPosts />  
            </Col>
          </Row>
          <Row>
            <Col s={12} >
              <Footer />
            </Col>
          </Row>                          
      </div>
    );
  }
}

export default HomePage;