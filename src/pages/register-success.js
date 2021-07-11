import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Seo from "../components/seo"
import SucessSVG from "../images/success.svg"


const MainSection = styled.section`
  padding: 100px 0;
  min-height: calc(100vh - 130px);
  text-align: center;
`

const SecondPage = () => (
  <>
    <Seo title="Enviado com Sucesso" />
    <MainSection>
      <SucessSVG
        width="280px" />
      <h1>E-mail enviado com sucesso</h1>
      <p>parabéns! seu cadastrado foi enviado com sucesso, nas próximas horas nossa equipe entrará em contato</p>
      <Link to="/">Voltar</Link>
    </MainSection>
  </>
)

export default SecondPage
