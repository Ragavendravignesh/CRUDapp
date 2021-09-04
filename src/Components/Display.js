import React from 'react'
import { Card, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import './display.css';

const Display = ({ employee, deleteEmployee, updateEmployee}) => {
  const deleteHandler = (id) => {
      deleteEmployee(id);
  }

  const updateHandler = (data) => {
      updateEmployee(data)
  }
  return (
    <div>
      {employee.map((item, id) => (
        <Card style={{ width: '18rem' }} key={id} className="mt-3">
          <Card.Body>
            <Card.Title className="text-center">{item.name}</Card.Title>
            <Card.Subtitle className="mb-1 text-muted text-center">{item.email}</Card.Subtitle>
            <ListGroup className="list-group-flush">
              <ListGroupItem>Designation: {item.designation}</ListGroupItem>
              <ListGroupItem>Salary: {item.salary}</ListGroupItem>
            </ListGroup>
          </Card.Body>
          <Card.Footer>
          <Button variant="danger" id={`btn-${id}-delete`} onClick={() => deleteHandler(item.id)}>Delete</Button>
          <Button variant="primary" id={`btn-${id}-update`} onClick={() => updateHandler(item)} className="ml-2">Update</Button>
          </Card.Footer>
        </Card>
      ))}
    </div>
  )
}

export default Display
