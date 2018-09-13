import React from 'react';
import { Table } from 'semantic-ui-react';

import { Element } from 'react-scroll';

const Services = () => (
  <Element style={{ display: 'flex', justifyContent: 'center' }} name="services">
    <Table
      style={{
        padding: '0.5em',
        maxWidth: '600px',
        backgroundColor: '#fcfcfc',
        marginBottom: '2em',
      }}
    >
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell textAlign="center" style={{ fontSize: '1.6em' }} colSpan="3">
            Services
          </Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell>Standard Cut</Table.Cell>
          <Table.Cell>$28</Table.Cell>
          <Table.Cell>
            Stylist will preform a short hair cut using clippers and scissors.
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Clean Up</Table.Cell>
          <Table.Cell>$20</Table.Cell>
          <Table.Cell>A single guard all over, executed pefectly.</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Beard Trim</Table.Cell>
          <Table.Cell>$15</Table.Cell>
          <Table.Cell>
            We incorporate a combination of clippers and scissors to shape up your beard.
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Cut & Beard</Table.Cell>
          <Table.Cell>$43</Table.Cell>
          <Table.Cell>The Standard with a Spruce Up beard trim</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>The Old Fashioned</Table.Cell>
          <Table.Cell>$35</Table.Cell>
          <Table.Cell>
            Includes hot lather , essential oils and a three-step hot towel process to ensure the
            cleanest shave. Finished with an after shave balm and cool towel.
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Mr. Everything</Table.Cell>
          <Table.Cell>$55</Table.Cell>
          <Table.Cell>
            An <strike>un</strike>
            holy union of The Standard and the Old Fashioned Shave
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  </Element>
);

export default Services;
