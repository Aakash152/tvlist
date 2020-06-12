import React from 'react'
import { Navbar, Nav} from "react-bootstrap";

import {Link} from 'react-router-dom';
export default function Navbar1() {
    return (
        <div>
            <Navbar collapseOnSelect={true} expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Item>
                  <Nav.Link eventKey="1" as={Link} to="/features">
                    Features
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="2" as={Link} to="/pricing">
                    Pricing
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
    )
}
