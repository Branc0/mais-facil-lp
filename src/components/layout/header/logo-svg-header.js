import React from "react"
import logoSvg from "../../../images/white-logo.svg"
import SvgFixed from "../../svg-fixed"
import styled from "styled-components"

import { Link } from "react-scroll"

const LinkSvg = styled(Link)`
	cursor: pointer;
`

const LogoSvgHeader = ({ siteTitle }) => (
	// <LinkSvg onClick={() => scrollTo("#inicio")} to="#">
	<LinkSvg to="#">
		<SvgFixed
			id={logoSvg.id}
			desc={`Logo:  ${siteTitle}`}
			width="12.6875rem"
			height="2.875rem"
		/>
	</LinkSvg>
)

export default LogoSvgHeader
