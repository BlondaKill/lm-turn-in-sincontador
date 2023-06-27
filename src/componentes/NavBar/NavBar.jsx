import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget'


const NavBar = () => {

  return (
    <Navbar className="navBg">
      <Container>
        <Navbar.Brand href="#home">La Mala</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto otroColor">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Servicios</Nav.Link>
            <Nav.Link href="#link">Precios</Nav.Link>
            <Nav.Link href="#link">Tienda</Nav.Link>                  
          </Nav>
        </Navbar.Collapse>
        <CartWidget/>
      </Container>
    </Navbar>
  );
}

 
  
export default NavBar

