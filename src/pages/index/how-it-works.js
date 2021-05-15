import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import styled from "styled-components"

import PlanSvg from "../../images/choose-plan.svg"
import RegisterSvg from "../../images/register.svg"
import AccountSvg from "../../images/account-created.svg"
import SuportSvg from "../../images/suport.svg"

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
    margin-bottom: 82px;
    `

const CustomH3 = styled.h3`
    font-family: roboto;
    font-weight: 500;
    color: #206a5db5;
    font-size: 24px;
    line-height: 24px;
    margin-bottom: 8px;
    `

const CustomP = styled.p`
    font-family: roboto;
    font-weight: 300;
    color: #707070;
    font-size: 16px;
    line-height: 24px;
    `

const TextContainer = styled.div`
    max-width: 500px;
    `

const SvgContainer = styled.div`
    margin-bottom: 24px;
    text-align:center;
    max-width: 350px;
`

const CustomRow = styled(Row)`

`


const HowItWorks = () => {
    return (
        <Section>
            <Container>
                <CustomH2>Como Funciona</CustomH2>
                <CustomRow>
                    <Col xs='6'>
                        <SvgContainer className="mx-lg-auto">
                            <PlanSvg
                                desc={`Animação de uma mulher escolhendo planos`}
                            />
                        </SvgContainer>
                        <TextContainer className="mx-lg-auto">
                            <CustomH3>Escolha um Plano</CustomH3>
                            <CustomP>Escolha um de nossos <strong>planos</strong>, que esteja de acordo com as necessidades da sua empresa.</CustomP>
                        </TextContainer>
                    </Col>
                    <Col xs='6' style={{ marginTop: '84px' }}>
                        <SvgContainer className="mx-lg-auto">
                            <RegisterSvg />
                        </SvgContainer>
                        <TextContainer className="mx-lg-auto">
                            <CustomH3>Cadastre-se</CustomH3>
                            <CustomP>Preencha o <strong>formulário</strong>, e entraremos em contato para entender quais são as suas necessidades contábeis, explicar nossa proposta e requisitarmos os documentos que precisamos para cadastra-lo.</CustomP>
                        </TextContainer>
                    </Col>
                </CustomRow>
                <CustomRow>
                    <Col xs='6' style={{ marginTop: '-48px' }}>
                        <SvgContainer className="mx-lg-auto">
                            <AccountSvg />
                        </SvgContainer>
                        <TextContainer className="mx-lg-auto">
                            <CustomH3>Contabilidade na palma da mão</CustomH3>
                            <CustomP>Depois de toda a documentação organizada, assumimos a contabilidade da sua empresa, nossa equipe irá mostrar nosso sistema e iremos acompanhar todas as obrigações fiscais, mês a mês. O prazo para a análise de documentos é de 12 horas.</CustomP>
                        </TextContainer>
                    </Col>
                    <Col xs='6' style={{ marginTop: '124px' }}>
                        <SvgContainer className="mx-lg-auto">
                            <SuportSvg />
                        </SvgContainer>
                        <TextContainer className="mx-lg-auto">
                            <CustomH3>Tire Dúvidas</CustomH3>
                            <CustomP>Você pode tirar todas as suas dúvidas pelo nosso chat, e-mail ou telefone.</CustomP>
                        </TextContainer>
                    </Col>
                </CustomRow>
            </Container>
        </Section>
    )
}

export default HowItWorks;