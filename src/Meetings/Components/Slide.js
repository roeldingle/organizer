import React from 'react';
import { Card, CardText, CardBody, CardTitle, CardSubtitle} from 'reactstrap';

import SlideOne from './SlideContents/SlideOne';
import SlideTwo from './SlideContents/SlideTwo';

/*pull team members*/



const Slide = (props) => {


    return (
      <Card className={props.data.shortname}>
        <CardBody>
          <h5>{props.data.title}</h5>
          <CardText data={this.getSlideContent}>
            {this.getSlideContent}
            {
              (() => {
                switch(props.data.id) {
                    case 1:
                        return <SlideOne />;
                    case 2:
                      return <SlideTwo />;
                    default:
                        return null;
                  }
              })()
            }
          </CardText>
        </CardBody>
      </Card>
    );
  };



export default Slide;
