import React, { Component } from 'react';
import { Card, CardText, CardBody, CardTitle, CardSubtitle} from 'reactstrap';

class TodoSummaryComp extends Component {

  render() {
    return (
      <Card>
        <CardBody>
          <CardTitle>{this.props.title}</CardTitle>
          <CardText>sdsds</CardText>
        </CardBody>
      </Card>
    );
  }
}

export default TodoSummaryComp;
