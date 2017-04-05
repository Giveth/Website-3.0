import React from 'react';
import { Col, Image } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

function Community() {
  return (
    <Col xs={10} sm={8} xsOffset={1} smOffset={2}>
      <Col sm={10}>
        <h3 style={{ color: '#777' }}>
          <FormattedMessage {...messages.header} />
        </h3>
        <p>
          <FormattedMessage {...messages.communityText1} />
        </p>
        <p>
          <FormattedMessage {...messages.communityText2a} />
          <a href="http://slack.giveth.io/" target="_blank"><FormattedMessage {...messages.join} /></a>
          <FormattedMessage {...messages.communityText2b} />
        </p>
      </Col>
      <Col sm={2}>
        <a href="http://slack.giveth.io/" target="_blank">
          <Image className="slack-logo" src={require('../../assets/img/Slack-App-Icon.png')} style={{ marginTop: '72px' }} responsive />
        </a>
      </Col>
    </Col>
  );
}

export default Community;
