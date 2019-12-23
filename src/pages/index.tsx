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
import { useGetImage, getImages } from '../utils';
import { Img } from '../components/Img';
import ServiceCard from '../components/ServiceCard';

const Home = props => {
  const { name, designation, images } = props;
  const imageObj = getImages(['hero_img'], images);

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
            <Img fluid={imageObj.hero_img.fluid} />
          </div>
        </div>
      </BoxSection>
    </HomeStyle>
  );
};

const About = props => {
  const { images } = props;
  const imageObj = getImages(['about_shap_bg'], images);

  return (
    <AboutStyle>
      <BoxSection>
        <div className="about-wrapper">
          <div className="title">
            <Img fluid={imageObj.about_shap_bg.fluid} />
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
  const { services, images } = props;
  const icons = services.map(({ icon }) => icon);
  const bgImgs = services.map(({ bgImg }) => bgImg);
  const imageNames = [...icons, ...bgImgs];
  const imagesObj = getImages(imageNames, images);
  const serviceCards = services.map(service => ({
    ...service,
    icon: imagesObj[service.icon],
    bgImg: imagesObj[service.bgImg]
  }));

  console.log('serviceCards', serviceCards);
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

        <div className="services-list">
          {serviceCards.map((service, i) => (
            <ServiceCard
              key={`${i}_service`}
              title={service.title}
              description={service.description}
              backgroundImg={service.bgImg}
              icon={service.icon}
            />
          ))}
        </div>
      </BoxSection>
    </ServicesStyle>
  );
};
const Homepage = props => {
  const { services, name, designation, images } = useGetImage();

  return (
    <HomepageWrapper>
      <Layout>
        <Home name={name} designation={designation} images={images} />
        <About images={images} />
        <Services services={services} images={images} />
      </Layout>
    </HomepageWrapper>
  );
};

export default Homepage;
