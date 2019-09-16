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
                Mastodon (Gingadon)
              </List.Header>
              <List.Description as='a' href='https://gingadon.com/@kuropen' target='_blank'>
                ID: @kuropen@gingadon.com
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
                ※ Mastodonと互換性があります<br />
                <strong>※近日シャットダウン予定</strong>
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
              <List.Header as='a' href='https://polaris.kuropen.org/' target='_blank'>
                Final Fantasy XIV
              </List.Header>
              <List.Description as='a' href='https://polaris.kuropen.org/' target='_blank'>
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
