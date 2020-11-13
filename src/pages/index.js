import React from "react"
import { graphql } from "gatsby"
import Masonry from 'react-masonry-css'
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
      <Masonry
        breakpointCols={3}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column">
        {props.data.allFile.edges.map((element, index) => {
          return <Img key={index} fluid={element.node.childImageSharp.fluid} />
        })}
      </Masonry>
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
