import * as React from "react"
import PropTypes from "prop-types"
import styled from "styled-components";
import { Navbar, Nav } from "react-bootstrap"
import LogoSvg from "../../images/white-logo.svg"


const HeaderElement = styled.header` 
  background-color: #206A5D;
  width:100%;
  position: fixed;
`;

const CustomH1 = styled.h1`
  margin-bottom: 0;
  line-height: 1;
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
        <Navbar.Collapse className='justify-content-end' id="basic-navbar-nav">
          <Nav className='text-end'>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Como Funciona</Nav.Link>
            <Nav.Link href="#link">Planos</Nav.Link>
            <Nav.Link href="#link">Contato</Nav.Link>
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
