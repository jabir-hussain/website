import styled from 'styled-components';
import { transparentize } from 'polished';

export const HomepageWrapper = styled.div``;

export const HomeStyle = styled('section')`
  padding-bottom: 0;

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

export const AnyProjectInMindStyle = styled('');
