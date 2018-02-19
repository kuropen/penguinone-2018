import React, { Component } from 'react';
import { Segment, Menu, Button, Icon, Container, Modal, Responsive } from 'semantic-ui-react';
import * as Scroll from 'react-scroll';
import './Profile.css'

const $ = require('jquery');
const ReactMarkdown = require('react-markdown');

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profileData: null,
      loaderActive: true,
      indexModalActive: false,
    };
  }
  getProfileData() {
    fetch('https://feedproxy.kuropen.org/prd-v1/profile').then((response) => {
      return response.json();
    }).then((json) => {
      if (json.md == null) {
        console.log('Invalid JSON.', json);
      }
      this.setState({profileData: json, loaderActive: false});
    }).catch((ex) => {
      this.setState({profileData: null, loaderActive: false});
      console.log('Profile Parse Error', ex);
    })
  }
  generateMenuItemsArray(index) {
    let itemsList = [];
    for (let i = 0; i < index.length; i++) {
      let newItem = {
        key: i,
        name: index[i]
      };
      itemsList.push(newItem);
    }
    return itemsList;
  }
  showIndexModal() {
    this.setState({indexModalActive: true});
  }
  hideIndexModal() {
    this.setState({indexModalActive: false});
  }
  handleClickIndexElement(event) {
    const clickedIndex = event.target.innerText; // event.target is a DOM object
    const offsetNeeded = 65; // should be the height of header
    let anchorTop = 0;
    $('h2,h3').each(function() {
      const headerString = $(this).text();
      if (clickedIndex === headerString) {
        anchorTop = $(this).offset().top;
      }
    });
    if (anchorTop > offsetNeeded) {
      anchorTop -= offsetNeeded;
    }
    Scroll.animateScroll.scrollTo(anchorTop);
    this.hideIndexModal();
  }
  render() {
    // first, scroll to top
    Scroll.animateScroll.scrollToTop({
      duration: 1,
      smooth: false,
    });
    
    const loaderActive = this.state.loaderActive;
    const indexModalActive = this.state.indexModalActive;
    let profileBody = null;
    let menuSection = null;
    if (this.state.profileData == null) {
      this.getProfileData();
    }else{
      profileBody = <ReactMarkdown source={this.state.profileData.md} />
      const menuItems = this.generateMenuItemsArray(this.state.profileData.index);
      menuSection = menuItems.map((item) => {
        return (
          <Menu.Item key={item.key} index={item.key} name={item.name} as='a'
            onClick={this.handleClickIndexElement.bind(this)}>
            {item.name}
          </Menu.Item>
        );
      });
    }
    return (
      <Container>
        <Modal basic open={indexModalActive}>
          <Modal.Header>目次</Modal.Header>
          <Modal.Content scrolling>
            <Menu inverted vertical text>
              {menuSection}
            </Menu>
          </Modal.Content>
          <Modal.Actions>
            <Button inverted onClick={this.hideIndexModal.bind(this)}>
              閉じる
            </Button>
          </Modal.Actions>
        </Modal>
        <Responsive as={Container} className='idxnavi' minWidth={Responsive.onlyComputer.minWidth}
          style={{display: loaderActive ? 'none' : 'inline-block'}}>
          <Button size='large' onClick={this.showIndexModal.bind(this)}>
            <Icon name='unordered list' />目次
          </Button>
        </Responsive>
        <Responsive as={Container} minWidth={Responsive.onlyTablet.minWidth}>
          <Segment className='mdProfile' loading={loaderActive} style={{minHeight: '60px'}}>
            {profileBody}
          </Segment>
        </Responsive>
        <Responsive as={Container} {...Responsive.onlyMobile}>
          <Segment className='mdProfile mobilemode' loading={loaderActive} style={{minHeight: '60px'}}>
            {profileBody}
          </Segment>
        </Responsive>
      </Container>
    );
  }
}

export default Profile;
