import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import HeaderSection from "./index/header-section"


const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <HeaderSection></HeaderSection>
  </Layout>
)

export default IndexPage
