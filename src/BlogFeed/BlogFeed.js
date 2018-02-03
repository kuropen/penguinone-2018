import React, { Component } from 'react';
import { Segment, Header, List } from 'semantic-ui-react';
import 'whatwg-fetch';

function BlogFeedList(props) {
  console.log(props);
  const listItems = props.feed.items.map((feed) => {
    return (
      <List.Item>
        <List.Content>
          <List.Header as='a' href={feed.link} target='_blank'>{feed.title}</List.Header>
        </List.Content>
      </List.Item>
    );
  });
  return (
    <List divided relaxed>{listItems}</List>
  );
}

class BlogFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {goatFeed: null, loaderActive: true};
  }
  getGoatFeed() {
    fetch('https://feedproxy.kuropen.org/prd-v1/goat').then((response) => {
      return response.json();
    }).then((json) => {
      this.setState({goatFeed: json, loaderActive: false});
      console.log(json);
    }).catch((ex) => {
      this.setState({goatFeed: null, loaderActive: false});
      console.log('Feed Parse Error', ex);
    })
  }
  render() {
    let listObj = null;
    const loaderActive = this.state.loaderActive;
    if (this.state.goatFeed == null) {
      this.getGoatFeed();
    } else {
      listObj = <BlogFeedList feed={this.state.goatFeed} />;
    }
    return (
      <Segment.Group>
        <Segment>
          <Header as='h2'>Blog Feed @ <a href="https://kuropen.goat.me/">Y.O.N.O.</a></Header>
        </Segment>
        <Segment loading={loaderActive} style={{minHeight: '60px'}}>
          {listObj}
        </Segment>
      </Segment.Group>
    )
  }
}
export default BlogFeed;