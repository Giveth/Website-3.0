import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Row, Col } from 'react-bootstrap';
import messages from './messages';

function Why() {
  return (
    <Col xs={10} sm={8} xsOffset={1} smOffset={2}>
      <Row>
        <Col sm={12} md={5}>
          <h3>
            <FormattedMessage {...messages.header} />
          </h3>
        </Col>
        <Col sm={12} md={7} style={{ color: 'white' }}>
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
      </Row>
    </Col>
  );
}

export default Why;
