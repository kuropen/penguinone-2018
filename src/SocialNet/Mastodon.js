import React, { Component } from 'react';
import { Segment, Header, Image, List } from 'semantic-ui-react';
import mastodonIcon from './mastodon.svg';
import elecwarnIcon from './elecwarn3_small.png';

class Mastodon extends Component {
  render() {
    return (
      <Segment.Group>
        <Segment>
          <Header as='h2'>
            <Image size='mini' src={mastodonIcon} />
            Mastodon
          </Header>
        </Segment>
        <Segment>
          <p>Kuropenは、下記のMastodonアカウントを保有しています。</p>
          <Header as='h3'>通常アカウント</Header>
          <List divided relaxed>
            <List.Item>
              <List.Content>
                <List.Header as='a' href='https://don.akabe.co/@kuropen' target='_blank'>
                  becodon @kuropen@don.akabe.co
                </List.Header>
                <List.Description as='a' href='https://don.akabe.co/@kuropen' target='_blank'>
                  「赤べこを愛でるインスタンス」という謎のコンセプトを掲げるインスタンス。創設者であり管理者。
                </List.Description>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Content>
                <List.Header as='a' href='https://gingadon.com/@kuropen' target='_blank'>
                  銀河丼 @kuropen@gingadon.com
                </List.Header>
                <List.Description as='a' href='https://gingadon.com/@kuropen' target='_blank'>
                  「没頭できることひとつあれば、大きな組織に所属しなくても生きていける」世界を目指すインスタンス。
                  ここの住人と縁があったことから、2018年3月18日よりサブアカウントとして運用。
                </List.Description>
              </List.Content>
            </List.Item>
          </List>
          <Header as='h3'>botアカウント</Header>
          <List divided relaxed>
            <List.Item>
              <List.Content>
                <List.Header as='a' href='https://elecwarn.kuropen.org/' target='_blank'>
                  <Image inline avatar src={elecwarnIcon} />
                  電力使用率botシリーズ
                </List.Header>
                <List.Description as='a' href='https://elecwarn.kuropen.org/' target='_blank'>
                  2016年までTwitterで運用していた、電力使用率を観測するbotのMastdodon版。becodonに設置・運用中。
                </List.Description>
              </List.Content>
            </List.Item>
          </List>
        </Segment>
        <Segment>
          <Header as='h3'>法的情報</Header>
          <p>
            <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/3.0/">
              <img alt="クリエイティブ・コモンズ・ライセンス" style={{'borderWidth': 0}} src="https://i.creativecommons.org/l/by-nc-sa/3.0/88x31.png" /></a><br />
              上記「電力使用率botシリーズ」のアイコンは<a href='https://twitter.com/haretter' target='_blank' rel='noopener noreferrer'>Hareta</a>氏の作品であり、
              <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/3.0/">クリエイティブ・コモンズ 表示 - 非営利 - 継承 3.0 非移植 ライセンス</a>の下に提供されています。
          </p>
        </Segment>
      </Segment.Group>
    );
  }
}

export default Mastodon;
