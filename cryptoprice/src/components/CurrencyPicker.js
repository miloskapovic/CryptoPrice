import React from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';

const CurrencyPicker = (props) => {
    const { setCurrency, fetchCryptos } = props
    const fetchData = (currency) => {
        setCurrency(currency)
        fetchCryptos(currency)
        fetchCrypto(currency, cryptoId)

    }
    let content = (
        <DropdownButton id="dropdown-basic-button" title="Select Currency">
            <Dropdown.Item onClick={() => props.fetchData('USD')}>USD</Dropdown.Item>
            <Dropdown.Item onClick={() => props.fetchData('EUR')}>EUR</Dropdown.Item>
            <Dropdown.Item onClick={() => props.fetchData('CNY')}>CNY</Dropdown.Item>
        </DropdownButton>
    )
    return content
};

export default CurrencyPicker;