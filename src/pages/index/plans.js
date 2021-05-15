import React from "react"
import { Col, Container, Row } from "react-bootstrap"

import styled from "styled-components"

const Section = styled.section`
    background-color: #206A5D;
    min-height: 608px;
    padding: 50px 0;
`

const CustomH2 = styled.h2`
    font-family: roboto;
    font-weight: 700;
    color: #fff;
    font-size: 42px;
    line-height: 42px;
    margin-bottom: 88px;
    `

const TextContainer = styled.div`
    max-width: 400px;
    margin: 0 auto;
`

const CardPlano = styled.article`
    border-radius: 8px;
    @media (max-width: 768px) {
        margin-bottom: 24px;
    }
`

const CardBody = styled.div`
    background: #FAFAFA;
    padding:24px;
    height: 260px;
    border-radius: 0 0 8px 8px;
`

const CardPrice = styled.h3`
    font-size: 32px;
    text-align: center;
    margin-bottom:18px;
    color: #206A5D;
    font-family: Roboto;
    font-weight: 700;
    span {
        font-size: 14px
    }
`

const CustomH3 = styled.div`
    background: linear-gradient(135deg,#81b315,#198754);
    font-family: Roboto;
    text-transform: uppercase;
    margin-bottom: 0;
    font-size: 18px;
    padding: 15px 90px;
    color: #fff;
    border-radius: 10px 10px 0 0;
    height: 85px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    text-align: center;
    letter-spacing: 1.25px;
`

const CustomUl = styled.ul`
    list-style: none;
    padding-left: 8px;
    width: 240px;
    margin-left: 78px;
    li {
        padding-left: 8px;
        margin-left: 8px;
        font-size: 14px;
        color: #707070;
        position: relative;
        &:before {
            background-color: #81B315;
            width: 8px;
            height: 8px;
            border-radius: 50%;
            left: -6px;
            top: 11px;
            content: '';
            position: absolute;
            transform: translate(-50%, -50%);
        }
    }
`

const Plans = () => (
    <Section>
        <Container>
            <CustomH2 className="text-center">Planos</CustomH2>
            <Row>
                <Col>
                    <TextContainer>
                        <CardPlano>
                            <CustomH3>Básico</CustomH3>
                            <CardBody>
                                <CardPrice>
                                    R$ 379<span>,00</span>
                                </CardPrice>
                                <CustomUl>
                                    <li>Contabilidade Completa</li>
                                    <li>Abertura de Empresa</li>
                                    <li>Pró-labore de 2 sócios</li>
                                    <li>Atendimento: E-mail e WhatsApp</li>
                                    <li>Emissão de 5 Notas Fiscais</li>
                                </CustomUl>
                            </CardBody>
                        </CardPlano>
                    </TextContainer>
                </Col>
                <Col>
                    <TextContainer>
                        <CardPlano>
                            <CustomH3>Premium</CustomH3>
                            <CardBody>
                                <CardPrice>
                                    R$ 499<span>,00</span>
                                </CardPrice>
                                <CustomUl>
                                    <li>Contabilidade Completa</li>
                                    <li>Abertura de Empresa</li>
                                    <li>Pró-labore de <strong>4 sócios</strong></li>
                                    <li>Atendimento: E-mail e WhatsApp </li>
                                    <li>Emissão de <strong>50 Notas Fiscais</strong></li>
                                    <li><strong>Certificado digital</strong></li>
                                    <li><strong>Contador Especialista</strong></li>
                                </CustomUl>

                            </CardBody>
                        </CardPlano>
                    </TextContainer>
                </Col>
            </Row>
        </Container >
    </Section >
)

export default Plans;