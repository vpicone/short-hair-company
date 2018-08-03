import React, { Fragment } from 'react';
import { Image, Segment, Header } from 'semantic-ui-react';
import { Element } from 'react-scroll';

import Hours from './Hours';

const Contact = () => (
  <Fragment>
    <Image
      src="https://res.cloudinary.com/vpp/image/upload/f_auto,q_auto/v1525204549/shc-storefront_pwybhw.jpg"
      alt="store front"
      rounded
      size="large"
      style={{ marginBottom: '1em' }}
    />
    <Element name="contact">
      <Segment inverted padded>
        <Image
          src="https://res.cloudinary.com/vpp/image/upload/f_auto,q_auto/v1530111964/staticmap2_vwmtac.png"
          as="a"
          alt="map for directions"
          rounded
          centered
          label={{ color: 'red', content: 'Directions', icon: 'map', ribbon: true }}
          href="https://goo.gl/maps/et3JhJnmU8C2"
          target="_blank"
          rel="noreferrer"
        />
        <address style={{ fontSize: '1.25em', marginTop: '0.5em', textAlign: 'center' }}>
          2101 S 1st St Austin, TX 78704
        </address>
        <Hours />
        <Header textAlign="center" as="h3" inverted>
          Call:{' '}
          <a style={{ color: 'white', textDecoration: 'underline' }} href="tel:512-806-9092">
            512-806-9092
          </a>
        </Header>
      </Segment>
    </Element>
  </Fragment>
);

export default Contact;
