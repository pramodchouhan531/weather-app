import React from 'react'
import { Navbar, Nav, Container, Button, Alert } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Dashboard() {
    return (
        <div>
            <div className="text-center">
                <>
                    <Navbar bg="dark" variant="dark">
                        <Container>
                            <Navbar.Brand href="#home">Dashboard</Navbar.Brand>
                            <Nav className="me-auto">
                                <Nav.Link href="/history">History</Nav.Link>
                            </Nav>
                        </Container>
                    </Navbar>
                    <br />
                </>
            </div>
        </div>
    )
}