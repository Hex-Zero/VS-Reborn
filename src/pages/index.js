import React from "react"
import { graphql } from "gatsby"
import Img from 'gatsby-image'


import Layout from "../components/layout"
import SEO from "../components/seo"

function returnLayoutSize(width, height) {
  console.log(width, height);
  if (width > height) {
    return "max-two-column-wide"
  } else if (width == height) {
    return ""
  } else {
    return "max-two-row-high"
  }
}

const BlogIndex = (props) => {
  const siteTitle = props.data.site.siteMetadata?.title || `Title`
  const posts = props.data.allMarkdownRemark.nodes
  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO title="HOME" />
      <section className="max-main-image-wrapper">
        {props.data.allFile.edges.map((element, index) => {
          const layout = returnLayoutSize(element.node.childImageSharp.original.width, element.node.childImageSharp.original.height)
          return <Img key={index} className={"max-main-image " + layout}
            fluid={element.node.childImageSharp.fluid} />
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
          original {
            height
            width
          }
        }
      }
    }
  }
  }
`
