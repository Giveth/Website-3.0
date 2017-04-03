import React, { PropTypes } from 'react';

function SocialListItem(props) {
  const url = props.url;
  const type = props.type;
  return (
    <a href={url} target="_blank">
      <i className={'fa fa-' + type}></i>
    </a>
  );
}

SocialListItem.propTypes = {
  url: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default SocialListItem;
