import React, { Component } from 'react';
import { Container, Header, Grid } from 'semantic-ui-react';
import SocialNet from '../SocialNet/SocialNet.js';
import BlogFeed from '../BlogFeed/BlogFeed.js';

class Top extends Component {
  render() {
    return (
      <Container>
        <Header as='h1'>Penguinone - Kuropen&#39;s Personal Web</Header>
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column>
              <SocialNet />
            </Grid.Column>
            <Grid.Column>
              <BlogFeed />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

export default Top;