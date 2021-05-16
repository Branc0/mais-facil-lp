import React, { Component } from "react"
import { Container, Row, Col } from "react-bootstrap"
import styled from "styled-components"

import PlanSvg from "../../images/choose-plan.svg"
import RegisterSvg from "../../images/register.svg"
import AccountSvg from "../../images/account-created.svg"
import SuportSvg from "../../images/suport.svg"

const Section = styled.section`
    padding: 100px 0;
    @media (max-width: 425px) {
        padding: 80px 0;
    }
`

const CustomH2 = styled.h2`
    font-family: roboto;
    font-weight: 700;
    color: #206A5D;
    font-size: 42px;
    line-height: 42px;
    margin-bottom: 82px;
    @media (max-width: 425px) {
        font-size: 32px;
        text-align: center;
        margin-bottom: 24px;
    }
    `

const CustomH3 = styled.h3`
    font-family: roboto;
    font-weight: 500;
    color: #206a5db5;
    font-size: 24px;
    line-height: 24px;
    margin-bottom: 8px;
    @media (max-width: 425px) {
        font-size: 18px;
        line-height: 18px;
        text-align: center;
    }
`

const CustomP = styled.p`
    font-family: roboto;
    font-weight: 300;
    color: #707070;
    font-size: 16px;
    line-height: 24px;
    @media (max-width: 425px) {
        font-size: 14px;
        margin-bottom: 24px
     }
`

const TextContainer = styled.div`
    max-width: 500px;
`

const SvgContainer = styled.div`
    margin-bottom: 24px;
    text-align:center;
    max-width: 350px;
    @media (max-width: 990px) {
        max-width: 250px;
    }
    @media (max-width: 425px) {
        max-width: 200px;
        max-height: 220px;
        &:nth-child(2n) {
            margin-bottom: 300px;
        }
     }
`


const CustomRow = styled(Row)`

`

class HowItWorks extends Component {

    state = {
        windowWidth: undefined
    }

    handleResize = () => this.setState({
        windowWidth: window.innerWidth
    });

    componentDidMount() {
        this.handleResize();
        window.addEventListener('resize', this.handleResize)
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize)
    }

    render() {
        return (
            <Section id="como-funciona">
                <Container>
                    <CustomH2>Como Funciona</CustomH2>
                    <CustomRow>
                        <Col xs='12' lg='6'>
                            <SvgContainer className="mx-auto">
                                <PlanSvg
                                    width='100%'
                                    desc={`Animação de uma mulher escolhendo planos`}
                                />
                            </SvgContainer>
                            <TextContainer className="mx-auto">
                                <CustomH3>Escolha um Plano</CustomH3>
                                <CustomP>Escolha um de nossos <strong>planos</strong>, que esteja de acordo com as necessidades da sua empresa.</CustomP>
                            </TextContainer>
                        </Col>
                        <Col xs='12' lg='6' style={{ marginTop: this.state.windowWidth > 990 ? '84px' : '0' }}>
                            <SvgContainer className="mx-auto">
                                <RegisterSvg width='100%' />
                            </SvgContainer>
                            <TextContainer className="mx-auto mt-5 pt-2 mt-md-0 pt-md-0">
                                <CustomH3>Cadastre-se</CustomH3>
                                <CustomP>Preencha o <strong>formulário</strong>, e entraremos em contato para entender quais são as suas necessidades contábeis, explicar nossa proposta e requisitarmos os documentos que precisamos para cadastra-lo.</CustomP>
                            </TextContainer>
                        </Col>
                    </CustomRow>
                    <CustomRow>
                        <Col xs='12' lg='6' style={{ marginTop: this.state.windowWidth > 990 ? '-48px' : '0' }}>
                            <SvgContainer className="mx-auto">
                                <AccountSvg width='100%' />
                            </SvgContainer>
                            <TextContainer className="mx-auto">
                                <CustomH3>Contabilidade na palma da mão</CustomH3>
                                <CustomP>Depois de toda a documentação organizada, assumimos a contabilidade da sua empresa, nossa equipe irá mostrar nosso sistema e iremos acompanhar todas as obrigações fiscais, mês a mês. O prazo para a análise de documentos é de 12 horas.</CustomP>
                            </TextContainer>
                        </Col>
                        <Col xs='12' lg='6' style={{ marginTop: this.state.windowWidth > 990 ? '124px' : '0' }}>
                            <SvgContainer className="mx-auto">
                                <SuportSvg
                                    width='100%'
                                />
                            </SvgContainer>
                            <TextContainer className="mx-auto">
                                <CustomH3>Tire Dúvidas</CustomH3>
                                <CustomP>Você pode tirar todas as suas dúvidas pelo nosso chat, e-mail ou telefone.</CustomP>
                            </TextContainer>
                        </Col>
                    </CustomRow>
                </Container>
            </Section >
        )
    }
}

export default HowItWorks;