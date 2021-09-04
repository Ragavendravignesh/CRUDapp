import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap';
 
const UpdateEmployee = ({empData, updateEmp}) => {
    const [name, setName] = useState(empData.name)
    const [email, setEmail] = useState(empData.email)
    const [designation, setDesignation] = useState(empData.designation)
    const [salary, setSalary] = useState(empData.salary);

const updateHandler = (e) => {
    e.preventDefault();
    const modifiedData = {id: empData.id, name, email, designation, salary};

    updateEmp(modifiedData);
}

  return (
      <Form onSubmit={updateHandler}>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Enter name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" value={name} onChange={e => setName(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Enter email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="designation">
          <Form.Label>Enter designation</Form.Label>
          <Form.Control type="text" placeholder="Enter designation" value={designation} onChange={e => setDesignation(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="salary">
          <Form.Label>Enter Salary</Form.Label>
          <Form.Control type="text" placeholder="Enter salary" value={salary} onChange={e => setSalary(e.target.value)}/>
        </Form.Group>
        
        <Button variant="success" type="submit">Update</Button>
      </Form>
  )
}

export default UpdateEmployee
