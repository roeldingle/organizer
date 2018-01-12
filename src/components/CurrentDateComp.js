import React, { Component } from 'react';
import { Card, CardText, CardBody, CardTitle, CardSubtitle} from 'reactstrap';

class CurrentDateComp extends Component {

  constructor() {
    super();
    var today = new Date(),
        date = today.toLocaleString("en", { weekday: "long" }) + ', ' +
        today.toLocaleString("en", { day: "numeric" }) + ' ' +
        today.toLocaleString("en", { month: "long"  }) + ' ' +
        today.toLocaleString("en", { year: "numeric"});

    this.state = {
        date: date,
        time: new Date().toLocaleTimeString()
    };
  }
  tick() {
    this.setState({
      time: new Date().toLocaleTimeString()
    });
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return (
      <Card inverse color="danger">
        <CardBody>
          <CardTitle>{this.state.date}</CardTitle>
          <CardSubtitle style={{fontSize: '20px'}}>{this.state.time}</CardSubtitle>
        </CardBody>
      </Card>
    );
  }
}

export default CurrentDateComp;
