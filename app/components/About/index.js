import React from 'react';
import { Row, Col, ListGroup, Image } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import ListItem from './ListItem';
import messages from './messages';

function Presentation() {
  // make an array out of the "messages" object keys, to be able to map it
  const msgList = Object.keys(messages);
  // remove the 4 first elements of the array in order to keep only the list items
  for (let i = 0; i < 4; i++) {
    msgList.shift();
  }
  return (
    <div>
      <Row>
        <h3 style={{ color: '#777' }}>
          <FormattedMessage {...messages.header} />
        </h3>
        <p>
          <FormattedMessage {...messages.paragraph} />
          <a href={'http://slack.giveth.io/'}>
            <FormattedMessage {...messages.join} />
          </a>
        </p>
      </Row>
      <Row>
        <Col xs={12} md={6}>
          <p>
            <FormattedMessage {...messages.listHeader} />
          </p>
          <ListGroup className="fa-ul">
            { msgList.map((message) => <ListItem key={message} text={message} />)}
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
