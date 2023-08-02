import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Navigation() {
  return (
    <>
      <Navbar className='navbar' bg="transparent" variant='light' expand="md">
        <Container>
          <Navbar.Brand className='brand' href="/">Ernesto Lopez</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="justify-content-end" style={{ width: "100%" }}>
              <Nav.Link href="/">Inicio</Nav.Link>
              <Nav.Link href="/proyectos">Proyectos</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
    </Navbar>
    </>
  );
}

export default Navigation;
