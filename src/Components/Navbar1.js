










import React from 'react'
import { Navbar, Nav} from "react-bootstrap";
import '../Components/Css/NavbarD.css';


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
                  <Nav.Link eventKey="1" style={{marginRight: '25px'}} as={Link} to="/features">
                    Features
                  </Nav.Link>
                </Nav.Item>
{/*                
                  <Link to="/features" eventKey="1" style={{marginRight: '25px'}} className="nav-link" >Fealtures</Link>
                  <Link to="/pricing" eventKey="2" style={{marginRight: '75px'}} className="nav-link" >Pricing</Link> */}
               
               <Nav.Item>
                  <Nav.Link eventKey="1" className="navl2" as={Link} to="/features">
                    Contacts
                  </Nav.Link>
                </Nav.Item>
            
             
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
    )
}
