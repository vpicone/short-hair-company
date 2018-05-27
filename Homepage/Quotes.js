import { Segment, Container, Header, Button, Icon } from 'semantic-ui-react';

const Quotes = () => (
  <Segment style={{ padding: '8em 0em' }} vertical>
    <Container textAlign="center" text>
      <Header as="h3" style={{ fontSize: '2em' }}>
        Come get a haircut you can be proud of.
      </Header>
      <Button href="https://shorthair.fullslate.com/" primary size="large" style={{ marginTop: '1em' }}>
        Make an appointment
        <Icon name="right arrow" />
      </Button>
    </Container>
  </Segment>
);

export default Quotes;
