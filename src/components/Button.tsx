import styled from 'styled-components';
import { lighten, darken } from 'polished';
import { Link } from 'gatsby';

export const Button = styled(Link)`
  background: ${props => props.theme.backgrounds.primary};
  color: ${props => 'white'};
  border: 2px solid transparent;
  line-height: 1.05;
  font-size: 16px;
  padding: 15px 40px;
  text-decoration: none;
  display: inline-block;
  border-radius: 6px;

  :hover {
    background: transparent;
    border-color: ${props => props.theme.backgrounds.primary};
    color: ${({ theme }) => theme.backgrounds.primary};
  }
`;
