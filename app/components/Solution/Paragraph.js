import React, { PropTypes } from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

function Paragraph(props) {
  const text = props.text;
  return (
    <p>
      <FormattedMessage {...messages[text]} />
    </p>
  );
}

Paragraph.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Paragraph;
