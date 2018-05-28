import { Component } from 'react';
import { scroller } from 'react-scroll';
import { Button, Container, Grid, Header, Icon, Menu, Responsive, Segment, Visibility } from 'semantic-ui-react';
import Stylists from './Stylists';
import Services from './Services';
import Contact from './Contact';
import Footer from './Footer';
import Page from '../Components/Page';

/* eslint-disable react/no-multi-comp */
/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */
const HomepageHeading = ({ mobile }) => (
  <Container attached>
    {mobile && (
      <Button
        position="bottom"
        href="https://shorthair.fullslate.com/"
        primary
        size="large"
        style={{ marginTop: '1em' }}
      >
        Make an appointment
        <Icon name="right arrow" />
      </Button>
    )}
  </Container>
);

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component {
  state = {};

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  render() {
    const { children } = this.props;
    const { fixed } = this.state;

    return (
      <Responsive {...Responsive.onlyComputer}>
        <Visibility once={false} onBottomPassed={this.showFixedMenu} onBottomPassedReverse={this.hideFixedMenu}>
          <Segment
            inverted
            textAlign="center"
            style={{
              padding: '2em 0em',
              minHeight: '60vh',
              backgroundImage: `url(https://res.cloudinary.com/vpp/image/upload/f_auto,q_auto/v1527357570/desktop-hero_fn6wcy.jpg)`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundColor: '#020202',
              backgroundSize: 'cover',
            }}
            vertical
          >
            <Menu
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              borderless
              size="large"
              style={{ border: 'none' }}
            >
              <Container>
                <Menu.Item>
                  <Button href="https://shorthair.fullslate.com/" primary size="large">
                    Make an appointment
                    <Icon name="right arrow" />
                  </Button>
                </Menu.Item>
                <Menu.Item position="right">
                  <Button
                    as="a"
                    href="https://shorthair.fullslate.com/login?return_to=https%3A%2F%2Fshorthair.fullslate.com%2Fregister"
                  >
                    Log in
                  </Button>
                  <Button
                    as="a"
                    href="https://shorthair.fullslate.com/register"
                    primary={fixed}
                    style={{ marginLeft: '0.5em' }}
                  >
                    Sign Up
                  </Button>
                </Menu.Item>
              </Container>
            </Menu>
            <HomepageHeading />
          </Segment>
        </Visibility>

        {children}
      </Responsive>
    );
  }
}

class MobileContainer extends Component {
  scrollTo = (element, duration) => {
    console.log(element);
    scroller.scrollTo(element, {
      smooth: true,
      offset: -14,
      duration,
    });
  };
  render() {
    const { children } = this.props;
    return (
      <Responsive {...Responsive.onlyMobile}>
        <Segment
          inverted
          textAlign="center"
          style={{
            minHeight: 300,
            padding: '1em 0em',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            backgroundImage: `url(https://res.cloudinary.com/vpp/image/upload/c_scale,f_auto,q_auto,w_600/v1526326223/shc-bus-card.jpg)`,
            backgroundRepeat: 'no-repeat',
            backgroundColor: '#434343',
            backgroundPosition: 'center -25px',
          }}
          vertical
        >
          <HomepageHeading mobile />
        </Segment>

        <Button.Group attached="bottom">
          <Button secondary onClick={() => this.scrollTo('contact', 500)}>
            contact
          </Button>
          <Button.Or text="&" />
          <Button secondary onClick={() => this.scrollTo('services', 650)}>
            services
          </Button>
        </Button.Group>
        {children}
      </Responsive>
    );
  }
}

const ResponsiveContainer = ({ children }) => (
  <Page>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </Page>
);

const HomepageLayout = () => (
  <ResponsiveContainer>
    <Segment style={{ padding: '0 1em 1em 1em' }} vertical>
      <Grid container stackable verticalAlign="middle">
        <Grid.Row verticalAlign="middle">
          <Grid.Column floated="left" width={8}>
            <Header as="h3" style={{ fontSize: '2em', textAlign: 'center', margin: '1em 0' }}>
              Pick a stylist and cut to reserve a slot.
            </Header>
            <Stylists />
          </Grid.Column>
          <Grid.Column floated="right" width={6}>
            <Contact />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign="center">
            <Services />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment style={{ padding: '0em' }} vertical>
      <Grid celled="internally" columns="equal" stackable>
        <Grid.Row textAlign="center">
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as="h3" style={{ fontSize: '1.5em' }}>
              "Better than the shops down the street and at a better price."
            </Header>
            <p style={{ fontSize: '1.33em' }}>Jay R.</p>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as="h3" style={{ fontSize: '1.5em' }}>
              "Authentic barber shop experience with a laid back atmosphere"
            </Header>
            <p style={{ fontSize: '1.33em' }}>Anthony P.</p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Footer />
  </ResponsiveContainer>
);
export default HomepageLayout;
