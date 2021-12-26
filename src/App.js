import './App.css';
import { Routes, Route } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import { Fragment } from 'react';
import CustomNav from './components/ui/CustomNav';
import Home from './components/pages/home';
import NewsPage from './components/pages/NewsPage';
import Keywords from './components/pages/keywords';
import AlertState from './components/context/alert/AlertState';

function App() {
  return (
    <AlertState>
      <Fragment>
        <Row className='header'>
          <CustomNav />
        </Row>

        <Routes>
          <Route path='/client' element={<Home />}></Route>
          <Route path='/news' element={<NewsPage />}></Route>
          <Route path='/keywords' element={<Keywords />}></Route>
        </Routes>
      </Fragment>
    </AlertState>
  );
}

export default App;
