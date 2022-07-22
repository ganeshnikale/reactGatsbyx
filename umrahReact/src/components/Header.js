import React from 'react'
import { Navbar, Collapse, Container, Row, Col } from 'bootstrap-4-react';
import { Link } from "gatsby";

const Header = () => {
  return (
    <React.Fragment>
        <Container>
            <Row>
                <Col col="12">
                <Navbar expand="lg" dark bg="dark" mb="3">
                    <Link to='/' className='navbar-brand'>WebSite Logo</Link>
                    <Navbar.Toggler target="#navbarColor1" />
                    <Collapse navbar id="navbarColor1">
                        <Navbar.Nav ml="auto">
                            <li className='nav-item'>
                                <Link to="/" className='nav-link'>Home</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to="/about" className='nav-link'>About</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to="/pricing" className='nav-link'>Pricing</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to="#" className='nav-link'>Contact</Link>
                            </li>
                        </Navbar.Nav>
                    </Collapse>
                </Navbar>
                </Col>
            </Row>
        </Container>
      </React.Fragment>
  )
}

export default Header