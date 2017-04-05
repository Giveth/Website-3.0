import React from 'react';

export default class Dapp extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    const script = document.createElement('script');
    script.src = 'bundle.js';
    document.body.appendChild(script);
  }

  render() {
    return (
      <div id="root"></div>
    );
  }
}
