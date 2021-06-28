import * as React from "react"

import Layout from "../components/Layout/layout"
import Seo from "../components/seo"
import Hero from "../components/Home/heroOne"
import HeroTwo from "../components/Home/heroTwo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <>
      <Hero />
      <HeroTwo />
    </>
  </Layout>
)

export default IndexPage
