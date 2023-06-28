import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css'


const NavBar = () => {

  return (
    <Navbar className="navBg">
      <Container>
        <Navbar.Brand href="#home" className='log'>La Mala</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto otroColor">
            <Nav.Link href="#home" className='links'>Home</Nav.Link>
            <Nav.Link href="#link" className='links'>Servicios</Nav.Link>
            <Nav.Link href="#link" className='links'>Precios</Nav.Link>
            <Nav.Link href="#link" className='links'>Tienda</Nav.Link>                  
          </Nav>
        </Navbar.Collapse>
        <CartWidget/>
      </Container>
    </Navbar>
  );
}

 
  
export default NavBar

