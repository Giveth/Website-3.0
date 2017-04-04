import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { FBPage } from 'facebook-plugins';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import SocialListItem from './SocialListItem';

function Social() {
  const socialItem = [
    { url: 'https://www.facebook.com/givethio/', type: 'facebook' },
    { url: 'https://twitter.com/Givethio', type: 'twitter' },
    { url: 'https://github.com/Giveth', type: 'github' },
    { url: 'https://medium.com/giveth', type: 'medium' },
    { url: 'http://slack.giveth.io/', type: 'slack' },
  ];
  return (
    <div>
      <Col xs={10} sm={8} xsOffset={1} smOffset={2}>
        <center>
          <h3>
            <FormattedMessage {...messages.header} />
          </h3>
          <ul style={{ fontSize: '32px' }}>
            { socialItem.map((item) => <SocialListItem key={item.type} url={item.url} type={item.type} />) }
          </ul>
        </center>
      </Col>
      <Row style={{ padding: '0 64px' }}>
        <center>
          <Col xs={6}>
            <FBPage appId={'givethio'} href={'https://www.facebook.com/givethio'} width={484} height={600} tabs={['timeline', 'events', 'messages']} style={{ paddingRight: '16px' }} />
          </Col>
        </center>
        <center>
          <Col xs={6}>
            <a className="twitter-timeline" href="https://twitter.com/Givethio">Tweets by Givethio</a> <script async src="//platform.twitter.com/widgets.js" charSet="utf-8"></script>
          </Col>
        </center>
      </Row>
    </div>
  );
}

export default Social;
