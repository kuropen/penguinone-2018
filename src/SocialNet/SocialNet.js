import React, { Component } from 'react';
import { Segment, Header, Image, List } from 'semantic-ui-react';
import TwitterInfoModal from './TwitterInfoModal.js';
import activityPubIcon from './activitypub.png';
import qiitaIcon from './qiita.png';

class SocialNet extends Component {
  constructor(props) {
    super(props);
    this.twInfoModal = null;
  }
  handleClickTwitterLink() {
    this.twInfoModal.open();
  }
  render() {
    return (
    <Segment.Group>
      <Segment>
        <Header as='h2'>Social Network</Header>
      </Segment>
      <Segment>
        <List divided relaxed>
          <List.Item>
            <Image size='mini' src={activityPubIcon} />
            <List.Content>
              <List.Header as='a' href='https://talknet.akabe.co/' target='_blank'>
                Pleroma (akabeco TaLKNet)
              </List.Header>
              <List.Description as='a' href='https://talknet.akabe.co/' target='_blank'>
                ID: @kuropen@talknet.akabe.co<br />
                ※ Mastodonと互換性があります
              </List.Description>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name='facebook square' size='big' verticalAlign='middle' />
            <List.Content>
              <List.Header as='a' href='https://www.facebook.com/yuda.hirochika' target='_blank'>
                Facebook
              </List.Header>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name='github' size='big' verticalAlign='middle' />
            <List.Content>
              <List.Header as='a' href='https://github.com/kuropen' target='_blank'>
                GitHub
              </List.Header>
              <List.Description as='a' href='https://github.com/kuropen' target='_blank'>
                ID: kuropen
              </List.Description>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name='instagram' size='big' verticalAlign='middle' />
            <List.Content>
              <List.Header as='a' href='https://instagram.com/kuropen' target='_blank'>
                Instagram
              </List.Header>
              <List.Description as='a' href='https://instagram.com/kuropen' target='_blank'>
                ID: @kuropen
              </List.Description>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name='twitter square' size='big' verticalAlign='middle' />
            <List.Content>
              <List.Header as='a' onClick='https://twitter.com/kuropen_aizu'>
                Twitter
              </List.Header>
              <List.Description as='a' onClick='https://twitter.com/kuropen_aizu'>
                ID: @kuropen_aizu
              </List.Description>
            </List.Content>
          </List.Item>
          <List.Item>
            <Image size='mini' src={qiitaIcon} />
            <List.Content>
              <List.Header as='a' href='https://qiita.com/kuropen' target='_blank'>
                Qiita
              </List.Header>
              <List.Description as='a' href='https://qiita.com/kuropen' target='_blank'>
                ID: kuropen
              </List.Description>
            </List.Content>
          </List.Item>
        </List>
        <TwitterInfoModal ref={(modal) => {this.twInfoModal = modal;}} />
      </Segment>
    </Segment.Group>
    );
  }
}

export default SocialNet;
