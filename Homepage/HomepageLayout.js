import React, { Component } from 'react';
import { scroller } from 'react-scroll';
import {
  Button,
  Container,
  Grid,
  Header,
  Icon,
  Menu,
  Responsive,
  Segment,
  Visibility,
} from 'semantic-ui-react';
import Stylists from './Stylists';
import Contact from './Contact';
import Footer from './Footer';
import Page from '../Components/Page';
import styled from 'styled-components';

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
        <span style={{ letterSpacing: '0.1ch' }}>MAKE AN APPOINTMENT</span>
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
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
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
                  <Button href="https://shorthair.fullslate.com/" primary size="big">
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
            <span style={{ letterSpacing: '0.1ch', color: 'rgba(256,256,256,0.8)' }}>FIND US</span>
          </Button>
          <Button.Or text="&" />
          <Button secondary onClick={() => this.scrollTo('services', 650)}>
            <span style={{ letterSpacing: '0.1ch', color: 'rgba(256,256,256,0.8)' }}>SERVICES</span>
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

const ContentHeader = styled.h1`
  font-size: 3em;
  text-align: center;
  padding-top: 1em;
  margin-bottom: 0.5em;
  color: #fcfcfc;
  @media (max-width: 700px) {
    color: rgba(256, 256, 256, 0.8);
    font-size: 1.5em;
  }
`;

const HomepageLayout = () => (
  <ResponsiveContainer>
    <Segment
      style={{
        padding: '0 1em 1em 1em',
        backgroundColor: '#020202',
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='180' height='180' viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M81.28 88H68.413l19.298 19.298L81.28 88zm2.107 0h13.226L90 107.838 83.387 88zm15.334 0h12.866l-19.298 19.298L98.72 88zm-32.927-2.207L73.586 78h32.827l.5.5 7.294 7.293L115.414 87l-24.707 24.707-.707.707L64.586 87l1.207-1.207zm2.62.207L74 80.414 79.586 86H68.414zm16 0L90 80.414 95.586 86H84.414zm16 0L106 80.414 111.586 86h-11.172zm-8-6h11.173L98 85.586 92.414 80zM82 85.586L87.586 80H76.414L82 85.586zM17.414 0L.707 16.707 0 17.414V0h17.414zM4.28 0L0 12.838V0h4.28zm10.306 0L2.288 12.298 6.388 0h8.198zM180 17.414L162.586 0H180v17.414zM165.414 0l12.298 12.298L173.612 0h-8.198zM180 12.838L175.72 0H180v12.838zM0 163h16.413l.5.5 7.294 7.293L25.414 172l-8 8H0v-17zm0 10h6.613l-2.334 7H0v-7zm14.586 7l7-7H8.72l-2.333 7h8.2zM0 165.414L5.586 171H0v-5.586zM10.414 171L16 165.414 21.586 171H10.414zm-8-6h11.172L8 170.586 2.414 165zM180 163h-16.413l-7.794 7.793-1.207 1.207 8 8H180v-17zm-14.586 17l-7-7h12.865l2.333 7h-8.2zM180 173h-6.613l2.334 7H180v-7zm-21.586-2l5.586-5.586 5.586 5.586h-11.172zM180 165.414L174.414 171H180v-5.586zm-8 5.172l5.586-5.586h-11.172l5.586 5.586zM152.933 25.653l1.414 1.414-33.94 33.942-1.416-1.416 33.943-33.94zm1.414 127.28l-1.414 1.414-33.942-33.94 1.416-1.416 33.94 33.943zm-127.28 1.414l-1.414-1.414 33.94-33.942 1.416 1.416-33.943 33.94zm-1.414-127.28l1.414-1.414 33.942 33.94-1.416 1.416-33.94-33.943zM0 85c2.21 0 4 1.79 4 4s-1.79 4-4 4v-8zm180 0c-2.21 0-4 1.79-4 4s1.79 4 4 4v-8zM94 0c0 2.21-1.79 4-4 4s-4-1.79-4-4h8zm0 180c0-2.21-1.79-4-4-4s-4 1.79-4 4h8z' fill='%23ffffff' fill-opacity='0.18' fill-rule='evenodd'/%3E%3C/svg%3E")`,
      }}
      vertical
    >
      <Grid container stackable verticalAlign="middle">
        <Grid.Row verticalAlign="middle">
          <Grid.Column floated="left" width={8}>
            <ContentHeader>PICK A STYLIST & CUT</ContentHeader>
            <Stylists />
          </Grid.Column>
          <Grid.Column floated="right" width={6}>
            <Contact />
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
