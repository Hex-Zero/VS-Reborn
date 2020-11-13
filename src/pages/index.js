import React from "react"
import { graphql } from "gatsby"
import Img from 'gatsby-image'


import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogIndex = (props) => {
  const siteTitle = props.data.site.siteMetadata?.title || `Title`
  const posts = props.data.allMarkdownRemark.nodes
  console.log(props);
  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO title="HOME" />
      <section className="max-main-image-wrapper">
        {props.data.allFile.edges.map((element, index) => {
          return <Img key={index} className="max-main-image" fluid={element.node.childImageSharp.fluid} />
        })}
        </section>
    </Layout>
  )
}


export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
    allFile(filter: {sourceInstanceName: {eq: "mainImages"}}) {
    edges {
      node {
        childImageSharp {
          fluid(maxWidth: 1200){
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
  }
`
