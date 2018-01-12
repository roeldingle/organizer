import React, { Component } from 'react';
import { Card, CardText, CardBody, CardTitle, CardSubtitle} from 'reactstrap';

class UserComp extends Component {

    state = {
      name: this.props.data.name,
      position: this.props.data.position,
      avatar: this.props.data.avatar
    }

  render() {
    return (
      <Card inverse color="primary">
        <CardBody>
          <img src={this.state.avatar} className="user-avatar" />
          <CardTitle>{this.state.name}</CardTitle>
          <CardSubtitle>{this.state.position}</CardSubtitle>
        </CardBody>
      </Card>
    );
  }
}

export default UserComp;
