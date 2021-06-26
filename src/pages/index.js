import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <>
      <section className="w-11/12 md:w-8/12 mx-auto py-5">
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-4 gap-y-2">
          <div className="col-span-2 bg-white rounded-sm p-3">
            <h1>Techrev</h1>
          </div>
          <div className="bg-indigo-100 rounded-sm p-3">
            <h3>SidePannel</h3>
          </div>
        </div>
      </section>
    </>
  </Layout>
)

export default IndexPage
