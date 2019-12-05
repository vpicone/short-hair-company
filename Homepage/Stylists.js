import React from 'react';
import { Card as SemCard, Button } from 'semantic-ui-react';
import styled from 'styled-components';

const Card = styled(SemCard)`
  min-width: 325px;
  margin: 1em;
  @media (min-width: 700px) {
    min-width: 400px;
  }
`;

const serviceMap = {
  '1': 'Standard Cut',
  '11': 'Buzz cut',
  '28': 'Spruce up w/o razor',
  '1152': 'Cut & Beard',
  '55': 'Old Fashioned',
  '61': 'Mr. Everything',
  '2117': 'The Makeover',
};

const employees = [
  {
    name: 'Dana Kelly',
    role: 'Stylist',
    id: 2259,
    services: [1, 11, 28, 1152, 55, 61, 2117],
    bio:
      'Dana has both Cosmetology and Barber licenses, she loves interacting with clients and building a rapport with them. She finds that being a barber is both incredibly challenging and rewarding.',
  },
  {
    name: 'Damien R',
    role: 'Owner and Stylist',
    id: 2,
    services: [1, 11, 28, 1152, 2117],
    bio:
      'A local business owner with nearly a decade of hair cutting experience. Comfortable with clippers, scissors and any texture of hair. Has a son in college and enjoys down to earth people.',
  },
  {
    name: 'Keesha Holland',
    role: 'Stylist',
    id: 1500,
    services: [1, 11, 28, 1152, 2117],
    bio:
      "Born and raised in Chicago, moved to texas 4 years ago. Loves watching and talking football. Her specialty is men's cuts and textures and taking care of her two kids.",
  },
  {
    name: 'Bradley Jackson',
    role: 'Stylist',
    id: 623,
    services: [1, 11, 28, 1152, 55, 61],
    bio:
      'Born and raised in Austin. Joined Bevelle Barber School in 2016. Specializes in haircuts, shaves, and mens facials. Loves the laid back atmosphere and music at Short Hair Co.',
  },
  {
    name: 'Keir Bashmakov',
    role: 'Stylist',
    id: 1646,
    services: [1, 11, 28, 1152, 55, 61, 2117],
    bio:
      'Keir is a barber, bassist, and writer from Northern California. She loves everything sci-fi and surf rock. On her off time, she enjoys spending time at the springs, the green belt, or just making things with friends.',
  },
];

const StylistCard = ({ name, id, services, bio, role }) => (
  <Card padded="true" color="red">
    <Card.Content>
      {/* <Image rounded floated='right' size='tiny' src='https://via.placeholder.com/200' /> */}
      <Card.Header
        as="a"
        href={`https://shorthair.fullslate.com/employees/${id}`}
      >
        {name}
      </Card.Header>
      <Card.Meta>{role}</Card.Meta>
      <p>{bio}</p>
    </Card.Content>
    <Card.Content extra>
      <Button.Group
        style={{
          display: 'flex',
          flexWrap: `${services.length > 3 ? 'wrap' : 'no-wrap'}`,
        }}
      >
        {services.map(serviceId => (
          <Button
            basic
            fitted="true"
            compact
            href={`https://shorthair.fullslate.com/employees/${id}?services%5B%5D=${serviceId}`}
            key={serviceId}
          >
            {serviceMap[serviceId]}
          </Button>
        ))}
      </Button.Group>
    </Card.Content>
  </Card>
);

const Stylists = () => (
  <Card.Group
    style={{ maxWidth: '800px', justifyContent: 'center', marginBottom: '1em' }}
  >
    {employees.map(({ id, services, name, bio, role }) => (
      <StylistCard
        key={id}
        id={id}
        services={services}
        name={name}
        bio={bio}
        role={role}
      />
    ))}
  </Card.Group>
);

export default Stylists;
