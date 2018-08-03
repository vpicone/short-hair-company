import React, { Component } from 'react';
import { Button, Header, Modal } from 'semantic-ui-react';

export default class LocationModal extends Component {
  state = {
    modalOpen: false,
  };

  componentDidMount() {
    localStorage.removeItem('location-confirmed');
  }

  onConfirm = () => {
    localStorage.setItem('confirmed', 'true');
    this.setState({ modalOpen: false });
  };

  render() {
    return (
      <Modal size="small" style={{ marginTop: '-250px' }} open={this.state.modalOpen}>
        <Modal.Header>New Location Announcement</Modal.Header>
        <Modal.Content>
          <Modal.Description style={{ fontSize: '1.25em' }}>
            <Header>We're Moving!!! ...down the street.</Header>
            <p>
              On Thursday the 28th, we will be moved to the new location full time. We worked
              extremely hard to minimize inconveniences to you, our patrons. We think we did a
              fantastic job by finding the new place - literally blocks away from the old site.
            </p>
            <address>
              <a
                style={{ color: '#212121', textDecoration: 'none' }}
                href="https://goo.gl/maps/kGJKYBhR9h32"
              >
                2101 South First Street Austin, TX 78704
              </a>
            </address>
          </Modal.Description>
        </Modal.Content>
        <Button.Group attached="bottom" size="large">
          <Button
            href="https://goo.gl/maps/wY1Gq8q3QE52"
            primary
            icon="map"
            labelPosition="right"
            content="Directions"
            rel="noopener noreferrer"
            target="_blank"
          />
          <Button
            onClick={this.onConfirm}
            positive
            icon="checkmark"
            labelPosition="right"
            content="Confirm"
          />
        </Button.Group>
      </Modal>
    );
  }
}
