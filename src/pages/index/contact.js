import React, { Component } from "react"
import { Col, Container, Row } from "react-bootstrap"

import styled from "styled-components"


const Section = styled.section`
    padding: 100px 0;
    min-height: 600px;
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
    margin-bottom: 24px;
    `

const FormContainer = styled.div`
    border-radius: 4px;
    background-color: #ddd;
    padding: 24px;
    max-width: 500px;
    margin: 0 auto;
    @media (max-width: 425px) {
        margin-top: 80px;
    }
    `

const CustomP = styled.p`
    font-family: roboto;
    font-weight: 300;
    color: #707070;
    font-size: 16px;
    line-height: 24px;
    `

const CustomLi = styled.li`
    list-style: none;
    padding-left: 8px;
    margin-left: 0;
    ul {
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

const CustomInput = styled.input`
    border: none;
    border-radius: 4px;
    display: block;
    margin-bottom: 18px;
    height: 48px;
    padding: 0 16px;
    width: 100%;
`

const CustomSelect = styled.select`
    border: none;
    border-radius: 4px;
    display: block;
    margin-bottom: 18px;
    height: 48px;
    padding: 0 16px;
    width: 100%;
`

const CustomButton = styled.button`
    border-radius: 25px;
    color: #FAFAFA;
    background: #81B315;
    border: none;
    height: 38px;
    padding: 0 24px;
    text-transform: uppercase;
    font-size: 14px;
    font-family: roboto;
    font-weight: 700;
    letter-spacing: 1.25px;
    margin-top: 12px;
    &:hover{
    cursor: pointer;
  }
`

const TextContainer = styled.div`
    max-width: 500px;
    margin: 0 auto;
`

const CustomH4 = styled.h4`
    font-family: roboto;
    font-size: 16px;
    font-weight: 500;
    color: #656565;
    margin-top: 24px;
`

class Contact extends Component {

    constructor() {
        super();

        this.initialFormState = {
            plano: "basico",
            ramo: "",
            state: "",
            city: "",
            email: "",
            name: "",
            phone: "",
            loadingSubmit: false,
        }

        this.state = {
            ...this.initialFormState,
            feedback: {
                type: "",
                message: "",
            },
        }
    }

    encode = data => {
        return Object.keys(data)
            .map(
                key =>
                    encodeURIComponent(key) +
                    "=" +
                    encodeURIComponent(data[key])
            )
            .join("&")
    }

    handleInputChange = event =>
        this.setState({
            [event.target.name]: event.target.value,
        })

    handleSubmit = event => {
        event.preventDefault()

        this.setState({ loadingSubmit: true })

        fetch(
            "https://api.maisfacilcontabil.com.br/contact",
            {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    service: `${this.state.plano}`,
                    fieldArea: `${this.state.ramo}`,
                    state: `${this.state.state}`,
                    city: `${this.state.city}`,
                    email: `${this.state.email}`,
                    name: `${this.state.name}`,
                    phone: `${this.state.phone}`,
                }),
            }
        )
            .then(data => {
                this.setState({
                    feedback: {
                        type: "success",
                        message:
                            "Recebemos sua mensagem. Entraremos em contato em breve.",
                    },
                })
            })
            .catch(data => {
                console.log(data)
                window.location = encodeURI(
                    `https://api.whatsapp.com/send?phone=5517991663337&text=Olá, me chamo ${this.state.name} <${this.state.email}>. 
                            Tenho uma empresa no ramo ${this.state.ramo} e tenho interesse no plano ${this.state.plano}.
                            Sou de ${this.state.city}, ${this.state.state}. Para entrar em contato comigo ${this.state.phone}.`
                )
            })
            .finally(() => this.setState({ ...this.initialFormState }))
    }

    render() {
        return (
            <Section id="contato">
                <Container>
                    <Row>
                        <Col xs="12" md="6">
                            <TextContainer>

                                <CustomH2>Vamos conversar?</CustomH2>
                                <CustomP>Entre em contato para saber mais sobre como nosso sistema funciona, estamos prontos para falar com você a qualquer momento.</CustomP>
                                <CustomP>Entrando em contato, você vai:</CustomP>
                                <CustomLi>
                                    <ul>Conhecer todas as vantagens de contratar nossos serviços.</ul>
                                    <ul>Entender tudo que precisa ser feito em relação as necessidades contábeis da sua empresa.</ul>
                                    <ul>Saber o quanto você vai economizar fazendo sua contabilidade conosco.</ul>
                                </CustomLi>
                                <CustomH4>Fique Tranquilo que o nosso contato é sem compromisso!</CustomH4>
                            </TextContainer>
                        </Col>
                        <Col xs="12" md="6">
                            <FormContainer>
                                <form onSubmit={this.handleSubmit}>
                                    <CustomSelect
                                        id="plano"
                                        name="plano"
                                        type="text"
                                        placeholder="Plano"
                                        value={this.state.plano}
                                        onChange={this.handleInputChange}
                                        required
                                    >
                                        <option disabled defaultValue>Escolha um plano</option>
                                        <option value="basico">Básico</option>
                                        <option value="premium">Premium</option>
                                        <option value="consultar-especialista">Quero consulta de um especialista</option>
                                    </CustomSelect>
                                    <CustomInput
                                        id="ramo"
                                        name="ramo"
                                        type="text"
                                        placeholder="Ramo de atuação"
                                        value={this.state.ramo}
                                        onChange={this.handleInputChange}
                                        required
                                    />
                                    <CustomInput
                                        id="state"
                                        name="state"
                                        type="text"
                                        placeholder="Estado"
                                        value={this.state.state}
                                        onChange={this.handleInputChange}
                                        required
                                    />
                                    <CustomInput
                                        id="city"
                                        name="city"
                                        type="text"
                                        placeholder="Cidade"
                                        value={this.state.city}
                                        onChange={this.handleInputChange}
                                        required
                                    />
                                    <CustomInput
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="E-mail"
                                        value={this.state.email}
                                        onChange={this.handleInputChange}
                                        required
                                    />
                                    <CustomInput
                                        id="name"
                                        name="name"
                                        type="text"
                                        placeholder="Nome"
                                        value={this.state.name}
                                        onChange={this.handleInputChange}
                                        required
                                    />
                                    <CustomInput
                                        id="phone"
                                        name="phone"
                                        type="telephone"
                                        placeholder="Telefone"
                                        value={this.state.phone}
                                        onChange={this.handleInputChange}
                                        required
                                    />
                                    <CustomButton
                                        className="link-outline"
                                        disabled={this.state.loadingSubmit}
                                    >
                                        {this.state.loadingSubmit
                                            ? "Enviando..."
                                            : "Enviar"}
                                    </CustomButton>
                                </form>
                            </FormContainer>
                        </Col>
                    </Row>
                </Container>
            </Section>
        )
    }
}

export default Contact;
