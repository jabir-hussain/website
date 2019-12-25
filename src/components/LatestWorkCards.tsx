import React from 'react';
import styled from 'styled-components';
import { transparentize } from 'polished';

import * as t from '../Typography';
import { Img } from './Img';
import { FluidObject } from 'gatsby-image';

const LatestWorkCardsStyle = styled('ul')`
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
  padding: 0;

  > li {
    position: relative;
    border: 1px solid ${props => props.theme.backgrounds.primary};
    border-radius: 6px;
    overflow: hidden;

    :nth-child(1) {
      grid-row: span 2;
      grid-column: span 2;
    }

    :nth-child(8) {
      grid-column: span 2;
    }

    span {
      color: white;
      margin: 0;
      padding: 5px;
      font-size: 13px;
    }

    .overlay {
      background-color: ${props => transparentize(0.2, props.theme.backgrounds.primary)};
      display: flex;
      position: absolute;
      top: 0;
      z-index: 1;
      text-align: left;
      margin: 0;
      border-bottom-right-radius: 6px;
    }
  }
`;
interface Props {
  latestWorksCards: {
    title: string;
    bgImg: { fluid: FluidObject };
  }[];
}

function LatestWorkCards(props: Props) {
  const { latestWorksCards } = props;

  return (
    <LatestWorkCardsStyle>
      {latestWorksCards.map((work, i) => (
        <li key={`${i}_work`}>
          <div className="overlay">
            <span>{work.title}</span>
          </div>

          <Img fluid={work.bgImg.fluid} />
        </li>
      ))}
    </LatestWorkCardsStyle>
  );
}

export default LatestWorkCards;
