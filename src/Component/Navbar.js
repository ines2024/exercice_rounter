import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import Addproduct from './Addproduct'

function Navbar1() {
  return (
    <div>


<Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/Login">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Login">Login</Nav.Link>
            <Nav.Link href="/Contact">Contact</Nav.Link>
            <Nav.Link href="/Products">Products</Nav.Link>
          </Nav>
          <Addproduct/>
        </Container>
      </Navbar>
        
    </div>
  )
}

export default Navbar1