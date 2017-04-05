import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import LocaleToggle from 'containers/LocaleToggle';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

function Navigation() {
  return (
    <Navbar fluid style={{ backgroundColor: 'transparent', border: 'none', fontSize: '16px' }} >
      <Nav>
        <NavItem eventKey={1} href="#community"><FormattedMessage {...messages.community} /></NavItem>
        <NavItem eventKey={2} href="#solution"><FormattedMessage {...messages.solution} /></NavItem>
        <NavItem eventKey={3} href="/dapp"><FormattedMessage {...messages.dapp} /></NavItem>
        <NavItem eventKey={4} href="#campaign"><FormattedMessage {...messages.campaign} /></NavItem>
        <NavItem eventKey={5} href="https://medium.com/giveth" target="_blank"><FormattedMessage {...messages.blog} /></NavItem>
        <NavItem eventKey={6} href="https://github.com/Giveth/" target="_blank"><FormattedMessage {...messages.github} /></NavItem>
        <NavItem eventKey={7} href="http://slack.giveth.io/" target="_blank" id={'join'}><FormattedMessage {...messages.join} /></NavItem>
        <NavItem id={'language'}><LocaleToggle /></NavItem>
      </Nav>
    </Navbar>
  );
}

export default Navigation;
