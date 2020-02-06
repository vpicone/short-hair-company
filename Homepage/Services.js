import React from 'react';
import { Table } from 'semantic-ui-react';
import { Element } from 'react-scroll';

const Services = () => (
  <Element name="services">
    <div style={{ marginTop: '3em' }}>
      <h2>Services</h2>
      <Table basic compact unstackable>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Standard Cut</Table.Cell>
            <Table.Cell>$32</Table.Cell>
            <Table.Cell>
              Stylist will preform a short hair cut using clippers and scissors
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Buzz Cut</Table.Cell>
            <Table.Cell>$20</Table.Cell>
            <Table.Cell>A single clipper guard all over.</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Spruce up w/o razor</Table.Cell>
            <Table.Cell>$20</Table.Cell>
            <Table.Cell>
              We'll incorporate a combination of clippers and scissors to shape up your beard with or with a razor.
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Cut & Beard</Table.Cell>
            <Table.Cell>$53</Table.Cell>
            <Table.Cell>The standard and The spruce up. $5 off if a razor isn't used on a beard</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>The Old Fashioned</Table.Cell>
            <Table.Cell>$40</Table.Cell>
            <Table.Cell>
              Includes hot lather, essential oils and a three-step hot towel
              process to ensure the cleanest shave
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Mr. Everything</Table.Cell>
            <Table.Cell>$58</Table.Cell>
            <Table.Cell>
              An <strike>un</strike>
              holy union of The Standard and the Old Fashioned Shave
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>The Makeover</Table.Cell>
            <Table.Cell>$60</Table.Cell>
            <Table.Cell>
              When its time to change the game up and go from longer hair to
              short
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  </Element>
);

export default Services;
