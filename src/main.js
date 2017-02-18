// $ = jQuery = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var Home = require('./components/homePage');
var Community = require('./components/community/communityPage');
var Solution = require('./components/solution/solutionPage');
var Dapp = require('./components/dapp/dappPage');
var Campaign = require('./components/campaign/campaignPage');
var French = require('./components/french/frenchPage');

(function(win) {
	"use strict";
	var App = React.createClass({
		render: function() {
			var Child;
			switch(this.props.route) {
				case 'community': Child = Community; break;
				case 'solution': Child = Solution; break;
				case 'dapp': Child = Dapp; break;
				case 'campaign': Child = Campaign; break;
				case 'french': Child = French; break;
				default: Child = Home;
			}

			return (
				<div className="main">
					<Child/>
				</div>
			);
		}
	});

	function render() {
		var route = win.location.hash.substr(1);
		ReactDOM.render(<App route={route} />, document.getElementById('app'));
		
		// anchor links
		var communityAnchor = document.getElementById('community-anchor');
		var solutionAnchor = document.getElementById('solution-anchor');
		var community = document.getElementById('community');
		var solution = document.getElementById('solution');

		communityAnchor.onclick = function () {
			community.scrollIntoView();
		}

		solutionAnchor.onclick = function () {
			solution.scrollIntoView();
		}
	}

	win.addEventListener('hashchange', render);
	render();

})(window);