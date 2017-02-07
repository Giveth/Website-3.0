"use strict";

var React = require('react');

var Blog = React.createClass({
	render: function() {
		return (
			<container>
				<div className="row">
					<div className="col-xs-10 col-sm-8 col-sm-offset-2">
						<h1>Blog posts</h1>
						<ul>
							<li>
								<a href="https://medium.com/giveth/giveth-donation-3-0-the-soft-launch-bf00d3bddca8?source=collection_home---4------0----------" target="_blank">Giveth: Donation 3.0 — The Soft Launch</a>
							</li>
							<li>
								<a href="https://medium.com/giveth/the-vault-contract-open-sourced-by-giveth-fe2261f7b91b?source=collection_home---4------1----------" target="_blank">The Vault Contract: Open Sourced by Giveth</a>
							</li>
							<li>
								<a href="https://medium.com/giveth/the-minime-token-open-sourced-by-giveth-2710c0210787?source=collection_home---4------2----------" target="_blank">The MiniMe Token: Open Sourced by Giveth</a>
							</li>
						</ul>
					</div>
				</div>
			</container>
		); 
	}
});

module.exports = Blog;