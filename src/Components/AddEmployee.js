import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const AddEmployee = ({ add, empId }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [designation, setDesignation] = useState('')
  const [salary, setSalary] = useState('')

  const callAdd = (e) => {
    e.preventDefault()
    const data = { id:empId, name, email, designation, salary }
    add(data)
    resetFields();
  }

  const resetFields = () => {
      setName('');
      setEmail('');
      setDesignation('');
      setSalary('');
  }
  return (
      <Form onSubmit={callAdd}>
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
        
        <Button variant="success" type="submit">Add</Button>
      </Form>
  )
}

export default AddEmployee
