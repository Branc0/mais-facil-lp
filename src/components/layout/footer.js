import * as React from "react"
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";

import LogoSvg from "../../images/white-logo.svg"
import FacebookSvg from "../../images/facebook.svg"
import InstagramSvg from "../../images/instagram.svg"
import MapSvg from "../../images/map.svg"


const CustomFooter = styled.footer`
  background-color: #81B315;
  padding: 30px 0;
  display: flex;
  align-items: center;
  position: relative;
  z-index: 15;
  @media (max-width: 990px) {
      justify-content: center;
  }
`;

const CustomP = styled.p`
  color: #FAFAFA;
  font-size: 12px;
  text-align: right;
  margin-top: 12px;
  @media (max-width: 990px) {
      text-align: center;
  }
`

const CustomA = styled.a`
  display: block;
  margin: 0 12px;
  &:hover{
    cursor: pointer;
  }
`

const CustomAddress = styled.address`
  font-weight: 300;
  font-size: 14px;
  line-height: 14px;
  margin-left: 12px;
  text-align: center;
  margin-bottom: 0;
  color: #FAFAFA;
`

const Footer = () => (
  <CustomFooter>
    <Container>
      <Row className="align-items-center">
        <Col xs='12' lg='4'>
          <LogoSvg className="d-block mx-auto mx-lg-0" width="109px" height="54.3px" />
        </Col>
        <Col xs='12' lg='4'>
          <a className="d-flex my-4  my-lg-0 btn justify-content-center text-decoration-none" href="https://www.google.com/maps?q=Av.+Emílio+Trevisan,+655+-+Bom+Jardim,+São+José+do+Rio+Preto+-+SP,+Brasil" target="_blank" rel="noreferrer noopener">
            <MapSvg />
            <CustomAddress>
              Av. Emilio Trevisan 655, sala 714 <br /> São José do Rio Preto – SP.
          </CustomAddress>
          </a>
        </Col>
        <Col xs='12' lg='4'>
          <div className="justify-content-center justify-content-lg-end d-flex">
            <CustomA href="https://www.facebook.com/Mais-F%C3%A1cil-Contabilidade-Online-104579938524471" target="_blank" rel="noreferrer noopener">
              <FacebookSvg />
            </CustomA>
            <CustomA href="https://www.instagram.com/maisfacilcontabilidade/" target="_blank" rel="noreferrer noopener">
              <InstagramSvg />
            </CustomA>
          </div>
          <CustomP>
            Mais Fácil Contabilidade © {new Date().getFullYear()}
          </CustomP>
        </Col>
      </Row>
    </Container>
  </CustomFooter>
);


export default Footer