import React, { useState } from 'react'

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
    <div>
      <form onSubmit={updateHandler}>
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
        <button type='submit'>Update</button>
      </form>
    </div>
  )
}

export default UpdateEmployee
