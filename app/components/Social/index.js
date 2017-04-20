import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { FBPage } from 'facebook-plugins';
import { FormattedMessage } from 'react-intl';
import $script from 'scriptjs';
import messages from './messages';
import SocialListItem from './SocialListItem';

export default class Social extends React.PureComponent {

  componentDidMount() {
    // load twitter widget
    $script('//platform.twitter.com/widgets.js', function () {
      // inject widget into DOM element
      twttr.widgets.load(
        document.getElementById('twitter')
      );
    });
    // load facebook plugin
    document.addEventListener('fb_init', e => FB.XFBML.parse());
  }

  render() {
    const socialItem = [
      { url: 'https://www.facebook.com/givethio/', type: 'facebook' },
      { url: 'https://twitter.com/Givethio', type: 'twitter' },
      { url: 'https://github.com/Giveth', type: 'github' },
      { url: 'https://medium.com/giveth', type: 'medium' },
      { url: 'http://slack.giveth.io/', type: 'slack' },
    ];
    return (
      <div>
        <Col xs={10} sm={8} xsOffset={1} smOffset={2}>
          <center>
            <h3>
              <FormattedMessage {...messages.header} />
            </h3>
            <ul className="social" style={{ fontSize: '32px' }}>
              { socialItem.map((item) => <SocialListItem key={item.type} url={item.url} type={item.type} />) }
            </ul>
          </center>
        </Col>
        <Row style={{ padding: '0 64px' }}>
          <center>
            <Col xs={6}>
              <FBPage appId={'givethio'} href={'https://www.facebook.com/givethio'} width={484} height={600} tabs={['timeline', 'events', 'messages']} style={{ paddingRight: '16px' }} />
            </Col>
          </center>
          <center>
            <Col xs={6}>
              <a id="twitter" className="twitter-timeline" href="https://twitter.com/Givethio" data-width={500} data-height={600}>Tweets by Giveth</a>
            </Col>
          </center>
        </Row>
      </div>
    );
  }
}
