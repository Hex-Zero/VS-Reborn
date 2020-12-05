import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/layout";
import SEO from "../components/seo";
import ContackForm from "../components/contactForm";

const Contact = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  console.log(data.allFile.edges[2].node.childImageSharp.fluid);
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Contact" />
      <ContackForm></ContackForm>
      <div className="max-social-links">
        <a href="#"></a>
      </div>
      <div className="max-map-container">
        <div className="max-map-image">
          <Img fluid={data.allFile.edges[2].node.childImageSharp.fluid} />
        </div>
      </div>
    </Layout>
  );
};

export default Contact;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allFile(filter: { sourceInstanceName: { eq: "assets" } }) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 12700) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
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
`;
