import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Col';
import { Fragment } from 'react';

const Home = () => {
  return (
    <Fragment>
      <Col style={{ color: '#ddd' }}>
        <h1 className='text-center banner m-4'>Your News</h1>
        <h3 className='text-center m-4'>
          ...get news from Nigerian dailies based on your interests
        </h3>
        <hr />
      </Col>
      <Row className='steps-container'>
        <Col className='step shadow p-4 m-4 text-center'>
          <span className='number'>1</span>
          <p className='m-4'>Enter your keywords based on your interests</p>
        </Col>
        <Col className='step shadow p-4 m-4 text-center'>
          <span className='number'>2</span>
          <p className='m-4'>
            Click on the Daily of your choice and wait for news to load.
          </p>
        </Col>
        <Col className='step shadow p-4 m-4 text-center'>
          <span className='number'>3</span>
          <p className='m-4'>
            Use the links on the right to help you navigate fetched news
          </p>
        </Col>
      </Row>
    </Fragment>
  );
};

export default Home;
