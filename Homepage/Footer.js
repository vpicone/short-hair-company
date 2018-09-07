import React from 'react';
import { Segment, Container, Header } from 'semantic-ui-react';

const Footer = () => (
  <Segment
    textAlign="center"
    inverted
    style={{
      padding: '3em 0em',
      margin: '0',
      borderRadius: '0',
      borderTopLeftRadius: '0.3rem',
      borderTopRightRadius: '0.3rem',
      backgroundColor: '#020202',
    }}
  >
    <Container>
      <Header style={{ color: '#fcfcfc' }} as="h4">
        Website by &nbsp;
        <a style={{ color: 'white', textDecoration: 'underline' }} href="https://www.raven.codes">
          RLW
        </a>
        &nbsp; & &nbsp;
        <a style={{ color: 'white', textDecoration: 'underline' }} href="https://vincepic.one">
          VPP
        </a>
      </Header>
    </Container>
  </Segment>
);

export default Footer;
