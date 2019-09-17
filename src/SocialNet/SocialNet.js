import React, { Component } from 'react';
import { Segment, Header, List } from 'semantic-ui-react';
import PleromaInfoModal from './PleromaInfoModal.js';

class SocialNet extends Component {
  constructor(props) {
    super(props);
    this.plInfoModal = null;
  }
  handleClickPleromaLink() {
    this.plInfoModal.open();
  }

  render() {
    return (
    <Segment.Group>
      <Segment>
        <Header as='h2'>Social Network &amp; Games</Header>
      </Segment>
      <Segment>
        <List divided relaxed>
          <List.Item>
            <List.Content>
              <List.Header as='a' href='https://twitter.com/kuropen_aizu'>
                Twitter
              </List.Header>
              <List.Description as='a' href='https://twitter.com/kuropen_aizu'>
                ID: @kuropen_aizu
              </List.Description>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Content>
              <List.Header as='a' href='https://www.facebook.com/yuda.hirochika' target='_blank'>
                Facebook
              </List.Header>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Content>
              <List.Header as='a' href='https://gingadon.com/@kuropen' target='_blank'>
                Mastodon (銀河丼 / Gingadon)
              </List.Header>
              <List.Description as='a' href='https://gingadon.com/@kuropen' target='_blank'>
                ID: @kuropen@gingadon.com
              </List.Description>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Content>
              <List.Header as='a' href='https://matitodon.com/@kuropen' target='_blank'>
                Mastodon (まちトドン / Machitodon)
              </List.Header>
              <List.Description as='a' href='https://matitodon.com/@kuropen' target='_blank'>
                ID: @kuropen@matitodon.com<br />
                主なテーマ: 鉄道・バス等の交通 / Mainly related to transportation
              </List.Description>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Content>
              <List.Header as='a' onClick={this.handleClickPleromaLink.bind(this)}>
                Pleroma (akabeco TaLKNet)
              </List.Header>
              <List.Description as='a' onClick={this.handleClickPleromaLink.bind(this)}>
                ID: @kuropen@talknet.akabe.co<br />
                Mastodonと互換性があります / Compatible with Mastodon<br />
                <strong>10月12日シャットダウン予定 / Will be shut down on October 12</strong>
              </List.Description>
            </List.Content>
          </List.Item>
          <List.Item>
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
            <List.Content>
              <List.Header as='a' href='https://jp.finalfantasyxiv.com/lodestone/character/23919331/' target='_blank'>
                Final Fantasy XIV
              </List.Header>
              <List.Description as='a' href='https://jp.finalfantasyxiv.com/lodestone/character/23919331/' target='_blank'>
                Character: Polaris Solaris<br />
                DC: Mana / Home World: Titan
              </List.Description>
            </List.Content>
          </List.Item>
          <List.Item>
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
        <PleromaInfoModal ref={(modal) => {this.plInfoModal = modal;}} />
      </Segment>
    </Segment.Group>
    );
  }
}

export default SocialNet;
