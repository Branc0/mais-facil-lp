import React from "react"
import { Col } from "react-bootstrap"

import styled from "styled-components"

const Section = styled.section`
    background-color: #F1F1E9;
    padding: 80px 0;
`

const CustomContainer = styled.div`
    max-width: 650px;
    margin: 0 auto;
    padding-right: var(--bs-gutter-x,.75rem);
    padding-left: var(--bs-gutter-x,.75rem);
`

const CustomH2 = styled.h2`
    font-family: roboto;
    font-weight: 500;
    color: #206A5D;
    font-size: 32px;
    line-height: 32px;
    margin: 0 auto;
    margin-bottom: 88px;
    text-align: center;
    @media (max-width: 425px) {
        margin-bottom: 42px;
    }
`

const CustomUl = styled.ul`
    list-style: none;
    padding-left: 8px;
    width: 240px;
    margin: 0 auto;
    li {
        padding-left: 8px;
        margin-left: 8px;
        font-size: 16px;
        font-weight: 500;
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
    @media (max-width: 425px) {
        margin-left: 38px;
    }
`

const IdealFor = () => (
    <Section>
        <CustomContainer>
            <CustomH2>Somos ideais para empresas e profissionais de serviços, como: </CustomH2>
            <div className="row">
                <Col xs='12' md='6'>
                    <CustomUl>
                        <li>Advogados</li>
                        <li>Escritórios de advocacia</li>
                        <li>Arquitetos</li>
                        <li>Artistas</li>
                        <li>Consultores</li>
                        <li>Corretores</li>
                        <li>Designers</li>
                        <li>Jornalistas</li>
                        <li>Médicos</li>
                    </CustomUl>
                </Col>
                <Col xs='12' md='6'>
                    <CustomUl>
                        <li>Clínicas médicas</li>
                        <li>Programadores</li>
                        <li>Fábricas de software</li>
                        <li>Publicitários</li>
                        <li>Agências de publicidade</li>
                        <li>Youtubers</li>
                        <li>Produtoras</li>
                        <li>Entre outras (verifique com nossa equipe)</li>
                    </CustomUl>
                </Col>
            </div>
        </CustomContainer>
    </Section >
)

export default IdealFor;