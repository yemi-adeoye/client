import React, { useContext } from 'react';
import Alert from 'react-bootstrap/Alert';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import AlertContext from '../context/alert/alertContext';

const CustomAlert = ({ onClose }) => {
  const alertContext = useContext(AlertContext);

  return (
    alertContext.alerts.length > 0 &&
    alertContext.alerts.map((alert, count) => {
      return (
        <Row key={'a' + count}>
          <Alert variant={alert.type} className='fade' onClose={onClose}>
            {alert.msg}
            <Button
              variant='outline-secondary'
              style={{ float: 'right' }}
              id={alert.id}
              onClick={onClose}
            >
              X
            </Button>
          </Alert>
        </Row>
      );
    })
  );
};
export default CustomAlert;
