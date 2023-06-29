import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';
import './NavBar.css'



const NavBar = () => {

  return (
    <header>
      <Link to="/">
        <h1>La Mala</h1>   
      </Link>


    <Navbar className="navBg">
      <Container>
        <Navbar.Brand className='log'>La Mala</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto otroColor">
          <Nav.Link to="cayegoria/1" className='links'>Home</Nav.Link>
            <Nav.Link to="cayegoria/2" className='links'>Blondes</Nav.Link>
            <Nav.Link  to="cayegoria/3" className='links'>Brown</Nav.Link>
            <Nav.Link to="cayegoria/4" className='links'>Darks</Nav.Link>                  
          </Nav>
        </Navbar.Collapse>
        <CartWidget/>
      </Container>
    </Navbar>
    </header>
  );
}

 
  
export default NavBar

