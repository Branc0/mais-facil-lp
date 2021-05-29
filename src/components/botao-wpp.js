import React from "react"

import styled from "styled-components"
import WppSvg from "../images/whatsapp.svg"

const Botao = styled.a`
	display: flex;
	position: fixed;
	bottom: 5%;
	right: 5%;
	background-color: #206A5D;
	padding: 1em;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
	z-index: 15;
	a {
		text-decoration: none;
	}
	svg {
		fill: #fafafa;
	}
`

const Wpp = () => {
    return (
        <Botao
            href="https://api.whatsapp.com/send?phone=5517991663337"
            target="_blank"
            rel="noopener noreferrer">
            <WppSvg
                id={WppSvg.id}
                desc={`Logo marca`}
                width="1.5rem"
                height="1.5rem"
            />
        </Botao>
    )
}

export default Wpp