import * as React from "react"
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";

import LogoSvg from "../../images/white-logo.svg"


const CustomFooter = styled.footer`
  background-color: #81B315;
  min-height: 60px;
  display: flex;
  align-items: center;
  justify-content: between;
`;

const CustomP = styled.p`
  color: #FAFAFA;
  font-size: 12px;
  text-align: right;
  margin-top: 12px;
`

const Footer = () => (
  <CustomFooter>
    <Container>
      <Row>
        <Col>
          <LogoSvg width='80px' />
        </Col>
        <Col>
          <CustomP>
            Mais Fácil Contabilidade © {new Date().getFullYear()}
          </CustomP>
        </Col>
      </Row>
    </Container>
  </CustomFooter>
);


export default Footer