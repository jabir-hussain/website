import React from 'react';
import styled from 'styled-components';
import { Content } from './Layout';

const FooterWrapper = styled.div``;

const Copyright = styled.p`
  text-align: center;
`;

const Footer = ({ big, medium }) => (
  <FooterWrapper {...(big && { big })} {...(medium && { medium })}>
    <Content>
      <Copyright white align="center">
        © Name Surname 2019. All rights reserved.
      </Copyright>
    </Content>
  </FooterWrapper>
);

export default Footer;
