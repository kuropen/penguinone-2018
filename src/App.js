import React, { Component } from 'react';
import { Container, Divider, Dropdown, Grid, Header, Image, List, Menu, Segment } from 'semantic-ui-react';
import logo from './penguin.png';
import SocialNet from './SocialNet/SocialNet.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Menu fixed='top' inverted>
          <Container>
            <Menu.Item as='a' header>
              <Image
                size='mini'
                src={logo}
                style={{ marginRight: '1.5em' }}
              />
              Penguinone
            </Menu.Item>
            <Menu.Item as='a'>Home</Menu.Item>
            <Menu.Item as='a' href='https://don.akabe.co/' target='_blank'>becodon</Menu.Item>
          </Container>
        </Menu>

        <Container text style={{ marginTop: '7em' }}>
          <Header as='h1'>Penguinone - Kuropen's Personal Web</Header>
          <p>このサイトはKuropenの個人サイトです。</p>
          
          <SocialNet />
          
        </Container>

        <Segment
          inverted
          vertical
          style={{ margin: '5em 0em 0em' }}
        >
          <Container textAlign='center'>
            <p>All rights reserved. Copyright &copy; Kuropen.</p>
          </Container>
        </Segment>
      </div>
    );
  }
}

export default App;
