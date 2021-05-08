import React from "react"
import { Container, Row, Col } from "react-bootstrap"

import styled from "styled-components"
// import { graphql, useStaticQuery } from "gatsby"

const Section = styled.section`
    padding-top: 100px;
    padding-bottom: 100px;
`

const CustomH2 = styled.h2`
    font-family: roboto;
    font-weight: 700;
    color: #206A5D;
    font-size: 42px;
    line-height: 42px;
    margin-bottom: 24px;
    `

const HowItWorks = () => {
    return (
        <Section>
            <Container>
                <CustomH2> Como <br /> Funciona</CustomH2>
                <Row>
                    <Col xs='6'>
                    </Col>
                </Row>
            </Container>
        </Section>
    )
}

export default HowItWorks;