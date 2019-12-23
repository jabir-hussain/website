import React from 'react';
import styled from 'styled-components';
import { transparentize } from 'polished';
import { FluidObject, FixedObject } from 'gatsby-image';

import * as t from '../Typography';
import { Img } from './Img';

const ServiceCardStyle = styled('div')`
  width: 100%;
  height: 300px;
  border-radius: 6px;
  position: relative;
  overflow: hidden;

  :nth-child(1) {
    .info {
      background-color: ${props => transparentize(0.1, props.theme.backgrounds.serviceCards[0])};
    }
  }

  :nth-child(2) {
    .info {
      background-color: ${props => transparentize(0.1, props.theme.backgrounds.serviceCards[1])};
    }
  }

  :nth-child(3) {
    .info {
      background-color: ${props => transparentize(0.1, props.theme.backgrounds.serviceCards[2])};
    }
  }

  :nth-child(4) {
    .info {
      background-color: ${props => transparentize(0.1, props.theme.backgrounds.serviceCards[3])};
    }
  }

  .info {
    text-align: left;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    h3,
    p {
      color: white;
    }

    .content {
      padding: 56px;
    }
    .gatsby-image-wrapper {
      width: 40px;
      height: 50px;

      img {
        object-fit: fill !important;
      }
    }
  }
`;

interface Props {
  title: string;
  description: string;
  backgroundImg: { fluid: FluidObject };
  icon: { fluid: FixedObject };
}

function ServiceCard(props: Props) {
  const { title, description, backgroundImg, icon } = props;

  return (
    <ServiceCardStyle>
      <Img fluid={backgroundImg.fluid} />
      <div className="info">
        <div className="content">
          <Img fluid={icon.fluid} />
          <t.H3 bold>{title}</t.H3>
          <t.P>{description}</t.P>
        </div>
      </div>
    </ServiceCardStyle>
  );
}

export default ServiceCard;
