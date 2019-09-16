import React, { Component } from 'react';
import { Header, Modal, Button, Icon } from 'semantic-ui-react';

class PleromaInfoModal extends Component {
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

  handleClickPleromaBtn() {
    window.open('https://talknet.akabe.co/');
  }
  
  render() {
    const open = this.state.open;
    return (
      <Modal basic size='small' centered="false" open={open} onClose={this.close.bind(this)}>
        <Header content='Pleroma (akabeco talknet) について' />
        <Modal.Content>
          <p>新サービス準備のため、akabeco talknetは2019年10月中旬を目処に<strong>閉鎖</strong>する計画です。<br />
          あらかじめご了承いただきますようお願い致します。</p>
        </Modal.Content>
        <Modal.Actions>
          <Button color='grey' onClick={this.handleClickPleromaBtn}>
            <Icon name='arrow circle right' /> Pleromaへ
          </Button>
          <Button inverted onClick={this.close.bind(this)}>
            閉じる
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

export default PleromaInfoModal;