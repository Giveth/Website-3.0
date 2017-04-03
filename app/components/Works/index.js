import React from 'react';
import { Row, Col, Clearfix } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import WorksPic from './WorksPic';

function Works() {
  // make an array out of the "messages" object keys, to be able to map it
  const msgList = Object.keys(messages);
  // remove the first element of the array ("header")
  msgList.shift();
  // split the message list in two halfs in order to place a clearfix between them
  const msgList2 = msgList.splice(3, 3);
  return (
    <Col xs={10} sm={8} xsOffset={1} smOffset={2}>
      <h3 style={{ color: '#777' }}>
        <FormattedMessage {...messages.header} />
      </h3>
      <Row>
        { msgList.map((message) => <WorksPic key={message} pic={message + '.png'} text={message} />)}
        <Clearfix visibleLgBlock visibleMdBlock />
        { msgList2.map((message) => <WorksPic key={message} pic={message + '.png'} text={message} />)}
      </Row>
    </Col>
  );
}

export default Works;
