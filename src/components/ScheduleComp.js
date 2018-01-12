import React, { Component } from 'react';
import * as Helper from '../Helper';
import {
  Card, CardBody, CardTitle, CardSubtitle, Badge,
  Button, Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';

class ScheduleComp extends Component {

  constructor(props) {
    super(props);
    const weekdays = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri'];
    this.state = {
      weekdays,
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
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
            <Button style={{float: 'right'}} color="primary" outline>
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
                                <a href="#" onClick={this.toggle}>
                                  Hunter monthly support
                                </a>
                              </li>
                              <li>
                                <a href="#" onClick={this.toggle}>
                                  Level 10 meeting
                                </a>
                              </li>
                              <li>
                                <a href="#" onClick={this.toggle}>
                                  Hunter monthly support
                                </a>
                              </li>
                              <li>
                                <a href="#" onClick={this.toggle}>
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


        <div>
          <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
            <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
            <ModalBody>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
              <Button color="secondary" onClick={this.toggle}>Cancel</Button>
            </ModalFooter>
          </Modal>
        </div>

      </div>
    );
  }
}

export default ScheduleComp;
