import { graphql, useStaticQuery } from 'gatsby';
import { FluidObject } from 'gatsby-image';

function getImages(imageNames, edges) {
  const finalObj = {};
  imageNames.forEach(name => {
    const foundedEdge = edges.find(edge => {
      return edge.node.fluid.src.includes(name);
    });

    if (!foundedEdge) return null;

    finalObj[name] = foundedEdge.node;
  });

  return finalObj;
}

interface ImageProp {
  [key: string]: { fluid: FluidObject };
}

interface GetImageReturnProps {
  title: string;
  name: string;
  designation: string;
  images: ImageProp;
}

export const useGetImage = (imageNames: string[]): GetImageReturnProps => {
  const {
    site: {
      siteMetadata: { title, name, designation }
    },
    allImageSharp: { edges }
  } = useStaticQuery(graphql`
    query GetImage {
      site {
        siteMetadata {
          title
          name
          designation
        }
      }
      allImageSharp {
        edges {
          node {
            fluid(maxWidth: 600) {
              src
              sizes
            }
          }
        }
      }
    }
  `);
  console.log('edges', edges);
  return { title, name, designation, images: getImages(imageNames, edges) };
};
