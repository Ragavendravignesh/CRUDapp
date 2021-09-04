import React from 'react'

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
        <div key={id}>
          <h1>{item.name}</h1>
          <p>{item.email}</p>
          <p>{item.designation}</p>
          <p>{item.salary}</p>
          <button id={`btn-${id}`} onClick={() => deleteHandler(item.id)}>Delete</button>
          <button id={`btn-${id}`} onClick={() => updateHandler(item)}>Update</button>
        </div>
      ))}
    </div>
  )
}

export default Display
