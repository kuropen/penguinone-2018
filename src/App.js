import React, { Component } from 'react';
// import { Container, Image, Menu, Segment, Responsive, Icon } from 'semantic-ui-react';
import { Container, Image, Menu, Segment } from 'semantic-ui-react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import logo from './penguin.png';
import Top from './Top/Top.js';
import Profile from './Profile/Profile.js';
import './App.css';

class App extends Component {
  render() {
    return (
    <Router>
      <div>
        <Menu fixed='top' inverted>
          <Container>
            <Menu.Item as={Link} to='/' header>
              <Image
                size='mini'
                src={logo}
                style={{ marginRight: '1.5em' }}
              />
              Penguinone
            </Menu.Item>
            {/* <Menu.Item as={Link} to='/profile'>
              <Responsive as='span' minWidth={Responsive.onlyTablet.minWidth}>
                Profile
              </Responsive>
              <Responsive as='span' {...Responsive.onlyMobile}>
                <Icon name='user circle outline' size='large' />
              </Responsive>
            </Menu.Item> */}
          </Container>
        </Menu>

        <Container text style={{ marginTop: '7em' }}>
          <Switch>
            <Route exact path="/" component={Top} />
            <Route exact path="/profile" component={Profile} />
          </Switch>
        </Container>

        <Segment
          inverted
          vertical
          style={{ margin: '5em 0em 0em' }}>
          <Container textAlign='center'>
            <p>All rights reserved. Copyright &copy; Kuropen.</p>
          </Container>
        </Segment>
      </div>
    </Router>
    );
  }
}

export default App;
