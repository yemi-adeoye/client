import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavCustom = (props) => {
  const onNavClick = (e) => {
    return;
  };

  return (
    <>
      <Navbar expand='sm' style={{ color: '#fff', backgroundColor: '#fff' }}>
        <Navbar.Brand className='roboto-c head-logo' href='/home'>
          Your News
        </Navbar.Brand>

        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse>
          <Nav
            className='nav-cs ubuntu ml-auto '
            aria-controls='basic-navbar-nav'
          >
            <Nav.Link as={Link} to='/' id='home' onClick={onNavClick}>
              home
            </Nav.Link>

            <Nav.Link as={Link} to='/news' id='news' onClick={onNavClick}>
              news
            </Nav.Link>

            <Nav.Link
              as={Link}
              to='/keywords'
              id='keywords'
              onClick={onNavClick}
            >
              keywords
            </Nav.Link>

            <Nav.Link as={Link} to='/about'>
              about
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavCustom;
