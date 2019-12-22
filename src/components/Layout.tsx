import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import GlobalStyles from '../GlobalStyles';
import * as Mixins from '../Mixins';

export const Content = styled.div`
  ${Mixins.contentMixin}
`;

export const LayoutWrapper = styled.div`
  position: relative;

  > section {
    min-height: 400px;
    padding: 60px 0 0;

    &:nth-child(odd) {
      background-color: ${props => props.theme.backgrounds.sectionPrimary};
    }

    &:nth-child(even) {
      background-color: ${props => props.theme.backgrounds.sectionSecondary};
    }
  }
`;

const Layout = ({ children, theme }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <GlobalStyles />
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content: 'Portfolio built using Gatsby and React'
            },
            { name: 'keywords', content: 'portfolio' }
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header theme={theme} />
        <LayoutWrapper>{children}</LayoutWrapper>
        {/* <Footer
          big={bigFooter}
          medium={mediumFooter}
          openContactPopup={openContactPopup}
        /> */}
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.string,
  bigFooter: PropTypes.bool,
  mediumFooter: PropTypes.bool
};

export default Layout;
