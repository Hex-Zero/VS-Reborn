import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import ContackForm from "../components/contactForm";

const Contact = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  console.log(data);
  console.log(data.staticMap.childFile.childImageSharp.fluid);
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Contact" />
      <ContackForm></ContackForm>
      <img src={data.staticMap.childFile.childImageSharp.fluid.src} />
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
    staticMap {
      childFile {
        childImageSharp {
          fluid {
            # or fixed
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`;
