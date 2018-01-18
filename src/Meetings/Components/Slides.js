import React, { Component } from 'react';
import {
  Card, CardText, CardBody, CardTitle, CardFooter, Button,
  Form, FormGroup, Col, FormText, Label, Input
} from 'reactstrap';

import Section from '../Components/Section';

class Slides extends Component {
  state = {
    current_slide: 1
  }

  handleScroll = (sections) => {
    const arr_sections = Array.prototype.slice.call(sections);
    if(arr_sections){
      let section = arr_sections[this.state.current_slide - 1];
      document.getElementById(section.id).scrollIntoView();
    }
  }

  nextSlide = () => {
    var current_slide = this.state.current_slide;
    const sections = document.getElementById('section-container').children;

    if(current_slide < sections.length){
      let new_slide_index = this.state.current_slide += 1;
      this.setState({
        current_slide: new_slide_index
      });
      this.handleScroll(sections);
    }

  }

  prevSlide = () => {
    var sections = document.getElementById('section-container').children;
    var limit = 1;

    if(this.state.current_slide > 1){
      let new_slide_index = this.state.current_slide -= 1;
      this.setState({
        current_slide: new_slide_index
      });
      this.handleScroll(sections);
    }

  }
  render() {

    return (
      <Card>
        <CardBody>
          <CardTitle>{this.props.title}</CardTitle>
          <hr />
          <Form>
            <CardText id="section-container" className="section-container">

                <Section name="welcome" title="">
                  <h2>Emman</h2>
                  <h3>Level 10 one on one</h3>
                </Section>

                <Section  name="agenda" title="Agenda">
                  <ul>
                    <li><span>&raquo;</span> Good news!</li>
                    <li><span>&raquo;</span> Reporting: Scorecard</li>
                    <li><span>&raquo;</span> Review: Team Rocks</li>
                    <li><span>&raquo;</span> Review: Personal Rocks</li>
                    <li><span>&raquo;</span> Review: Last weeks To-do</li>
                    <li><span>&raquo;</span> Headlines</li>
                    <li><span>&raquo;</span> IDS</li>
                    <li><span>&raquo;</span> This weeks To-do</li>
                    <li><span>&raquo;</span> Conclusion</li>
                    <li><span>&raquo;</span> Recap: Todos</li>
                    <li><span>&raquo;</span> Rate meeting</li>
                  </ul>
                </Section>

                <Section name="goodnews" title="Segue: Good News">

                    <FormGroup style={{width: "80%"}}>
                      <Label for="proffesional-goodnews">Proffesional Good News</Label>
                      <Input type="textarea" rows={3} name="proffesional-goodnews" />
                    </FormGroup>

                    <FormGroup>
                      <Label for="personal-goodnews">Personal Good News</Label>
                      <Input type="textarea" rows={3} name="personal-goodnews" />
                    </FormGroup>

                </Section>

                <Section name="scorecard" title="Reporting: Scorecard">
                  <FormGroup row>
                    <Label for="project-timelines" sm={6}>Project Timelines</Label>
                    <Col sm={3}>
                      <Input type="select" name="project-timelines" id="project-timelines">
                         <option>5</option>
                         <option>4</option>
                         <option>3</option>
                         <option>2</option>
                         <option>1</option>
                       </Input>
                      <FormText>No delays = 5</FormText>
                    </Col>
                    <Col sm={3}>
                      <Input type="select" name="project-timelines-ontrack" id="project-timelines-ontrack">
                       <option>YES</option>
                       <option>NO</option>
                     </Input>
                      <FormText>On-Track?</FormText>
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Label for="project-timelines" sm={6}>Client Satisfaction</Label>
                    <Col sm={3}>
                      <Input type="select" name="client-satisfaction" id="client-satisfaction">
                         <option>5</option>
                         <option>4</option>
                         <option>3</option>
                         <option>2</option>
                         <option>1</option>
                       </Input>
                      <FormText>Very happy = 5</FormText>
                    </Col>
                    <Col sm={3}>
                      <Input type="select" name="client-satisfaction-ontrack" id="client-satisfaction-ontrack">
                       <option>YES</option>
                       <option>NO</option>
                     </Input>
                      <FormText>On-Track?</FormText>
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Label for="team-dynamics" sm={6}>
                      Team Dynamics
                    </Label>
                    <Col sm={3}>
                      <Input type="select" name="team-dynamics" id="team-dynamics">
                         <option>5</option>
                         <option>4</option>
                         <option>3</option>
                         <option>2</option>
                         <option>1</option>
                       </Input>
                      <FormText>Great experience = 5</FormText>
                    </Col>
                    <Col sm={3}>
                      <Input type="select" name="team-dynamics-ontrack" id="team-dynamics-ontrack">
                       <option>YES</option>
                       <option>NO</option>
                     </Input>
                      <FormText>On-Track?</FormText>
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Label for="personal-rating" sm={6}>
                      Personal rating for the week
                    </Label>
                    <Col sm={3}>
                      <Input type="select" name="personal-rating" id="personal-rating">
                         <option>5</option>
                         <option>4</option>
                         <option>3</option>
                         <option>2</option>
                         <option>1</option>
                       </Input>
                      <FormText>Great week = 5</FormText>
                    </Col>
                    <Col sm={3}>
                      <Input type="select" name="personal-rating-ontrack" id="personal-rating-ontrack">
                       <option>YES</option>
                       <option>NO</option>
                     </Input>
                      <FormText>On-Track?</FormText>
                    </Col>
                  </FormGroup>

                </Section>


                <Section name="team-rocks" title="Review: Team Rocks">

                  <FormGroup row>
                    <Label sm={6}>
                      Average of four(4) NPS for dedicated team for this quarter
                    </Label>
                    <Col sm={2}>
                      <Input type="select" name="status">
                         <option>On-going</option>
                         <option>On-hold</option>
                         <option>Done</option>
                       </Input>
                       <FormText>Status</FormText>
                    </Col>
                    <Col sm={2}>
                      <Input type="select">
                       <option>100%</option>
                       <option>90%</option>
                       <option>80%</option>
                     </Input>
                       <FormText>Progress</FormText>
                    </Col>
                    <Col sm={2}>
                      <Input type="select">
                       <option>YES</option>
                       <option>NO</option>
                     </Input>
                       <FormText>On-track?</FormText>
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Label sm={6}>
                      Average of four(4) NPS for dedicated team for this quarter
                    </Label>
                    <Col sm={2}>
                      <Input type="select" name="status">
                         <option>On-going</option>
                         <option>On-hold</option>
                         <option>Done</option>
                       </Input>
                       <FormText>Status</FormText>
                    </Col>
                    <Col sm={2}>
                      <Input type="select">
                       <option>100%</option>
                       <option>90%</option>
                       <option>80%</option>
                     </Input>
                       <FormText>Progress</FormText>
                    </Col>
                    <Col sm={2}>
                      <Input type="select">
                       <option>YES</option>
                       <option>NO</option>
                     </Input>
                       <FormText>On-track?</FormText>
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Label sm={6}>
                      Average of four(4) NPS for dedicated team for this quarter
                    </Label>
                    <Col sm={2}>
                      <Input type="select" name="status">
                         <option>On-going</option>
                         <option>On-hold</option>
                         <option>Done</option>
                       </Input>
                       <FormText>Status</FormText>
                    </Col>
                    <Col sm={2}>
                      <Input type="select">
                       <option>100%</option>
                       <option>90%</option>
                       <option>80%</option>
                     </Input>
                       <FormText>Progress</FormText>
                    </Col>
                    <Col sm={2}>
                      <Input type="select">
                       <option>YES</option>
                       <option>NO</option>
                     </Input>
                       <FormText>On-track?</FormText>
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Label sm={6}>
                      Average of four(4) NPS for dedicated team for this quarter
                    </Label>
                    <Col sm={2}>
                      <Input type="select" name="status">
                         <option>On-going</option>
                         <option>On-hold</option>
                         <option>Done</option>
                       </Input>
                       <FormText>Status</FormText>
                    </Col>
                    <Col sm={2}>
                      <Input type="select">
                       <option>100%</option>
                       <option>90%</option>
                       <option>80%</option>
                     </Input>
                       <FormText>Progress</FormText>
                    </Col>
                    <Col sm={2}>
                      <Input type="select">
                       <option>YES</option>
                       <option>NO</option>
                     </Input>
                       <FormText>On-track?</FormText>
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Label sm={6}>
                      Average of four(4) NPS for dedicated team for this quarter
                    </Label>
                    <Col sm={2}>
                      <Input type="select" name="status">
                         <option>On-going</option>
                         <option>On-hold</option>
                         <option>Done</option>
                       </Input>
                       <FormText>Status</FormText>
                    </Col>
                    <Col sm={2}>
                      <Input type="select">
                       <option>100%</option>
                       <option>90%</option>
                       <option>80%</option>
                     </Input>
                       <FormText>Progress</FormText>
                    </Col>
                    <Col sm={2}>
                      <Input type="select">
                       <option>YES</option>
                       <option>NO</option>
                     </Input>
                       <FormText>On-track?</FormText>
                    </Col>
                  </FormGroup>


                  <FormGroup row>
                    <Label sm={6}>
                      Average of four(4) NPS for dedicated team for this quarter
                    </Label>
                    <Col sm={2}>
                      <Input type="select" name="status">
                         <option>On-going</option>
                         <option>On-hold</option>
                         <option>Done</option>
                       </Input>
                       <FormText>Status</FormText>
                    </Col>
                    <Col sm={2}>
                      <Input type="select">
                       <option>100%</option>
                       <option>90%</option>
                       <option>80%</option>
                     </Input>
                       <FormText>Progress</FormText>
                    </Col>
                    <Col sm={2}>
                      <Input type="select">
                       <option>YES</option>
                       <option>NO</option>
                     </Input>
                       <FormText>On-track?</FormText>
                    </Col>
                  </FormGroup>
                  
                </Section>

            </CardText>
          </Form>
        </CardBody>
        <CardFooter>
          <Button onClick={this.prevSlide} color="primary">&#171; Prev</Button>
          <Button onClick={this.nextSlide} color="primary" className="float-right">Next &#187;</Button>
        </CardFooter>

      </Card>
    );
  }
}

export default Slides;
