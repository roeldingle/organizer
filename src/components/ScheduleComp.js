import React, { Component } from 'react';
import * as Helper from '../Helper';
import {
  Card, CardBody, CardTitle, CardSubtitle, Badge,
  Button, Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';

import AddTaskModalComp from './AddTaskModalComp';

class ScheduleComp extends Component {

  constructor(props) {
    super(props);
    const weekdays = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri'];
    this.state = {
      weekdays,
      modal: {
        toggle: false
      },
      data: []
    };

    this.toggle = this.toggleModal.bind(this);
  }

  clickAddTask = () => {
    this.setState({
      modal: {
        toggle: !this.state.modal.toggle,
        title: 'Add Task'
      }
    });
  }

  toggleModal(modal) {
    this.setState({
      modal: !modal
    });
  }

  render() {

    var today = new Date(),
        currentWeekDay = today.toLocaleString("en", { weekday: "short" })

    return (
      <div>
      <Card>
        <CardBody>
          <CardTitle>
            Schedule
            <Button onClick={this.clickAddTask} style={{float: 'right'}} color="primary" outline>
              Add Task
            </Button>
          </CardTitle>


            <div className="row schedule-container">
                {
                  this.state.weekdays.map((weekday, key) => {
                      return <div className="col">
                        <h5>{weekday}</h5>
                        <Card className={(weekday == currentWeekDay) ? 'active' : ''} >
                          <CardBody>
                            <CardTitle>31</CardTitle>
                            <ul>
                              <li>
                                <a href="#" onClick={this.toggleModal}>
                                  Hunter monthly support
                                </a>
                              </li>
                              <li>
                                <a href="#" onClick={this.toggleModal}>
                                  Level 10 meeting
                                </a>
                              </li>
                              <li>
                                <a href="#" onClick={this.toggleModal}>
                                  Hunter monthly support
                                </a>
                              </li>
                              <li>
                                <a href="#" onClick={this.toggleModal}>
                                  Level 10 meeting
                                </a>
                              </li>
                            </ul>
                          </CardBody>
                        </Card>
                        </div>
                  })
                }
            </div>
        </CardBody>
      </Card>

      <AddTaskModalComp data={this.state} toggleModal={this.toggleModal.bind(this)}/>


      </div>
    );
  }
}

export default ScheduleComp;
