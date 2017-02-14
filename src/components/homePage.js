'use strict';

var React = require('react');

var Home = React.createClass({
	render: function() {
		return (
			<container>
				{/* Introduction with name and baseline */}
				<div className="row intro">
					<div className="col-xs-10 col-sm-8 col-xs-offset-1 col-sm-offset-2">
						{/* Navigation */}
						<nav className="navbar navbar-default">
							<div className="container-fluid">
								<ul className="nav navbar-nav">
									<li><a href="/#community">Community</a></li>
									<li><a href="/#solution">Solution</a></li>
									<li><a href="/#dapp">Dapp</a></li>
									<li><a href="/#campaign">Fund a campaign</a></li>
									<li><a href="https://medium.com/giveth">Blog</a></li>
									<li><a href="http://giveth.slack.com/" className="join">Join us</a></li>
									{/* <li><a href="/#french"><img className="flag float-right" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAAAvCAYAAABe1bwWAAABlElEQVRoQ+3bv07CUBTH8d/BQYluYpx8D0cXWxYHTZCS+DcODj6MM5oIiQ6WKiRO+gY8isS4OACLHENDSUUlnFiGm/yYCFxK7iffnulWkHr5lUYRAz2HYBPAOgBJf29936ztWn8y8/r+0cXMa6csVEA7AmkrctXVqPqcrI03vnVSW1rs5+uAlLP4t+QaDsBMbFfCLpZPN6LLXgzjBeGtAAdZogyv5R4MoCp3hYerQ9ku33s5kZesUVyFiR1UfPGDxiOge4T5JtASPwjfABQIkxbQ1yGMzgPF6VsJGBDmjyoIQxjbwGAxLIbF2ARYjM2LM4bFsBibAIuxeXHGsBgWYxNgMTYvzhgWw2JsAizG5sUZw2JYjE2Axdi8OGNYDIuxCbAYmxdnDIthMTYBFmPz4oxhMSzGJjClGJ7B+4Gj7+IFYVOAuRzhdvGc78ioxXO+v91KgiJPhk/AjE+GDz8vlRr5jwWtA9jPZHKNLuLcrSSIurpyPH6WIMHwKuGOqJwBmjx98i8nR2A6ArQ/gZu16Pop2fAXkg44lBfMKAsAAAAASUVORK5CYII=" alt="French flag"/></a></li> */}
								</ul>
							</div>
						</nav>
						{/* Introduction */}
						<div className="row">
							<div className="intro-text">
								<h1>Giveth.io</h1>
								<p>Charitable donation is going through a massive transformation!<br/>
								Help us build communities around the causes you feel passionate about.</p>
								<button className="btn btn-primary">Donate</button>
							</div>
						</div>
					</div>
				</div>
				{/* Logo and explanation */}
				<div className="row">
					<div className="col-xs-10 col-sm-8 col-xs-offset-1 col-sm-offset-2">
						<div className="row">
							<p className="explanation">Giveth is a rΞvolution in the world of charitable donation, building and empowering communities to make an impact in the causes they care about</p>
						</div>
						<div className="row">
							<div className="col-xs-12 col-md-5 intro-logo">					
							</div>
							<div className="col-xs-12 col-md-7 explanation-paragraph">
								<p>New technologies enable us to rethink and reengineer new ways to distribute <strong>charitable donations.</strong></p>
								<p>The traditional charitable system has undergone a slow evolution and is out of date and out of touch.</p>
								<p>It too often provides short-term, one-size-fits-all solutions that fail address the root causes of the problems they are trying to solve.</p>
								<p>The Giveth community is building a new system, using Ethereum smart contracts, that will radically shift the way people think charity can and should work. Instead of a large centralized organization taking money from donors and paying people to make a change, donors are able to directly connect to the change makers on the ground in a system where accountability and transparency are the default. </p>
								<p>With this decentralization reative solutions to global issues will emerge in a local fashion, and any methods that are successful for one group can spread virally within the particular cause. In fact, because of the open source nature of this system, successful solutions can scale across all causes. If a cat charity builds a successful governance structure, a homeless charity can easily use it for their own needs. This is <strong>Donation 3.0</strong>.</p>
							</div>
						</div>
					</div>
				</div>
				{/* About Giveth */}
				<div className="row grey">
					<div className="col-xs-10 col-sm-8 col-xs-offset-1 col-sm-offset-2">
						<div className="row">
							<div className="col-xs-12 col-md-6 about-text">
								<h3>About Giveth</h3>
								<p>The core group is an eclectic mix from the Ethereum and non-profit worlds that are teaming up to make it easy to build anyone to build a global community around a cause. In fact, this core team wants to build a community around the Giveth idea itself! If you want to help create the solution, <a href="http://slack.giveth.io/" className="join">join our Slack</a>.</p>
								<p>At Giveth, <strong>we believe</strong>:</p>
								<ul>
									<li>Donating can be simple, fun and effective.</li>
									<li><strong>Transparency</strong> and <strong>accountability</strong> can be the default.</li>
									<li>Everyone with ideas that can make a positive impact can be heard and funded.</li>
									<li>Every doner can have the ultimate say over how their donation is used.</li>
									<li>People that want to do good work for their cause can be rewarded for their actions.</li>
									<li><strong>Real change</strong> and <strong>innovation</strong> comes from the communities joining together fighting to make the world a better place.</li>
								</ul>
							</div>
							<div className="col-xs-12 col-md-6">	
								<img src="/images/about.jpg" alt="About" className="img-responsive about-pic"/>
							</div>
						</div>
					</div>
				</div>
				{/* Why Giveth ? */}
				<div className="row intro">
					<div className="col-xs-10 col-sm-8 col-xs-offset-1 col-sm-offset-2">
						<div className="row">
							<div className="col-xs-12 col-md-5">
								<h3 className="why">Why Giveth?</h3>
							</div>
							<div className="col-xs-12 col-md-7">
								<p>Giveth is dedicated to a completely open source development process every step of the way, we want to enable awesome solutions for <strong>anyone</strong> to use and improve upon.</p>
								<p>The charitable system is slowly evolving and starting to integrate blockchain technology for its frictionless, global, transparent transactions. But Giveth is <strong>leap frogging</strong> this slow integration and taking it to the next level, enabling decentralized organizations to form, and participants to interact with eachother in a safe, trustless manner using smart contracts.</p>
								<p>Giveth's smart contracts automate accounting, international fund distribution, and many other services that are usually done by large charities with economics of scale.</p>
								<p>At the same time, these smart contracts also enable donors and change makers to work together to crowdsource powerful solutions and give these organizations the flexibility to develop their own unique governance and incentive structures to bring more impact for their given resources.</p>
							</div>
						</div>
					</div>
				</div>
				{/* The Giveth Solution */}
				<div className="row">
					<div className="col-xs-10 col-sm-8 col-xs-offset-1 col-sm-offset-2">
						<div className="row">
							<img src="/images/unicorn profile-transparent.png" alt="Logo" className="img-responsive small-logo"/>
							<h2>The Giveth Solution</h2>
							<div className="col-xs-12 col-md-6">
								<p>Giveth's smart contracts allow donors to take any level of interest they desire. They can tag their donation to be sent to a general catagory (e.g. Ethereum Projects) or directly to their favorite decentralized charitable organization. Either way they will be notified how every part of their donation was used. This will be extremely easy as all donations go directly to the change makers on the Ethereum blockchain.</p>
								<p>Giveth's open source system makes transparency, accountability, communication and efficiency the default. Change makers and donors will be able to connect to eachother directly to exchange ideas and show progress, and when Ethereum's social networking DApps go live </p>
							</div>
							<div className="col-xs-12 col-md-6">
								<p>Change Makers will be encouraged to use our current Milstone Tracker Contract, where donations are only collected upon the completion of pre-arranged milestones. This creates a <strong>result-focused incentive structure</strong> naturally aligning everyones intentions.</p>
								<p>The Giveth core team has completed v0.1 of Giveth's <strong>[DApp (Donation Application)](TODO: ADD LINK TO UI)</strong> using our own system.  This means there is complete transparency on how the donations sent to the Giveth platform have been spent. #dogfooding</p>
								<p>Our current DApp is still in the early prototype stage and focuses on the distribution of funds to the change makers. We are currently developing v0.2 which will include ERC 20 tokens and a liquid democracy enabled donation tagging system.</p>
							</div>
						</div>
					</div>
				</div>
			{/* How it works */}
				<div className="row works grey">
					<div className="col-xs-10 col-sm-8 col-xs-offset-1 col-sm-offset-2">
							<h3>How it works</h3>
							<div className="row">
								<div className="col-xs-3 col-sm-2">
									<img src="/images/353400-200.png" alt="" className="img-responsive"/>
									<p>You have a change that you want to see in the world, anything from improving the Ethereum Virtual Machine to ending homelessnes in Paris</p>
								</div>
								<div className="col-xs-3 col-sm-2">
									<img src="/images/301245-200.png" alt="" className="img-responsive"/>
									<p>You go to giveth.io to build your decentralized charitable organization (DCO) using our easy wizard</p>
								</div>
								<div className="col-xs-3 col-sm-2">
									<img src="/images/244899-200.png" alt="" className="img-responsive"/>
									<p>Like minded people join your community to donate, contribute and promote your DCO</p>
								</div>
								<div className="col-xs-3 col-sm-2">
									<img src="/images/91306-200.png" alt="" className="img-responsive"/>
									<p>Change Makers come up with solutions to the problems the community is facing and propose milestones.</p>
								</div>
								<div className="col-xs-3 col-sm-2">
									<img src="/images/247217-200.png" alt="" className="img-responsive"/>
									<p>Milestones are reviewed and approved for funding by Donors. After the milestone has been completed the funds get released to the Change Makers.</p>
								</div>
								<div className="col-xs-3 col-sm-2">
									<img src="/images/unicorn profile-transparent.png" alt="" className="img-responsive"/>
									<p>Another successful action helps to build a better world full of unicorns and rainbows!</p>
								</div>
							</div>
					</div>
				</div>
				{/* Link to the team's Slack */}
				<div className="row">
					<div className="col-xs-10 col-sm-8 col-xs-offset-1 col-sm-offset-2">
						<div className="col-xs-10">
							<h3>Join the Giveth Community!</h3>
							<p>We are actively seeking collaborators and like-minded, autonomous partners to make this vision a reality.</p>
							<p>If you want to work on a versatile smart contract platform empowering people to make a <strong>real change</strong> in this world get on our Slack and tell us how you can help. We are well funded and you can litterally create your own milestone and be part of our team. See you on the Slack.</p>
						</div>
						<div className="col-xs-2">
							<a href="http://slack.giveth.io/" target="_blank"><img src="images/Slack-App-Icon.png" alt="Slack" className="slack-icon img-responsive"/></a>
						</div>
					</div>
				</div>
				<div className="row intro">
					<div className="col-xs-10 col-sm-8 col-xs-offset-1 col-sm-offset-2 footer">
						<h3>Want to see what we are up to these days?</h3>
						<center>
							<li className="social"> 
								<a href="https://www.facebook.com/givethio/" target="_blank"><i className="fa fa-facebook fa-size"></i></a>
								<a href="https://twitter.com/Givethio" target="_blank"><i className="fa fa-twitter fa-size"></i></a> 
								<a href="https://github.com/Giveth" target="_blank"><i className="fa fa-github fa-size"></i></a>
								<a href="https://medium.com/giveth" target="_blank"><i className="fa fa-medium fa-size"></i></a>
								<a href="http://slack.giveth.io/" target="_blank"><i className="fa fa-slack fa-size"></i></a>
							</li>
						</center>
					</div>
				</div>
			</container>
		);
	}
});

module.exports = Home;
