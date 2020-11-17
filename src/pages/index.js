import React, {useState } from "react"
import { graphql } from "gatsby"
import Img from 'gatsby-image'

import Layout from "../components/layout"
import SEO from "../components/seo"
import ImageModal from "../components/imageModal"

function returnLayoutSize(width, height) {
  if (width > height) {
    return "max-two-column-wide"
  } else if (width == height) {
    return ""
  } else {
    return "max-two-row-high"
  }
}

const BlogIndex = ({data, location}) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const [imageIndex, setImageIndex] = useState({event: {}, index: 0})
 

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="HOME" />
      <ImageModal imageIndex={imageIndex} imageArray={data.allFile.edges}></ImageModal>
      <section className="max-main-image-wrapper">
        {data.allFile.edges.map((element, index) => {
          const sharpChild = element.node.childImageSharp;
          const layout = returnLayoutSize(sharpChild.original.width, sharpChild.original.height)
          return <div key={index} onClick={e=>setImageIndex({event:e, index: index+1})} className={"max-main-image " + layout} ><Img 
            fluid={sharpChild.fluid}/></div>
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
