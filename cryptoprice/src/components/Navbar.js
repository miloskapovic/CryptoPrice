import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import SettingsIcon from '../assets/SettingsIcon.png'

const CurrencyPicker = (props) => {
    let content = (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">CryptoPrice</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link as={Link} to="/">Cryptocurrency List</Nav.Link>
            </Nav>
            <Navbar.Collapse className="justify-content-end">
                <Nav.Link as={Link} to="/settings"><img src={SettingsIcon} alt="Settings" height="30" width="30"></img></Nav.Link>
            </Navbar.Collapse>
        </Navbar>
    )
    return content
};

export default CurrencyPicker;