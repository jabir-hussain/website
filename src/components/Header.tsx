import React from 'react';
import styled from 'styled-components';
import { withTheme } from 'styled-components';
import Helmet from 'react-helmet';
import { BoxSection } from './BoxSection';

const HeaderWrapper = styled('header')`
  background: #fff;
  padding: 10px;
`;
const ContentWrapper = styled('div')`
  display: flex;
`;
const Logo = styled('div')`
  flex: 50px;
  text-align: center;
  font-size: 32px;
  font-weight: bold;
  padding: 5px 0;
  color: ${props => props.theme.backgrounds.primary};
`;
const HeaderNav = styled('nav')`
  flex: calc(100% - 50px);
  text-align: right;
`;
const MenuList = styled('ul')`
  list-style: none;
  display: flex;
  text-align: right;
  float: right;

  > li {
    margin-left: 15px;
    cursor: pointer;
    border-bottom: 2px solid transparent;

    :hover {
      border-color: #fdb633;
    }
  }
`;
const Burger = styled('div')``;

const Header = (props: any) => {
  return (
    <HeaderWrapper>
      <Helmet>
        <body />
      </Helmet>
      <BoxSection>
        <ContentWrapper>
          <Logo href="/">JH.</Logo>
          <HeaderNav>
            <MenuList>
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Portfolio</li>
              <li>Contact</li>
              <li>Blog</li>
            </MenuList>
          </HeaderNav>
        </ContentWrapper>
      </BoxSection>
    </HeaderWrapper>
  );
};

export default withTheme(Header);
