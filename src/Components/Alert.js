import React,{ useState } from 'react';
import { Alert } from 'react-bootstrap';

const AlertMessage = ({idx, variant, message}) => {
  const [show, setShow] = useState(true);

  return (
    <div>
      {show && 
      <Alert key={idx} variant={variant} onClose={() => setShow(false)} dismissible>
        {message}
      </Alert>}
    </div>
  )
}

AlertMessage.defaultProps = {
    variant: 'success',
    message: 'This is an alert'
}

export default AlertMessage
