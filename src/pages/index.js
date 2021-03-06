import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Product Engineering Intern at Servify</h1>
    <h3>#100DaysOfProductEngineering at servify</h3>
    <p>Welcome to my new  site.</p>
    <p>My name is subashri sankar . I am from tamilnadu . I have done my Bachelor Of Engineering (ECE) at Tagore Engineering College.</p>
    <p>Acquiring #missingskill from Samal Gorai sir</p>
    <StaticImage
      src="../images/suba.jpg"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      <Link to="/page-2/">My second page</Link> <br />
      
    </p>
  </Layout>
)

export default IndexPage
