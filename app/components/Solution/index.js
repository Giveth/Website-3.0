import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Row, Col, Image } from 'react-bootstrap';
import Paragraph from './Paragraph';
import messages from './messages';

function Solution() {
  return (
    <Col xs={10} sm={8} xsOffset={1} smOffset={2}>
      <Row>
        <Image className="img-responsive" src={require('../../assets/img/unicorn profile-transparent.png')} style={{ maxHeight: '80px', margin: '0 15%' }} />
        <h2 style={{ margin: '-30px 0 48px' }}>
          <FormattedMessage {...messages.header} />
        </h2>
        <Col sm={12} md={6}>
          <Paragraph text={'paragraph1'} />
          <Paragraph text={'paragraph2'} />
          <Paragraph text={'paragraph3'} />
        </Col>
        <Col sm={12} md={6}>
          <Paragraph text={'paragraph4'} />
          <p>
            <FormattedMessage {...messages.paragraph5a} />
            <a href="/dapp">DApp (Donation Application)</a>
            <FormattedMessage {...messages.paragraph5b} />
          </p>
          <Paragraph text={'paragraph6'} />
        </Col>
      </Row>
    </Col>
  );
}

export default Solution;
