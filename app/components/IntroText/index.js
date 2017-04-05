import React, { PropTypes } from 'react';
import H1 from 'components/H1';
import CenteredDiv from 'components/CenteredDiv';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

function IntroText(props) {
  return (
    <CenteredDiv>
      <H1>
        { props.title }<span style={{ color: '#aaa' }}>.io</span>
      </H1>
      <p className="baseline">
        <FormattedMessage {...messages.baseline1} />
        <br />
        <FormattedMessage {...messages.baseline2} />
      </p>
    </CenteredDiv>
  );
}

IntroText.propTypes = {
  title: PropTypes.string.isRequired,
};

export default IntroText;
