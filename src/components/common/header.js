"use strict";

var React = require('react');

var Header = React.createClass({
	render: function() {
		return (
        <nav className="navbar navbar-default">
          <div className="container-fluid">
              <ul className="nav navbar-nav">
                <li><a href="/">Home</a></li>
                <li><a href="/#donate">Donate</a></li>
                <li><a href="/#milestone">Milestone</a></li>
                <li><a href="/#bug">Bug bounties</a></li>
                <li><a href="/#blog">Blog</a></li>
              </ul>
          </div>
        </nav>
		);
	}
});

module.exports = Header;