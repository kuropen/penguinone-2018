import React, { Component } from 'react';
import { Container, Header } from 'semantic-ui-react';
import SocialNet from '../SocialNet/SocialNet.js';

class Top extends Component {
  render() {
    return (
      <Container>
        <Header as='h1'>Penguinone - Kuropen&#39;s Personal Web</Header>
        <p>このサイトはKuropenの個人サイトです。</p>
        
        <SocialNet />
      </Container>
    );
  }
}

export default Top;