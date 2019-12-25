import React from 'react';
import styled from 'styled-components';
import { transparentize } from 'polished';
import { FluidObject, FixedObject } from 'gatsby-image';

import * as t from '../Typography';
import { Img } from './Img';
import { styledComponentsLoop } from '../utils';

const ServiceCardsStyle = styled('div')`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 38px;

  > div {
    width: 100%;
    height: 300px;
    border-radius: 6px;
    position: relative;
    overflow: hidden;

    ${props => {
      return styledComponentsLoop(props.noOfCards, index => {
        return `:nth-child(${index + 1}) {
              .info {
                background-color: ${transparentize(0.1, props.theme.backgrounds.serviceCards[index])};
              }
            }`;
      });
    }}

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
    <div>
      <Img fluid={backgroundImg.fluid} />
      <div className="info">
        <div className="content">
          <Img fluid={icon.fluid} />
          <t.H3 bold>{title}</t.H3>
          <t.P>{description}</t.P>
        </div>
      </div>
    </div>
  );
}

function ServiceCards(props) {
  const { serviceCards } = props;

  return (
    <ServiceCardsStyle noOfCards={serviceCards.length}>
      {serviceCards.map((service, i) => (
        <ServiceCard
          key={`${i}_service`}
          title={service.title}
          description={service.description}
          backgroundImg={service.bgImg}
          icon={service.icon}
        />
      ))}
    </ServiceCardsStyle>
  );
}

export default ServiceCards;
