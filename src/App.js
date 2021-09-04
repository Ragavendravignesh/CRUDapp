import React, { useState, useEffect, useCallback } from 'react'
import Axios from 'axios'
import Display from './Components/Display';
import AddEmployee from './Components/AddEmployee';
import UpdateEmployee from './Components/UpdateEmployee';

const App = () => {
  const [employee, setEmployee] = useState([])
  const [updateDetails, setUpdateDetails] = useState({})
  const [showUpdate, setShowUpdate] = useState(false);

  const add = useCallback(async (data) => {
    console.log(data)
    await Axios.post('http://localhost:3000/employee', data, {
      headers: {
        'Content-Type': 'application/json',
      }})
      getEmployee()
  })

  const deleteEmployee = useCallback(async (id) => {
    await Axios.delete(`http://localhost:3000/employee/${id}`)
    getEmployee()
  })

  const updateEmployee = (data) => {
    setUpdateDetails(data);
    setShowUpdate(true);
  }

  const updateEmp = useCallback(async (data) => {
    await Axios.put(`http://localhost:3000/employee/${data.id}`, data, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    getEmployee()
    setShowUpdate(false);
  })

  const getEmployee = useCallback(async () => {
    const response = await Axios.get('http://localhost:3000/employee')
    setEmployee(response.data)
  })

  useEffect(() => {
    getEmployee()
  }, [])

  return (
    <div>
      <Display
        employee={employee}
        deleteEmployee={deleteEmployee}
        updateEmployee={updateEmployee}
      />
      {showUpdate ? (
        <UpdateEmployee empData={updateDetails} updateEmp={updateEmp} />
      ):(
        <AddEmployee add={add} empId={employee.length + 1} />
      )
      }
    </div>
  )
}

export default App
