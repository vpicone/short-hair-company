import { Fragment } from 'react';
import { Image, Segment, Header } from 'semantic-ui-react';
import { Element } from 'react-scroll';

import Hours from './Hours';

const Contact = () => (
  <Fragment>
    <Image
      src="https://res.cloudinary.com/vpp/image/upload/f_auto,q_auto/v1525204549/shc-storefront_pwybhw.jpg"
      rounded
      size="large"
      style={{ marginBottom: '1em' }}
    />
    <Element name="contact">
      <Segment inverted padded>
        <Image
          src="https://res.cloudinary.com/vpp/image/upload/f_auto,q_auto/v1526331127/static_ueocat.png"
          as="a"
          rounded
          centered
          label={{ color: 'red', content: 'Directions', icon: 'map', ribbon: true }}
          href="https://www.google.com/maps/dir//Short+Hair+Company/"
          target="_blank"
        />
        <address style={{ fontSize: '1.25em', marginTop: '0.5em', textAlign: 'center' }}>
          114 S Congress Ave, Austin, TX 78704
        </address>
        <Hours />
        <Header textAlign="center" as="h3" inverted>
          Call: <a href="tel:512-806-9092">512-806-9092</a>
        </Header>
      </Segment>
    </Element>
  </Fragment>
);

export default Contact;
