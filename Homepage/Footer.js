import { Segment, Container, Header } from 'semantic-ui-react';

const Footer = () => (
  <Segment textAlign="center" inverted style={{ padding: '3em 0em', margin: '0' }}>
    <Container>
      <Header as="h4" inverted>
        Website by <a href="https://www.vincepic.one">Vince Picone</a>
      </Header>
    </Container>
  </Segment>
);

export default Footer;
