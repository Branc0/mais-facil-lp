import React, { Component } from "react"
import styled from "styled-components";
import { Navbar, Nav } from "react-bootstrap"
import scrollTo from 'gatsby-plugin-smoothscroll';


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
  @media (max-width: 990px) {
      text-align: center;
      width: 150px;
      margin-left: auto;
  }
`

class Header extends Component {

  handleClick = destination => {
    scrollTo(destination);
    if (window.innerWidth < 990)
      document.querySelector('#navbar-toggle').click();
  }

  render() {
    return (
      <HeaderElement>
        <div className='container'>
          <Navbar variant='dark' expand="lg">
            <Navbar.Brand className='mr-auto'>
              <CustomH1>
                <LogoSvg width="109px" height="54.3px" />
              </CustomH1>
            </Navbar.Brand>
            <Navbar.Toggle id="navbar-toggle" aria-controls="navbar-collapse" />
            <Navbar.Collapse className='justify-content-end align-items-center' id="navbar-collapse">
              <Nav className='text-end'>
                <Nav.Link onClick={() => this.handleClick('#home')}>Home</Nav.Link>
                <Nav.Link onClick={() => this.handleClick("#como-funciona")}>Como Funciona</Nav.Link>
                <Nav.Link onClick={() => this.handleClick("#planos")}>Planos</Nav.Link>
                <Nav.Link onClick={() => this.handleClick("#contato")}>Contato</Nav.Link>
                <CustomA href="https://app.maisfacilcontabil.com.br/">Entrar</CustomA>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </HeaderElement >
    )
  }
}


export default Header
