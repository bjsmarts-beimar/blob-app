import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";

import './Main.css';

import HomePage from './Pages/HomePage';
import ReactPage from './Pages/ReactPage';
import DashboardPage from './Pages/DashboardPage';

class Main extends Component {

  constructor() {
    super();
    
  }

  render() {
    return (
      <div>
          <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route path='/react' component={ReactPage}/>                                         
            <Route path='/dashboard' component={DashboardPage} />
          </Switch>        
      </div>
    );
  }
}

export default Main;