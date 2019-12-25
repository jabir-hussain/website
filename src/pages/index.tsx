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
import SectionSlots from '../components/SectionSlots';
import ServiceCards from '../components/ServiceCards';
import LatestWorkCards from '../components/LatestWorkCards';
import WorkExperiences from '../components/WorkExperiences';

const Home = props => {
  const { name, designation, images } = props;
  const imageObj = getImages(['hero_img'], images);

  return (
    <HomeStyle id="home">
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
    <AboutStyle id="about">
      <BoxSection>
        <div className="about-wrapper">
          <div className="title">
            <Img fluid={imageObj.about_shap_bg.fluid} />
            <t.H2 bold>About me</t.H2>
          </div>

          <div className="description">
            <t.P>
              I've almost 6 years of experience in software development. I'm currently working as Senior Software
              Engineer for eMumba Inc. which is based in Islamabad.
            </t.P>

            <t.P>
              The best and exciting thing about my current job is that I have been challenged to work on task of
              different new technologies on a number of occasion which I accepted and carried out handsomely. It not
              only enhanced my skills but has also given me the confidence that I can make my hands dirty in almost any
              technology in a quick time and meet tight deadlines in a very professional environment.
            </t.P>

            <t.P>
              I have excellent analytical and problem solving skills. I have always been able to establish and maintain
              excellent relationships with coworkers at all levels.
            </t.P>

            <div className="actions-wrapper">
              <Button>View Works</Button>
              <Button isNotFilled>Download CV</Button>
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

  return (
    <SectionSlots id="services">
      {{
        title: 'Services',
        description: `Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum. Sed ut perspiciatis unde omnis iste natur`,
        content: <ServiceCards serviceCards={serviceCards} />
      }}
    </SectionSlots>
  );
};

const LatestWorks = props => {
  const { latestWorks, images } = props;
  const bgImgs = latestWorks.map(({ bgImg }) => bgImg);
  const imagesObj = getImages(bgImgs, images);
  const latestWorksCards = latestWorks.map(work => ({
    ...work,
    bgImg: imagesObj[work.bgImg]
  }));

  return (
    <SectionSlots id="latest-works">
      {{
        title: 'Latest Works',
        description: `Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
      laborum. Sed ut perspiciatis unde omnis iste natur`,
        content: <LatestWorkCards latestWorksCards={latestWorksCards} />
      }}
    </SectionSlots>
  );
};

const WorkExperience = props => {
  const { workExperiences } = props;

  return (
    <SectionSlots id="work-experiences">
      {{
        title: 'Work Experiences',
        description: `Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
      laborum. Sed ut perspiciatis unde omnis iste natur`,
        content: <WorkExperiences workExperiences={workExperiences} />
      }}
    </SectionSlots>
  );
};

const AnyProjectInMind = props => {
  const { images } = props;
  const bgImg = getImages(['hire_bg'], images);

  return (
    <SectionSlots id="any-project-in-mind" bgImg={bgImg.hire_bg} className="any-project-in-mind">
      {{
        title: 'Any Project In Mind',
        content: <Button isNotFilled>Hire Me</Button>
      }}
    </SectionSlots>
  );
};

const Homepage = props => {
  const { services, workExperiences, latestWorks, name, designation, images } = useGetImage();

  return (
    <HomepageWrapper>
      <Layout>
        <Home name={name} designation={designation} images={images} />
        <About images={images} />
        <Services services={services} images={images} />
        <LatestWorks latestWorks={latestWorks} images={images} />
        <WorkExperience workExperiences={workExperiences} />
        <AnyProjectInMind images={images} />
      </Layout>
    </HomepageWrapper>
  );
};

export default Homepage;
