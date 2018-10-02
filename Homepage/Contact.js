import React from 'react';
import { Image, Segment, Header } from 'semantic-ui-react';
import { Element } from 'react-scroll';
import Services from './Services';

import Hours from './Hours';

const Contact = () => (
  <div style={{ marginTop: '1rem' }}>
    <Image
      src="https://res.cloudinary.com/vpp/image/upload/f_auto,q_auto/v1536342740/shc/albums.jpg"
      alt="album wall"
      rounded
      size="large"
      style={{ marginBottom: '1em' }}
    />
    <Element name="contact">
      <Segment padded>
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
        <Header textAlign="center" as="h3">
          Call:{' '}
          <a style={{ color: '#020202', textDecoration: 'underline' }} href="tel:512-806-9092">
            512-806-9092
          </a>
        </Header>
        <address style={{ fontSize: '1.25em', marginTop: '0.5em', textAlign: 'center' }}>
          2101 S 1st St Austin, TX 78704
        </address>
        <Hours />
        <Services />
      </Segment>
    </Element>
  </div>
);

export default Contact;
