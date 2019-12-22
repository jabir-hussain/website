import styled from 'styled-components';

export const HomepageWrapper = styled.div``;

export const HomeStyle = styled('section')`
  .wrapper {
    height: 658px;
    display: grid;
    grid-template-columns: 500px auto;
    padding-top: 25px;
  }

  .content {
    padding: 137px 0 0;

    h1 {
      font-size: 70px;
      margin: 10px 0;
      font-weight: bold;
    }

    h4 {
      margin: 10px 0;
    }

    a {
      margin-top: 20px;
    }
  }

  .image-wrapper {
    .gatsby-image-wrapper {
      height: 100%;
    }
  }
`;

export const AboutStyle = styled('section')`
  .about-wrapper {
    display: grid;
    grid-template-columns: 500px auto;
  }

  .title {
    position: relative;
    padding: 10px;

    > h2 {
      position: absolute;
      top: calc(50% - 30px);
      right: 50px;
    }
  }

  .gatsby-image-wrapper {
    height: 300px;
    width: 100%;
  }

  .actions-wrapper {
    margin-top: 35px;
  }

  a {
    margin-right: 10px;
  }
`;

export const ServicesStyle = styled('section')`
  text-align: center;

  .wrapper {
    > h2 {
      display: inline-block;
      position: relative;

      &:after {
        content: '';
        position: absolute;
        top: 100%;
        left: calc(50% - 50px);
        z-index: 1;
        width: 100px;
        height: 4px;
        background-color: ${props => props.theme.backgrounds.primary};
      }
    }
    > p {
      max-width: 800px;
      margin: 30px auto;
    }
  }
`;
