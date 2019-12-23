import React, { useState, useCallback, FC } from 'react';
import { useStaticQuery } from 'gatsby';
import * as t from '../Typography';
import Layout, { Content } from '../components/Layout';
// import Placeholder from '../images/placeholder.png';
// import { HireMe, LinkButton } from '../components/Button.js';
// import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import { HomeStyle, AboutStyle, HomepageWrapper, ServicesStyle } from '../style';
import { Button } from '../components/Button';
import { BoxSection } from '../components/BoxSection';
import { useGetImage } from '../utils';
import { Img } from '../components/Img';

const Home = props => {
  const { name, designation, hero_img } = props;

  return (
    <HomeStyle>
      <BoxSection>
        <div className="wrapper">
          <div className="content">
            <t.H1 bold>I'm {name}</t.H1>
            <t.H4>{designation}</t.H4>
            <Button>Hire Me</Button>
          </div>

          <div className="image-wrapper">
            <Img fluid={hero_img.fluid} />
          </div>
        </div>
      </BoxSection>
    </HomeStyle>
  );
};

const About = props => {
  const { about_shap_bg } = props;

  return (
    <AboutStyle>
      <BoxSection>
        <div className="about-wrapper">
          <div className="title">
            <Img fluid={about_shap_bg.fluid} />
            <t.H2 bold>About me</t.H2>
          </div>

          <div className="description">
            <t.P>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </t.P>

            <t.P>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nu pariatur
              excepteur sint occaecat.
            </t.P>

            <div className="actions-wrapper">
              <Button>View Works</Button>
              <Button>Download CV</Button>
            </div>
          </div>
        </div>
      </BoxSection>
    </AboutStyle>
  );
};

const Services = props => {
  return (
    <ServicesStyle>
      <BoxSection>
        <div className="wrapper">
          <t.H2 bold>Services</t.H2>

          <t.P>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum. Sed ut perspiciatis unde omnis iste natur
          </t.P>
        </div>
      </BoxSection>
    </ServicesStyle>
  );
};
const Homepage = props => {
  const { title, name, designation, images } = useGetImage(['hero_img', 'about_shap_bg']);

  return (
    <HomepageWrapper>
      <Layout>
        <Home name={name} designation={designation} hero_img={images.hero_img} />
        <About about_shap_bg={images.about_shap_bg} />
        <Services />
        <Services />
      </Layout>
    </HomepageWrapper>
  );
};

export default Homepage;
