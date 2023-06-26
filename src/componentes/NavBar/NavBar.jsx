import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
  return (  
        <Navbar bg="black"  variant="dark">
          <Container>
            <Navbar.Brand href="#home">La Mala</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Servicios</Nav.Link>
              <Nav.Link href="#pricing">Precios</Nav.Link>
              <Nav.Link href="#pricing">Tienda</Nav.Link>
            </Nav>
            <CartWidget/>
          </Container>
        </Navbar>     
        )
    }

  
export default NavBar

