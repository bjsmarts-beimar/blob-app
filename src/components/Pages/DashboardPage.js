import React, { Component } from 'react';
import {Row, Col} from 'react-materialize';
import Sidebar from '../Layout/Sidebar';
import PopularPosts from '../Layout/PopularPosts.js';
import Footer from '../Layout/Footer'

import './Style.css';

class DashboardPage extends Component {

  contructor() {
      
  }

  render() {
    return (
      <div>          
          <Row>
	          <Col s={12} m={9} >
              <Sidebar />  
              <div className="workarea">
                <h1>Dashboard Page</h1>
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

export default DashboardPage;