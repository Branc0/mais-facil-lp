import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Contact from "./index/contact"
import HeaderSection from "./index/header-section"
import HowItWorks from "./index/how-it-works"
import Plans from "./index/plans"


const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <HeaderSection></HeaderSection>
    <HowItWorks></HowItWorks>
    <Plans></Plans>
    <Contact></Contact>
  </Layout>
)

export default IndexPage
