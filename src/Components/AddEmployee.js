import React, { useState } from 'react'

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
    <div>
      <form onSubmit={callAdd}>
        <input
          type='text'
          placeholder='Enter name'
          id='name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          type='text'
          placeholder='Enter email'
          id='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type='text'
          placeholder='Enter designation'
          id='designation'
          value={designation}
          onChange={(e) => setDesignation(e.target.value)}
        />
        <br />
        <input
          type='number'
          placeholder='Enter salary'
          id='salary'
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
        />
        <br />
        <button type='submit'>Add</button>
      </form>
    </div>
  )
}

export default AddEmployee
