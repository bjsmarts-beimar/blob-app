import React, { Component } from 'react';
import {Row, Col} from 'react-materialize';
import { Redirect } from "react-router-dom";
import Sidebar from '../Layout/Sidebar';
import PopularPosts from '../Layout/PopularPosts.js';
import Footer from '../Layout/Footer';
import Header from '../Layout/Header';
import AuthService from '../../services/AuthService';

import './Style.css';

class HomePage extends Component {

  constructor(props) 
  {
    super(props);
    this.Auth = new AuthService();

    this.state = {
      loggedIn : this.Auth.loggedIn()      
    }
    
  }  

  render() {
    
    return (
      <div>       
          <Row className="right-align" >
              <Header parentProps={this.props}/>
          </Row>                       
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