import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import KeywordsList from '../ui/KeywordsList';
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import alertContext from '../context/alert/alertContext';
import CustomAlert from '../ui/CustomAlert';
import CustomSpinner from '../ui/CustomSpinner';

const Keywords = () => {
  const [keywords, setKeywords] = useState([]);
  const [newWord, setNewWord] = useState('');

  const { setAlert, deleteAlert } = useContext(alertContext);

  const onClose = (e) => {
    deleteAlert(e.target.id);
  };

  useEffect(() => {
    axios
      //.get('http://localhost:8000/news/keywords') development only
      .get('https://evening-bastion-25872.herokuapp.com/news/keywords')
      .then((res) => {
        setKeywords(res.data.keywords);
      })
      .catch((err) => {});
  }, []);

  const onKeywordDelete = (e) => {
    const word = e.target.getAttribute('data-word');
    const newKeywords = keywords.filter((keyword) => {
      return keyword !== word;
    });
    setKeywords(newKeywords);
    const data = { keywords: newKeywords };

    axios
      .post('http://localhost:8000/news/set-keywords', data)
      .then((res) => {
        setAlert('Keyword deleted successfully', 'success');
      })
      .catch((err) => {
        setAlert(
          "ooops... Something went wrong couldn't delete keyword",
          'danger'
        );
      });
  };

  const onChange = (e) => {
    setNewWord(e.target.value);
  };

  const onKeyDown = (e) => {
    if (e.code === 'Enter') {
      const exists = keywords.filter((keyword) => {
        return keyword === newWord;
      });

      if (exists.length > 0) {
        setAlert('ooops... Keyword exists already', 'danger');
        return;
      }
      setKeywords([newWord, ...keywords]);
      keywords.unshift(newWord);
      const data = { keywords };
      axios
        .post('http://localhost:8000/news/set-keywords', data)
        .then((res) => {
          setAlert('Keyword added successfully', 'success');
        })
        .catch((err) => {
          setAlert(
            "ooops... Something went wrong couldn't delete keyword",
            'danger'
          );
        });
      e.target.value = '';
    }
  };

  return (
    <Container fluid>
      <CustomAlert onClose={onClose} />
      <CustomSpinner />
      <Row>
        <Col style={{ margin: 'auto', marginTop: '15px' }} lg={{ span: 6 }}>
          <input
            type='text'
            className='form-control'
            onKeyDown={onKeyDown}
            onChange={onChange}
            style={{
              backgroundColor: 'white',
              marginTop: '15px',
              padding: '10px',
            }}
            placeholder='Type a keyword and press the enter key...'
          />
        </Col>
      </Row>

      <Col
        style={{
          backgroundColor: 'white',
          margin: 'auto',
          marginTop: '15px',
          minimumHeight: '600px',
          padding: '10px',
          borderRadius: '4px',
        }}
        lg={{ span: 12 }}
      >
        {keywords.length > 0 ? (
          <KeywordsList keywords={keywords} onClick={onKeywordDelete} />
        ) : (
          <p>No keywords set yet!</p>
        )}
      </Col>
    </Container>
  );
};

export default Keywords;
