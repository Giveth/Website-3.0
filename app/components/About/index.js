import React from 'react';
import { Row, Col, ListGroup, Image } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import ListItem from './ListItem';
import messages from './messages';

function Presentation() {
  return (
    <div>
      <Row>
        <h3 style={{ color: '#777' }}>
          <FormattedMessage {...messages.header} />
        </h3>
        <p>
          <FormattedMessage {...messages.paragraph} /><a href={'http://slack.giveth.io/'}>join our Slack.</a>
        </p>
      </Row>
      <Row>
        <Col xs={12} md={6}>
          <p>
            <FormattedMessage {...messages.listHeader} />
          </p>
          <ListGroup className="fa-ul">
            <ListItem><FormattedMessage {...messages.aboutList1} /></ListItem>
            <ListItem><FormattedMessage {...messages.aboutList2} /></ListItem>
            <ListItem><FormattedMessage {...messages.aboutList3} /></ListItem>
            <ListItem><FormattedMessage {...messages.aboutList4} /></ListItem>
            <ListItem><FormattedMessage {...messages.aboutList5} /></ListItem>
            <ListItem><FormattedMessage {...messages.aboutList6} /></ListItem>
          </ListGroup>
        </Col>
        <Col xs={12} md={6}>
          <Image className="img-responsive" src={require('../../assets/img/about.jpg')} style={{ borderRadius: '4px' }} />
        </Col>
      </Row>
    </div>
  );
}

export default Presentation;
