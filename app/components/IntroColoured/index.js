import React from 'react';
import IntroColouredParagraph from 'components/IntroColouredParagraph';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

function IntroColoured() {
  return (
    <IntroColouredParagraph>
      <FormattedMessage {...messages.introColouredText} />
    </IntroColouredParagraph>
  );
}

export default IntroColoured;
