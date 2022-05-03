import React from "react";
import { Container, Navbar } from "react-bootstrap";

export default function Footer() {
    return (
        <Navbar bg="success" expand="lg">
            <Container className="m-3" >
                <p>Copyright © 2022 MONSTER Inc. </p>
            </Container>
        </Navbar>
    );
}