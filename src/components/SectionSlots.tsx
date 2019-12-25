import React from 'react';
import * as t from '../Typography';
import { BoxSection } from './BoxSection';
import styled from 'styled-components';
import { FluidObject } from 'gatsby-image';
import { Img } from './Img';
import { transparentize } from 'polished';

const SectionSlotsStyle = styled('section')`
  text-align: center;
  position: relative;

  &.any-project-in-mind {
    background: ${props => transparentize(0.1, props.theme.backgrounds.primary)} !important;

    .wrapper {
      > h2 {
        color: white;
        &:after {
          background-color: white;
        }
      }
    }

    .content > a {
      background-color: white;
      color: ${props => props.theme.backgrounds.primary};
    }
  }

  .wrapper {
    > h2 {
      display: inline-block;
      position: relative;
      padding-bottom: 10px;

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

    > .content {
      margin-top: 70px;
    }
  }

  > .gatsby-image-wrapper {
    position: absolute !important;
    top: 0;
    bottom: 0;
    width: 100%;
  }
`;

interface Props {
  className?: string;
  bgImg?: { fluid: FluidObject };
  children: {
    title: string;
    description?: string;
    content: React.ReactNode;
  };
}

function SectionSlots(props: Props) {
  const { children, bgImg, className } = props;
  const { title, description, content } = children;

  return (
    <SectionSlotsStyle className={className || ''}>
      <BoxSection>
        <div className="wrapper">
          <t.H2 bold>{title}</t.H2>

          {description && <t.P>{description}</t.P>}

          <div className="content">{content}</div>
        </div>
      </BoxSection>
      {bgImg && <Img fluid={bgImg.fluid} />}
    </SectionSlotsStyle>
  );
}

export default SectionSlots;
