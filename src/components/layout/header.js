import * as React from "react"
import PropTypes from "prop-types"
import styled from "styled-components";
import { Navbar, Nav } from "react-bootstrap"

import LogoSvg from "../../images/white-logo.svg"


const HeaderElement = styled.header`
  background-color: #206A5D;
  width:100%;
  position: fixed;
  z-index: 1;
`;

const CustomH1 = styled.h1`
  margin-bottom: 0;
  line-height: 1;
`

const CustomA = styled.a`
  border-radius: 25px;
  color: #FAFAFA;
  background: #81B315;
  border: none;
  height: 24px;
  line-height: 24px;
  padding: 0 24px;
  text-transform: uppercase;
  font-size: 14px;
  font-family: roboto;
  font-weight: 700;
  letter-spacing: 1.25px;
  margin-top: 8px;
  text-decoration: none;
  margin-left: 12px;
  &:hover{
  color: #206A5D;
    cursor: pointer;
  }
`

const Header = ({ siteTitle }) => (
  <HeaderElement>
    <div className='container'>
      <Navbar variant='dark' expand="lg">
        <Navbar.Brand className='mr-auto'>
          <CustomH1>
            <LogoSvg />
          </CustomH1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className='justify-content-end align-items-center' id="basic-navbar-nav">
          <Nav className='text-end'>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Como Funciona</Nav.Link>
            <Nav.Link href="#link">Planos</Nav.Link>
            <Nav.Link href="#link">Contato</Nav.Link>
            <CustomA>Entrar</CustomA>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  </HeaderElement>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
