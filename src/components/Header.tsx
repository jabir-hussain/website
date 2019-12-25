import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { withTheme } from 'styled-components';
import Helmet from 'react-helmet';
import { BoxSection } from './BoxSection';
import { convertArrayToObject } from '../utils';

const HeaderWrapper = styled('header')`
  background: #fff;
  padding: 10px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;

  &.scrolled {
    box-shadow: ${props => props.theme.boxShadow};
  }
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
    position: relative;
    margin-left: 40px;
    padding: 3px 0;
    cursor: pointer;
    border-bottom: 2px solid transparent;

    :after {
      transition: width 0.3s ease-in-out;
      content: '';
      position: absolute;
      top: 100%;
      width: 0;
      left: 0;
      height: 2px;
      z-index: 1;
      background-color: ${props => props.theme.backgrounds.primary};
    }

    :hover,
    &.active {
      > a {
        color: ${props => props.theme.backgrounds.primary};
      }

      :after {
        width: 50%;
      }
    }

    > a {
      text-decoration: none;
      color: ${props => props.theme.textColors.heading};
    }
  }
`;

const navs = [
  {
    title: 'Home',
    target: 'home',
    active: true
  },
  {
    title: 'About',
    target: 'about',
    active: false
  },
  {
    title: 'Services',
    target: 'services',
    active: false
  },
  {
    title: 'Porfolio',
    target: 'latest-works',
    active: false
  }
];

const Header = (props: any) => {
  const [navList, updateNavList] = useState(navs);
  const [isHeaderSticky, setHeaderSticky] = useState(false);

  useEffect(() => {
    const sectionsList = navList.map(nav => {
      const element = document.getElementById(nav.target);

      return { ...nav, top: element.offsetTop, height: element.clientHeight };
    });
    const sectionsTop = convertArrayToObject(sectionsList, 'title');

    const withInSectionRange = scrollTop => {
      updateNavList(list =>
        list.map(i => {
          const sectionObj = sectionsTop[i.title];
          const minRange = sectionObj.top - 50;
          const maxRange = sectionObj.top + sectionObj.height;

          if (minRange <= scrollTop && scrollTop <= maxRange) {
            return { ...i, active: true };
          }

          return { ...i, active: false };
        })
      );
    };

    const onWindowScroll = event => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      setHeaderSticky(scrollTop > 0);
      withInSectionRange(scrollTop);
    };

    window.addEventListener('scroll', onWindowScroll);

    return function cleaner() {
      window.removeEventListener('scroll', onWindowScroll);
    };
  }, []);

  return (
    <HeaderWrapper className={isHeaderSticky ? 'scrolled' : ''}>
      <Helmet>
        <body />
      </Helmet>
      <BoxSection>
        <ContentWrapper>
          <Logo href="/">JH.</Logo>
          <HeaderNav>
            <MenuList>
              {navList.map(nav => {
                return (
                  <li className={nav.active ? 'active' : ''}>
                    <a href={`#${nav.target}`}>{nav.title}</a>
                  </li>
                );
              })}
              <li>
                <a target="_blank" href="https://medium.com/@jabirhussainturi">
                  Blog
                </a>
              </li>
            </MenuList>
          </HeaderNav>
        </ContentWrapper>
      </BoxSection>
    </HeaderWrapper>
  );
};

export default withTheme(Header);
