import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import * as t from '../Typography';
import { AboutStyle } from '../pages/style';

export const About = props => {
  const {
    file: { childImageSharp }
  } = useStaticQuery(graphql`
    query About {
      file(relativePath: { eq: "about_shape_bg.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <AboutStyle>
      <div className="title">
        <Img fluid={childImageSharp.fluid} />
        <t.H1>About me</t.H1>
      </div>
    </AboutStyle>
  );
};
