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
  latestWorks: {
    title: string;
    bgImg: string;
  }[];
  workExperiences: {
    title: string;
    startDate: string;
    endDate: string;
    companyName: string;
    description: string;
  }[];
}

export const useGetImage = (): GetImageReturnProps => {
  const {
    site: {
      siteMetadata: { title, name, designation, services, latestWorks, workExperiences }
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
          latestWorks {
            bgImg
            title
          }
          workExperiences {
            title
            startDate
            endDate
            companyName
            description
          }
        }
      }
      allImageSharp {
        edges {
          node {
            fluid(fit: CONTAIN, sizes: "") {
              base64
              tracedSVG
              aspectRatio
              src
              srcSet
              srcWebp
              srcSetWebp
              sizes
              originalImg
              originalName
              presentationWidth
              presentationHeight
            }
          }
        }
      }
    }
  `);
  return { title, name, designation, services, latestWorks, workExperiences, images: edges };
};

export const styledComponentsLoop = (noOfChilds, executeString) => {
  let str = '';
  for (let index = 0; index < noOfChilds; index = index + 1) {
    str += executeString(index);
  }
  return str;
};

export const convertArrayToObject = (array, key) => {
  const initialValue = {};
  return array.reduce((obj, item) => {
    return {
      ...obj,
      [item[key]]: item
    };
  }, initialValue);
};
