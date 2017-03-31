import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Row, Col, Image } from 'react-bootstrap';
import messages from './messages';

function Solution() {
  return (
    <Col xs={10} sm={8} xsOffset={1} smOffset={2}>
      <Row>
        <Image className="img-responsive" src={require('../../assets/img/unicorn profile-transparent.png')} style={{ maxHeight: '80px', margin: '0 15%' }} />
        <h2 style={{ color: '#99b83c' }}>
          <FormattedMessage {...messages.header} />
        </h2>
        <Col sm={12} md={6}>
          <p>
            <FormattedMessage {...messages.paragraph1} />
          </p>
          <p>
            <FormattedMessage {...messages.paragraph2} />
          </p>
          <p>
            <FormattedMessage {...messages.paragraph3} />
          </p>
        </Col>
        <Col sm={12} md={6}>
          <p>
            <FormattedMessage {...messages.paragraph4} />
          </p>
          <p>
            <FormattedMessage {...messages.paragraph5a} />
            <a href="/dapp">DApp (Donation Application)</a>
            <FormattedMessage {...messages.paragraph5b} />
          </p>
          <p>
            <FormattedMessage {...messages.paragraph6} />
          </p>
        </Col>
      </Row>
    </Col>
  );
}

export default Solution;
