// $ = jQuery = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var Home = require('./components/homePage');
var Header = require('./components/common/header');
var Donate = require('./components/donate/donatePage');
var Milestone = require('./components/milestone/milestonePage');
var Bug = require('./components/bug/bugPage');
var Blog = require('./components/blog/blogPage');

(function(win) {
	"use strict";
	var App = React.createClass({
	render: function() {
		var Child;
		switch(this.props.route) {
			case 'donate': Child = Donate; break;
			case 'milestone': Child = Milestone; break;
			case 'bug': Child = Bug; break;
			case 'blog': Child = Blog; break;
			default: Child = Home;
		}

		return (
			<div>
				<Header/>
				<Child/>
			</div>
		);
	}
});

function render() {
	var route = win.location.hash.substr(1);
	ReactDOM.render(<App route={route} />, document.getElementById('app'));
}

win.addEventListener('hashchange', render);
render();
})(window);