import React, { PropTypes } from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

function Presentation(props) {
  const text = props.text;
  return (
    <div style={{ paddingTop: '48px', textAlign: 'justify' }}>
      <p>
        <FormattedMessage {...messages[text]} />
      </p>
    </div>
  );
}

Presentation.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Presentation;
