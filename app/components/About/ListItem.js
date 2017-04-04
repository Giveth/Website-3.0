import React, { PropTypes } from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

function ListItem(props) {
  const text = props.text;
  return (
    <li className="about"><FormattedMessage {...messages[text]} /></li>
  );
}

ListItem.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ListItem;
