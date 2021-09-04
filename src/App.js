import React, { useState, useEffect, useCallback } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Axios from 'axios'
import Display from './Components/Display'
import AddEmployee from './Components/AddEmployee'
import UpdateEmployee from './Components/UpdateEmployee'
import { Container, Row, Col } from 'react-bootstrap'
import Alert from './Components/Alert'

const App = () => {
  const [employee, setEmployee] = useState([])
  const [updateDetails, setUpdateDetails] = useState({})
  const [showUpdate, setShowUpdate] = useState(false)
  const [showUpdateAlert, setShowUpdateAlert] = useState(false)
  const [showDeleteAlert, setShowDeleteAlert] = useState(false)
  const [showAddAlert, setShowAddAlert] = useState(false)

  const add = useCallback(async (data) => {
    console.log(data)
    await Axios.post('http://localhost:3000/employee', data, {
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(setShowAddAlert(true))
    getEmployee()
  })

  const deleteEmployee = useCallback(async (id) => {
    await Axios.delete(`http://localhost:3000/employee/${id}`).then(
      setShowDeleteAlert(true)
    )
    getEmployee()
  })

  const updateEmployee = (data) => {
    setUpdateDetails(data)
    setShowUpdate(true)
  }

  const updateEmp = useCallback(async (data) => {
    await Axios.put(`http://localhost:3000/employee/${data.id}`, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(setShowUpdateAlert(true))

    getEmployee()
    setShowUpdate(false)
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
      {showUpdateAlert && (
        <Alert
          variant='success'
          message='Employee details updated'
          idx='updateAlert'
        />
      )}
      {showDeleteAlert && (
        <Alert
          variant='success'
          message='Employee details deleted'
          idx='deleteAlert'
        />
      )}
      {showAddAlert && (
        <Alert
          variant='success'
          message='Employee details added'
          idx='addAlert'
        />
      )}
      <Container>
        <Row>
          <Col md={4} lg={4}>
            <Display
              employee={employee}
              deleteEmployee={deleteEmployee}
              updateEmployee={updateEmployee}
            />
          </Col>
          <Col >
            {showUpdate ? (
              <UpdateEmployee empData={updateDetails} updateEmp={updateEmp} />
            ) : (
              <AddEmployee add={add} empId={employee.length + 1} />
            )}
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default App
