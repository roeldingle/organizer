import React from 'react';
import { Card, CardTitle, CardText, CardBody} from 'reactstrap';

const Section = (props) => {
    return (
      <Card id={props.name} className={props.name}>
        <CardBody>
          <CardTitle>{props.title}</CardTitle>
          <CardText>
            {props.children}
          </CardText>
        </CardBody>
      </Card>
    );
  };

export default Section;
