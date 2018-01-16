import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup,Label , Input  } from 'reactstrap';

/*pull team members*/


const AddTaskModalComp = (props) => {
      return (<div>
        <Modal isOpen={props.data.modal.toggle} toggle={props.toggleModal} className={props.data.className}>
          <ModalHeader toggle={props.toggleModal}>{props.data.modal.title}</ModalHeader>
          <ModalBody>
              <FormGroup>
                <Label for="taskname">Task name</Label>
                <Input type="text" name="taskname" id="taskname" placeholder="Task name" />
              </FormGroup>
              <FormGroup>
                <Label for="assignto">Assign to</Label>
                <Input type="select" name="assignto" id="assignto">
                  <option value="0">-select-</option>
                  <option value="1">Roy Niepes</option>
                  <option value="2">Fritz Roca</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="startdate">Start date</Label>
                <Input type="date" name="startdate" id="startdate" placeholder="" />
              </FormGroup>
              <FormGroup>
                <Label for="startdate">End date</Label>
                <Input type="date" name="enddate" id="enddate" placeholder="" />
              </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={() => props.toggleModal()}>Save Task</Button>{' '}
            <Button color="secondary" onClick={() => props.toggleModal(props.data.modal)}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  };



export default AddTaskModalComp;
