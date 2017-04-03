/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import IntroText from 'components/IntroText';
import IntroColoured from 'components/IntroColoured';
import Presentation from 'components/Presentation';
import About from 'components/About';
import Why from 'components/Why';
import Solution from 'components/Solution';
import Works from 'components/Works';
import Community from 'components/Community';
import Social from 'components/Social';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Row>
          <Col xs={12} md={8} mdOffset={2}>
            <Row>
              <Image src={require('../../assets/img/home.png')} style={{ display: 'block', margin: '0 auto' }} />
            </Row>
            <Row>
              <IntroText title={'Giveth'} />
            </Row>
          </Col>
        </Row>
        <Row className="gradient">
          <Col xs={10} sm={8} xsOffset={1} smOffset={2}>
            <IntroColoured />
          </Col>
        </Row>
        <Row>
          <Col xs={10} sm={8} xsOffset={1} smOffset={2}>
            <Row>
              <Col xs={12} md={6}>
                <Image src={require('../../assets/img/logo.svg')} style={{ display: 'block', margin: '0 auto', height: '60%' }} />
              </Col>
              <Col xs={12} md={6}>
                <Presentation text={'presentationText1'} />
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={6}>
                <Presentation text={'presentationText2'} />
              </Col>
              <Col xs={12} md={6}>
                <Presentation text={'presentationText3'} />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="grey">
          <Col xs={10} sm={8} xsOffset={1} smOffset={2}>
            <About />
          </Col>
        </Row>
        <Row className="gradient">
          <Why />
        </Row>
        <Row>
          <Solution />
        </Row>
        <Row className="grey">
          <Works />
        </Row>
        <Row>
          <Community />
        </Row>
        <Row className="gradient">
          <Social />
        </Row>
      </div>
    );
  }
}
