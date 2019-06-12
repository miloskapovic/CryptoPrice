import React from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';

const CurrencyPicker = (props) => {
    let content = (
        <DropdownButton id="dropdown-basic-button" title="Select Currency">
            <Dropdown.Item onClick={() => props.setCurrency('USD')}>USD</Dropdown.Item>
            <Dropdown.Item onClick={() => props.setCurrency('EUR')}>EUR</Dropdown.Item>
            <Dropdown.Item onClick={() => props.setCurrency('CNY')}>CNY</Dropdown.Item>
        </DropdownButton>
    )
    return content
};

export default CurrencyPicker;