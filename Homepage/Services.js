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
            <Table.Cell>$28</Table.Cell>
            <Table.Cell>
              Stylist will preform a short hair cut using clippers and scissors.
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Buzz Cut</Table.Cell>
            <Table.Cell>$20</Table.Cell>
            <Table.Cell>
              You choose. 1. A single clipper guard all over OR 2.A clean up on
              the sides and back with scissors or clippers
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Spruce up w/o razor</Table.Cell>
            <Table.Cell>$20</Table.Cell>
            <Table.Cell>
              $20-We incorporate a combination of clippers and scissors to shape
              up your beard. $20-Beard work with razor
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Cut & Beard</Table.Cell>
            <Table.Cell>$45</Table.Cell>
            <Table.Cell>The Standard with a Spruce Up beard trim</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>The Old Fashioned</Table.Cell>
            <Table.Cell>$35</Table.Cell>
            <Table.Cell>
              Includes hot lather , essential oils and a three-step hot towel
              process to ensure the cleanest shave. Finished with an after shave
              balm and cool towel.
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
              When its time to change the game up and go from longer hair to short.
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  </Element>
);

export default Services;
