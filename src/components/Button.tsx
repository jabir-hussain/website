import styled from 'styled-components';
import { lighten, darken } from 'polished';
import { Link } from 'gatsby';

type Props = { isNotFilled?: boolean };

export const Button = styled(Link)<Props>`
  background: ${props => (props.isNotFilled ? 'white' : props.theme.backgrounds.primary)};
  color: ${props => (props.isNotFilled ? props.theme.textColors.primary : 'white')};
  border: 2px solid ${props => (props.isNotFilled ? props.theme.backgrounds.primary : 'transparent')};
  line-height: 1.05;
  font-size: 16px;
  padding: 20px 40px;
  text-decoration: none;
  display: inline-block;
  border-radius: 6px;
  min-width: 150px;
  text-align: center;

  :hover {
    background: ${props => (props.isNotFilled ? props.theme.backgrounds.primary : 'white')};
    border-color: ${props => (props.isNotFilled ? 'white' : props.theme.backgrounds.primary)};
    color: ${props => (props.isNotFilled ? 'white' : props.theme.backgrounds.primary)};
  }
`;
