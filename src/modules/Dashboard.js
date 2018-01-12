import React, { Component } from 'react';

import AnnouncementComp from '../components/AnnouncementComp';
import ScheduleComp from '../components/ScheduleComp';
import TodoSummaryComp from '../components/TodoSummaryComp';

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard row">
          <div className="col-3 column-right">
            <TodoSummaryComp title="Todo this week" />
          </div>
          <div className="col column-mid">
            <AnnouncementComp />
            <ScheduleComp title="Schedule"/>
          </div>
      </div>
    );
  }
}
export default Dashboard;
