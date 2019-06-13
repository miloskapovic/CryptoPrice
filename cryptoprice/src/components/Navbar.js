import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'

const CurrencyPicker = (props) => {
    let content = (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">CryptoPrice</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link as={Link} to="/">Cryptocurrency List</Nav.Link>
                <Nav.Link as={Link} to="/details">Cryptocurrency Details</Nav.Link>
                <Nav.Link as={Link} to="/settings">Settings</Nav.Link>
            </Nav>
        </Navbar>
    )
    return content
};

export default CurrencyPicker;