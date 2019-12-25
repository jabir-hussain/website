import styled from 'styled-components';
import { media } from './MediaQueries';

export const SIZES = {
  XXL: '70px',
  XL: '45px',
  L: '32px',
  ML: '24px',
  M: '21px',
  S: '18px',
  XS: '16px',
  XXS: '12px'
};

export const LINE_HEIGHTS = {
  XXXXL: '2.24',
  XXXL: '2.22',
  XXL: '1.81',
  XL: '1.62',
  L: '1.38',
  M: '1.5',
  S: 'normal',
  XS: '1.05',
  XXS: '0.9'
};

export const H1 = styled.h1`
	font-size: ${SIZES.XXL};
    color: ${props => props.theme.textColors.heading};
    font-weight: ${props => (props.bold ? 'bold' : props.thin ? '300' : 'normal')};
    text-align: ${props => (props.align ? props.align : 'inherit')};
    ${props => props.noMargin && 'margin: 0;'}
    ${props => (props.max45 ? 'max-width: 575px; margin: 0 auto;' : props.max70 && 'max-width: 950px; margin: 0 auto;')}
    ${media.phone`
        ${props => (props.max45 || props.max70) && 'max-width: 80%;'}
        font-size: 42px;
    `};
    margin: 10px 0;
`;

export const H2 = styled.h2`
	font-size: ${SIZES.XL};
    color: ${props => props.theme.textColors.heading};
    font-weight: ${props => (props.bold ? 'bold' : props.thin ? '300' : 'normal')};
    text-align: ${props => (props.align ? props.align : 'inherit')};
    ${props => props.noMargin && 'margin: 0;'}
    ${props => (props.max45 ? 'max-width: 575px; margin: 0 auto;' : props.max70 && 'max-width: 950px; margin: 0 auto;')}
    ${media.phone`${props => (props.max45 || props.max70) && 'max-width: 80%;'}`};

    margin: 10px 0;
`;

export const H3 = styled.h3`
	font-size: ${SIZES.L};
    color: ${props => props.theme.textColors.heading};
    font-weight: ${props => (props.bold ? 'bold' : props.thin ? '300' : 'normal')};
    text-align: ${props => (props.align ? props.align : 'inherit')};
    ${props => props.noMargin && 'margin: 0;'}
    ${props => (props.max45 ? 'max-width: 575px; margin: 0 auto;' : props.max70 && 'max-width: 950px; margin: 0 auto;')}
    ${media.phone`${props => (props.max45 || props.max70) && 'max-width: 80%;'}`};
    margin: 10px 0;
`;

export const H4 = styled.h4`
	font-size: ${SIZES.M};
    color: ${props => props.theme.textColors.heading};
    font-weight: ${props => (props.bold ? 'bold' : props.thin ? '300' : 'normal')};
    text-align: ${props => (props.align ? props.align : 'inherit')};
    ${props => props.noMargin && 'margin: 0;'}
    ${props => (props.max45 ? 'max-width: 575px; margin: 0 auto;' : props.max70 && 'max-width: 950px; margin: 0 auto;')}
    ${media.phone`${props => (props.max45 || props.max70) && 'max-width: 80%;'}`};
    margin: 10px 0;
`;

export const LargeP = styled.p`
	font-size: ${SIZES.M};
    color: ${props => props.theme.textColors.paragraph};
    font-weight: ${props => (props.bold ? 'bold' : props.thin ? '300' : 'normal')};
    text-align: ${props => (props.align ? props.align : 'inherit')};
    ${props => props.noMargin && 'margin: 0;'}
    ${props => (props.max45 ? 'max-width: 575px; margin: 0 auto;' : props.max70 && 'max-width: 950px; margin: 0 auto;')}
    ${media.phone`${props => (props.max45 || props.max70) && 'max-width: 80%;'}`}

    > a {
        text-decoration: none;
    }
`;

export const P = styled.p`
	font-size: ${SIZES.XS};
    line-height: ${LINE_HEIGHTS.M};
    color: ${props => props.theme.textColors.paragraph};
    font-weight: ${props => (props.bold ? 'bold' : props.thin ? '300' : 'normal')};
    text-align: ${props => (props.align ? props.align : 'inherit')};
    ${props => props.noMargin && 'margin: 0;'}
    ${props => (props.max45 ? 'max-width: 575px; margin: 0 auto;' : props.max70 && 'max-width: 950px; margin: 0 auto;')}
    ${media.phone`${props => (props.max45 || props.max70) && 'max-width: 80%;'}`}
`;
