import { graphql, useStaticQuery } from 'gatsby';
import { FluidObject } from 'gatsby-image';

interface ImageReturnProps {
  [key: string]: { fluid: FluidObject };
}

export function getImages(imageNames, edges): ImageReturnProps {
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
  node: { fluid: FluidObject };
}

interface GetImageReturnProps {
  title: string;
  name: string;
  designation: string;
  images: ImageProp[];
  services: {
    title: string;
    description: string;
    icon: string;
    bgImg: string;
  }[];
}

export const useGetImage = (): GetImageReturnProps => {
  const {
    site: {
      siteMetadata: { title, name, designation, services }
    },
    allImageSharp: { edges }
  } = useStaticQuery(graphql`
    query GetImage {
      site {
        siteMetadata {
          title
          name
          designation
          services {
            bgImg
            description
            icon
            title
          }
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
  return { title, name, designation, services, images: edges };
};
