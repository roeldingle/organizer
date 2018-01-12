import React, { Component } from 'react';
import Header from './Header';
import Dashboard from './Dashboard';

class Main extends Component {
  render() {
    return (
      <div className="main container-fluid">
        <Header />
        <Dashboard />
      </div>
    );
  }
}

export default Main;
