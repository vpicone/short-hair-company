import { Segment, Container, Header } from 'semantic-ui-react';

const Footer = () => (
  <Segment textAlign="center" inverted style={{ padding: '3em 0em', margin: '0' }}>
    <Container>
      <Header inverted as="h4">
        Website by <a style={{color: 'white', textDecoration: 'underline'}} href="https://www.vincepicone.com">Vince Picone</a>
      </Header>
    </Container>
  </Segment>
);

export default Footer;
