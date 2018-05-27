import { Card, Button } from 'semantic-ui-react';

const serviceMap = {
  '1': 'Standard',
  '11': 'Clean up',
  '28': 'Spruce Up',
  '55': 'Old Fashioned',
  '61': 'Mr. Everything',
};

const employees = [
  {
    name: 'Damien R',
    role: 'Owner and Stylist',
    id: 2,
    services: [1, 11, 28],
    bio:
      'A local business owner with nearly a decade of hair cutting experience. Comfortable with clippers, scissors and any texture of hair. Has a son in college and enjoys down to earth people.',
  },
  {
    name: 'Bradley Jackson',
    role: 'Stylist',
    id: 623,
    services: [1, 11, 55],
    bio:
      'Born and raised in Austin. Joined Bevelle Barber School in 2016. Specializes in haircuts, shaves, and mens facials. Loves the laid back atmosphere and music at Short Hair Co.',
  },
  {
    name: 'Joselyn',
    role: 'Stylist',
    id: 634,
    services: [1, 11, 28],
    bio:
      'Loves to have fun in everything she does. Cutting hair since 2011, wide variety of interests so enjoys talking to clients about theirs. Bilingual and fluent in Spanish.',
  },
  {
    name: 'Albert A',
    role: 'Stylist',
    id: 863,
    services: [1, 11, 28, 55, 61],
    bio:
      'From San Antonion, grew up in Austin. Loves being a barber and the opportunity to meet people from all walks of life. ',
  },
];

const StylistCard = ({ name, id, services, bio, role }) => (
  <Card fluid>
    <Card.Content>
      {/* <Image rounded floated='right' size='tiny' src='https://via.placeholder.com/200' /> */}
      <Card.Header as="a" href={`https://shorthair.fullslate.com/employees/${id}`}>
        {name}
      </Card.Header>
      <Card.Meta>{role}</Card.Meta>
      <p>{bio}</p>
    </Card.Content>
    <Card.Content extra>
      <Button.Group fluid style={{ display: 'flex', flexWrap: `${services.length > 3 ? 'wrap' : 'no-wrap'}` }}>
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
  <Card.Group>
    {employees.map(({ id, services, name, bio, role }) => (
      <StylistCard key={id} id={id} services={services} name={name} bio={bio} role={role} />
    ))}
  </Card.Group>
);

export default Stylists;
