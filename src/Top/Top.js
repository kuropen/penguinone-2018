import React, { Component } from 'react';
import { Container, Header, Grid, Responsive, Divider } from 'semantic-ui-react';
import SocialNet from '../SocialNet/SocialNet.js';
import BlogFeed from '../BlogFeed/BlogFeed.js';

class Top extends Component {
  render() {
    return (
      <Container>
        <Header as='h1'>Penguinone - Kuropen&#39;s Personal Web</Header>
        <Responsive as='Container' minWidth={Responsive.onlyTablet.minWidth}>
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
        </Responsive>
        <Responsive as='Container' {...Responsive.onlyMobile}>
          <Container>
            <SocialNet />
          </Container>
          <Divider section />
          <Container>
            <BlogFeed />
          </Container>
        </Responsive>
      </Container>
    );
  }
}

export default Top;