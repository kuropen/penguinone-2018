import React, { Component } from 'react';
import { Container, Divider, Header, Image, List, Modal, Button, Icon } from 'semantic-ui-react';

class TwitterInfoModal extends Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  }
  
  open() {
    this.setState({open: true});
  }
  
  close() {
    this.setState({open: false});
  }

  handleClickTwitterBtn() {
    window.open('https://twitter.com/kuropen_aizu');
  }
  
  handleClickMastodonBtn() {
    window.open('https://don.akabe.co/@kuropen');
  }
  
  render() {
    const open = this.state.open;
    return (
      <Modal basic size='small' open={open} onClose={this.close}>
        <Header icon='twitter' content='Twitterアカウントの運用縮小について' />
        <Modal.Content>
          <p>Twitterを取り巻く昨今の状況などにより、2018年初以降、
          Twitterアカウント @kuropen_aizu につきましては運用を無期限で縮小しています。<br />
          KuropenのTwitterでの活動にご関心をお持ちの方は、Mastodonアカウントのご利用をご検討ください。</p>
        </Modal.Content>
        <Modal.Actions>
          <Button color='twitter' onClick={this.handleClickTwitterBtn}>
            <Icon name='arrow circle right' /> Twitterへ
          </Button>
          <Button color='grey' onClick={this.handleClickMastodonBtn}>
            <Icon name='arrow circle right' /> Mastodonへ
          </Button>
          <Button inverted onClick={this.close.bind(this)}>
            閉じる
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

export default TwitterInfoModal;
