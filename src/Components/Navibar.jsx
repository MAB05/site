import React from "react";
import { Navbar, Nav, Button, Container, NavDropdown } from "react-bootstrap";

export default function Navibar() {
    return (
        <>
            <Navbar bg="success" expand="lg">
                <Container>
                    <Navbar.Brand href="#Brand">Animal World</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#profile">Profile</Nav.Link>
                            <NavDropdown title="More" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#About">About</NavDropdown.Item>
                                <NavDropdown.Item href="#Settings">Settings</NavDropdown.Item>
                                <NavDropdown.Item href="#Other">Other</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#Help">Help</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Button variant="primary" className="m-1">Sign In</Button>
                            <Button variant="primary" className="m-1">Log Out</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}