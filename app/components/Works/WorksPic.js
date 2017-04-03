import React, { PropTypes } from 'react';
import { Col, Image } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

function WorksPic(props) {
  const text = props.text;
  return (
    <Col xs={6} md={4}>
      <Image src={require('../../assets/img/' + props.pic)} style={{ margin: '0 auto', display: 'block', maxWidth: '50%', height: 'auto' }} />
      <p style={{ color: '#777', fontSize: '14px', marginTop: '16px' }}>
        <FormattedMessage {...messages[text]} />
      </p>
    </Col>
  );
}

WorksPic.propTypes = {
  pic: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default WorksPic;
