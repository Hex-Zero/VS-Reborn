import React from "react";
import { graphql, Img } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const Contact = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  console.log(data);
  console.log(data.staticMap.childFile.childImageSharp.fluid);
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Contact" />
      <img src={data.staticMap.childFile.childImageSharp.fluid.src} />
      <ContactForm></ContactForm>
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
