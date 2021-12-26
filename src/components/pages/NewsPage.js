import { useState, useEffect, useContext } from 'react';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import News from '../ui/News';
import NewsNav from '../ui/NewsNav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import axios from 'axios';
import alertContext from '../context/alert/alertContext';
import CustomAlert from '../ui/CustomAlert';
import CustomSpinner from '../ui/CustomSpinner';

const NewsPage = () => {
  const { toggleLoading, setAlert, deleteAlert } = useContext(alertContext);

  const papers = [
    { key: 'blueprint', value: 'Blueprint' },
    { key: 'business-day', value: 'Business Day' },
    { key: 'business-hallmark', value: 'Business Hallmark' },
    { key: 'daily-independent', value: 'Daily Independent' },
    { key: 'daily-times', value: 'Daily Times' },
    { key: 'financial-energy-review', value: 'Financial Energy Review' },
    { key: 'guardian', value: 'Guardian' },
    { key: 'punch', value: 'Punch' },
    { key: 'premium-times', value: 'Premium Times' },
    { key: 'sweet-crude-reports', value: 'Sweet Crude Reports' },
    { key: 'sahara-reporters', value: 'Sahara Reporters' },
    { key: 'sun', value: 'The Sun' },
    { key: 'thisday', value: 'Thisday' },
    { key: 'tribune', value: 'Tribune' },
  ];

  const onClose = (e) => {
    deleteAlert(e.target.id);
  };
  const [stories, setStories] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const url = `https://evening-bastion-25872.herokuapp.com/news/business-hallmark`;
    toggleLoading(); // sets loading to true so that spinner shows until response

    axios
      .get(url)
      .then((res) => {
        toggleLoading();
        setStories(res.data);
      })
      .catch((err) => {
        toggleLoading();
        setAlert(
          'ooops...sorry couldnt fetch new right now. Try again later',
          'danger'
        );
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onclick = (e) => {
    e.preventDefault();
    window.scrollTo(0, 0);
    const paperTofetch = e.target.getAttribute('data-paper');
    const url = `https://evening-bastion-25872.herokuapp.com/news/${paperTofetch}`;
    toggleLoading();
    axios
      .get(url)
      .then((res) => {
        toggleLoading();
        setStories(res.data);
      })
      .catch((err) => {
        toggleLoading();
        setAlert(
          'ooops...sorry couldnt fetch new right now. Try again later',
          'danger'
        );
      });
  };

  const linkItems = papers.map((paper, count) => {
    return (
      <Nav.Link
        to='#'
        onClick={onclick}
        data-paper={paper.key}
        style={{ color: '#999' }}
        key={'a' + count}
      >
        {paper.value}
      </Nav.Link>
    );
  });
  return (
    <Container fluid>
      <CustomAlert onClose={onClose} />

      <Row className='container-news'>
        <Col className='side-nav m-0'>
          <Col className='fixed'>
            <Nav className='flex-column'>{linkItems}</Nav>
          </Col>
        </Col>
        <Col className='m-0 main'>
          <CustomSpinner />
          {stories.length > 0 ? (
            <News stories={stories} />
          ) : (
            <p>Click on a link on the left to display news</p>
          )}
        </Col>

        <Col className='m-0 aside'>
          <Col className='fixed'>
            <NewsNav stories={stories} />
          </Col>
        </Col>
      </Row>
    </Container>
  );
};

export default NewsPage;
