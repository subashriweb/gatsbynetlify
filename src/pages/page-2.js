import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi everyone</h1>
    <p> My technical skills </p>
    <ol>
      <li>linux</li>
      <li>Git</li>
      <li>Building block of web application</li>
      <li>Fundamental of javascripts</li> 
    </ol>
    <Link to="/">back to homepage</Link>
  </Layout>
)

export default SecondPage
