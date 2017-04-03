import React from 'react';
import { Col } from 'react-bootstrap';
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
  );
}

export default Social;
