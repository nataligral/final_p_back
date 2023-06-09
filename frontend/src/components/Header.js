import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap'
// import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
  return (
    <header>
        <Navbar bg="" variant='dark' expand="lg" collapseOnSelect>
      <Container>

        <LinkContainer to="/">
        <Navbar.Brand >muuuushlemet</Navbar.Brand>
        </LinkContainer>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">

          <LinkContainer to="/cart">
            <Nav.Link ><i className='fas fa-shopping-cart'></i>your cart</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/login">
            <Nav.Link ><i className='fas fa-user'></i>Login</Nav.Link>
            </LinkContainer>

            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
  )
}

export default Header