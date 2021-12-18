import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { useContext, Fragment } from 'react';
import alertContext from '../context/alert/alertContext';
import spinner from '../../images/spinner.gif';

function CustomSpinner() {
  const AlertContext = useContext(alertContext);
  const { loading } = AlertContext;
  return (
    <Fragment>
      {loading && (
        <Col className='m-auto col-1'>
          <Image src={spinner} fluid className='text-end' />
        </Col>
      )}
    </Fragment>
  );
}

export default CustomSpinner;
