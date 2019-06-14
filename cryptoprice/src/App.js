import React from 'react'
import './App.css'
import { Container } from 'react-bootstrap'
import styled from 'styled-components'

import Navbar from './components/Navbar'

const StyledNavbar = styled(Navbar)`
  position: fixed;
  top: 0;
  width: 100%;
  overflow: hidden;
`

function App(props) {

  return (
    <Container fluid>
      <StyledNavbar cryptos={props.cryptos}/>
    </Container>

  )
}

export default App

