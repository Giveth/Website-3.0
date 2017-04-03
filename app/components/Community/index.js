import React from 'react';
import { Col, Image } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

function Community() {
  return (
    <Col xs={10} sm={8} xsOffset={1} smOffset={2}>
      <Col xs={10}>
        <h3>
          <FormattedMessage {...messages.header} />
        </h3>
        <p>
          <FormattedMessage {...messages.communityText1} />
        </p>
        <p>
          <FormattedMessage {...messages.communityText2a} />
          <a href="http://slack.giveth.io/" target="_blank">Join our slack</a>
          <FormattedMessage {...messages.communityText2b} />
        </p>
      </Col>
      <Col xs={2}>
        <a href="http://slack.giveth.io/" target="_blank">
          <Image src={require('../../assets/img/Slack-App-Icon.png')} style={{ marginTop: '72px' }} responsive />
        </a>
      </Col>
    </Col>
  );
}

export default Community;
