import { Fragment } from 'react';
import { Table, Header } from 'semantic-ui-react';

const Hours = () => (
  <Fragment>
    <Header as="h2">Hours</Header>
    <Table basic compact inverted unstackable>
      <Table.Body>
        <Table.Row>
          <Table.Cell>Mon-Fri</Table.Cell>
          <Table.Cell>9AM-7PM</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Saturday</Table.Cell>
          <Table.Cell>9AM-6PM</Table.Cell>
        </Table.Row>
        <Table.Row disabled>
          <Table.Cell>Sunday</Table.Cell>
          <Table.Cell>Closed</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  </Fragment>
);

export default Hours;
