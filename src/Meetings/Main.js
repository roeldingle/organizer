import React, { Component } from 'react';
import Header from '../modules/Header';
import TodoSummaryComp from '../components/TodoSummaryComp';

import Slides from './Components/Slides';

class Main extends Component {
  render() {
    return (
      <div className="main container-fluid">
        <Header />
        <div className="meetings row">
            <div className="col-3 column-right">
              <TodoSummaryComp title="Todo this week" />
            </div>
            <div className="col column-mid">
              <Slides title="Level 10 meeting" />
            </div>
        </div>
      </div>
    );
  }
}

export default Main;
