"use strict";

import React from "react";
import { FBPage } from "facebook-plugins";

var Home = React.createClass({
    render: function() {
        return (
			<container>
				{/* Introduction with name and baseline */}
				<div className="row">
					<div className="col-xs-12 col-md-8 col-md-offset-2">
						{/* Navigation */}
						<nav className="navbar navbar-default">
							<div className="container-fluid">
								<ul className="nav navbar-nav">
									<li><a href="#" id="community-anchor">Community</a></li>
									<li><a href="#" id="solution-anchor">Solution</a></li>
									<li><a href="https://dapp.giveth.io">Dapp</a></li>
									<li><a href="/#campaign">Fund a campaign</a></li>
									<li><a href="https://medium.com/giveth">Blog</a></li>
									<li><a href="http://slack.giveth.io/" className="join">Join us</a></li>
									<li><a href="/#french"><img className="flag float-right" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAAAvCAYAAABe1bwWAAABlElEQVRoQ+3bv07CUBTH8d/BQYluYpx8D0cXWxYHTZCS+DcODj6MM5oIiQ6WKiRO+gY8isS4OACLHENDSUUlnFiGm/yYCFxK7iffnulWkHr5lUYRAz2HYBPAOgBJf29936ztWn8y8/r+0cXMa6csVEA7AmkrctXVqPqcrI03vnVSW1rs5+uAlLP4t+QaDsBMbFfCLpZPN6LLXgzjBeGtAAdZogyv5R4MoCp3hYerQ9ku33s5kZesUVyFiR1UfPGDxiOge4T5JtASPwjfABQIkxbQ1yGMzgPF6VsJGBDmjyoIQxjbwGAxLIbF2ARYjM2LM4bFsBibAIuxeXHGsBgWYxNgMTYvzhgWw2JsAizG5sUZw2JYjE2Axdi8OGNYDIuxCbAYmxdnDIthMTYBFmPz4oxhMSzGJjClGJ7B+4Gj7+IFYVOAuRzhdvGc78ioxXO+v91KgiJPhk/AjE+GDz8vlRr5jwWtA9jPZHKNLuLcrSSIurpyPH6WIMHwKuGOqJwBmjx98i8nR2A6ArQ/gZu16Pop2fAXkg44lBfMKAsAAAAASUVORK5CYII=" alt="French flag"/></a></li>
								</ul>
							</div>
						</nav>
						{/* Introduction */}
						<div className="row">
							<div className="intro-pic">
							</div>
						</div>
						<div className="row">
							<div className="intro-text">
								<h1>Giveth<span className="io">.io</span></h1>
								<p>Charitable donation is going through a massive transformation!<br/>
								Join us in building communities around awesome causes.</p>
							</div>
						</div>
					</div>
				</div>
				{/* Logo and explanation */}
				<div className="row coloured">
					<div className="col-xs-10 col-sm-8 col-xs-offset-1 col-sm-offset-2">
						<p className="baseline">The Giveth Platform is a rΞvolution in the world of charitable donation, building and empowering communities and enabling new ways to make a difference!</p>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-10 col-xs-offset-1 col-md-8 col-md-offset-2">
						<div className="row">
							<div className="col-xs-12 col-md-6 logo">
							</div>
							<div className="col-xs-12 col-md-6 explanation-paragraph">
								<div className="ep1">
									<p>New technologies enable us to rethink and reengineer the distribution of charitable donations to lower transactions costs and so much more.</p>
									<p>The traditional charitable system has undergone a slow evolution. It is out of date and out of touch. Too often it provides short-term, one-size-fits-all solutions that fail address the root causes of the problems they are trying to solve.</p>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-xs-12 col-md-6 explanation-paragraph">
								<p>The Giveth community is building a new system, using Ethereum smart contracts, that will radically shift the way people think charity can and should work. Instead of a large centralized organization collecting money from donors and paying people to make a change, the Giveth Platform allows Donors to directly connect to the Change Makers on the ground in a system where <strong>accountability</strong> and <strong>transparency</strong> are the default. </p>
							</div>
							<div className="col-xs-12 col-md-6 explanation-paragraph">
								<p>We hope this decentralization will encourage creative solutions to global issues to emerge with a local focus. The methods that are successful for one group can spread virally within the particular cause. In fact, because of the open source nature of this system, successful solutions can scale across all causes. If a cat charity builds a successful governance structure, a homelessness charity can easily use it for their own needs. This is <strong>Donation 3.0</strong>.</p>
							</div>
						</div>
					</div>
				</div>
				{/* About Giveth */}
				<div className="row grey">
					<div className="col-xs-10 col-xs-offset-1 col-md-8 col-md-offset-2">
						<div className="row">
							<h3>About Giveth</h3>
							<p>The Giveth Core Team is an eclectic mix of people from the Ethereum and nonprofit worlds. They are dedicated to building the tools that will make it easy for anyone to build a global community around a cause. In fact, this core team is using the Giveth Platform to build a community around the Giveth idea itself! If you want to help create the solution, <a href="http://slack.giveth.io/" target="_blank">join our Slack</a>.</p>
						</div>
						<div className="row">
							<div className="col-xs-12 col-md-6 about-text">
								<p>The Giveth Unicorns believe:</p>
								<ul>
									<li>Donating can be simple, fun and effective.</li>
									<li><strong>Transparency</strong> and <strong>accountability</strong> can be the default.</li>
									<li>Every idea has the potential to make a positive impact, and it can be heard and funded in a decentralized fashion.</li>
									<li>Every Donor can have the ultimate say over how their donation is used.</li>
									<li>People that want to do good work for their cause can be rewarded for their actions.</li>
									<li><strong>Real change</strong> and <strong>innovation</strong> comes about when communities join together to make the world a better place.</li>
								</ul>
							</div>
							<div className="col-xs-12 col-md-6">
								<img src="/images/about.jpg" alt="About" className="img-responsive about-pic"/>
							</div>
						</div>
					</div>
				</div>
				{/* Why Giveth ? */}
				<div className="row coloured">
					<div className="col-xs-10 col-sm-8 col-xs-offset-1 col-sm-offset-2">
						<div className="row">
							<div className="col-xs-12 col-md-5">
								<h3 className="why">Why Giveth?</h3>
							</div>
							<div className="col-xs-12 col-md-7">
								<p>The charitable system is slowly evolving and starting to integrate blockchain technology to integrate frictionless, global, transparent transactions. But Giveth is <strong>leap frogging</strong> this slow integration, taking it to the next level, enabling Donors and Change Makers to interact with each other directly, in a safe, trustless manner. We are building a foundation of smart contracts to form Decentralized Charitable Organizations.</p>
								<p>Giveth's DCOs will automate accounting, international fund distribution, and many other services that are usually best served by large charities because of economies of scale.</p>
								<p>At the same time, these DCOs also enable Donors and Change Makers to work together to crowdsource powerful solutions under their own chosen governance and incentive structures to bring more impact for their unique set of resources.</p>
							</div>
						</div>
					</div>
				</div>
				{/* The Giveth Solution */}
				<div className="row" id="solution">
					<div className="col-xs-10 col-xs-offset-1 col-md-8 col-md-offset-2">
						<div className="row">
							<img src="/images/unicorn profile-transparent.png" alt="Logo" className="img-responsive small-logo"/>
							<h2>The Giveth Solution</h2>
							<div className="col-xs-12 col-md-6">
								<p>Giveth's smart contracts allow donors to take any level of interest they desire. They can tag their donation to send it to a general category (e.g. Ethereum Projects) or directly to their favorite Decentralized Charitable Organization (DCO). Either way, the Donors will be notified when any portion of their donation is matched to a Change Maker. </p>
								<p>Transparency, accountability, communication and efficiency are the default on the Giveth Platform. Change Makers and Donors will be able to connect to exchange ideas and show progress on social media platforms like Slack (for now), but when other DApps like, Status.im, Colony, and Akasha are launched, they will be integrated into the Giveth Platform for an even more powerful user experience.</p>
								<p>Giveth is dedicated to a completely open source development process every step of the way; we will never have a private github repository. We want to enable awesome solutions for <strong>everyone</strong> to use and improve upon.</p>

							</div>
							<div className="col-xs-12 col-md-6">
								<p>Change Makers will be encouraged to use our current Milestone Tracker Contract, where donations are only collected upon the completion of pre-arranged milestones. This creates a <strong>result-focused incentive structure</strong> naturally aligning everyone's intentions.</p>
								<p>The Giveth core team has completed v0.1 of Giveth's <strong><a href="/#dapp">DApp (Donation Application)</a></strong> using our own system. This means there is complete transparency on how the donations sent to the Giveth Platform have been used. #dogfooding</p>
								<p>Our current DApp is still in the early prototype stage and focuses on the distribution of funds to the Change Makers. We are currently developing v0.2 which will include ERC 20 tokens and a liquid democracy enabled donation tagging system.</p>
							</div>
						</div>
					</div>
				</div>
				{/* How it works */}
				<div className="row works grey">
					<div className="col-xs-10 col-sm-8 col-xs-offset-1 col-sm-offset-2">
						<h3>How It Works</h3>
						<div className="row">
							<div className="col-xs-6 col-md-4">
								<img src="/images/353400-200.png" alt="" className="img-responsive"/>
								<p>You want to make the world a better place in some way, big or small.</p>
							</div>
							<div className="col-xs-6 col-md-4">
								<img src="/images/301245-200.png" alt="" className="img-responsive"/>
								<p>You go to Giveth.io to build or join a Decentralized Charitable Organization (DCO) around this idea.</p>
							</div>
							<div className="col-xs-6 col-md-4">
								<img src="/images/244899-200.png" alt="" className="img-responsive"/>
								<p>Like minded people join your community to donate, contribute and promote your DCO.</p>
							</div>
							<div className="clearfix visible-md visible-lg"></div>
							<div className="col-xs-6 col-md-4">
								<img src="/images/91306-200.png" alt="" className="img-responsive"/>
								<p>Change Makers come up with solutions to the problems the community is facing and propose milestones.</p>
							</div>
							<div className="col-xs-6 col-md-4">
								<img src="/images/247217-200.png" alt="" className="img-responsive"/>
								<p>Milestones are approved for funding by Donors and funds are released to the Change Makers upon completion.</p>
							</div>
							<div className="col-xs-6 col-md-4">
								<img src="/images/unicorn profile-transparent.png" alt="" className="img-responsive"/>
								<p>Another successful action helps to build a better world full of unicorns and rainbows!</p>
							</div>
						</div>
					</div>
				</div>
				{/* Link to the team's Slack */}
				<div className="row" id="community">
					<div className="col-xs-10 col-xs-offset-1 col-md-8 col-md-offset-2">
						<div className="col-xs-10">
							<h3>Join the Giveth Community!</h3>
							<p>We are actively seeking collaborators and like-minded, autonomous partners to make this vision a reality.</p>
							<p>If you want to work on a versatile smart contract platform empowering people to make a <strong>real change</strong> in this world, <a href="http://slack.giveth.io/" target="_blank">join our Slack</a> and tell us how you can help. We are well funded, so if you have an idea for a milestone that can improve the Giveth Platform, propose it and join team. See you on the Slack.</p>
						</div>
						<div className="col-xs-2">
							<a href="http://slack.giveth.io/" target="_blank"><img src="images/Slack-App-Icon.png" alt="Slack" className="slack-icon img-responsive"/></a>
						</div>
					</div>
				</div>
				<div className="row coloured">
					<div className="col-xs-10 col-xs-offset-1 col-md-8 col-md-offset-2 footer">
					<center>
						<h3>Want to see what we are up to these days?</h3>
							<li className="social">
								<a href="https://www.facebook.com/givethio/" target="_blank"><i className="fa fa-facebook fa-size"></i></a>
								<a href="https://twitter.com/Givethio" target="_blank"><i className="fa fa-twitter fa-size"></i></a>
								<a href="https://github.com/Giveth" target="_blank"><i className="fa fa-github fa-size"></i></a>
								<a href="https://medium.com/giveth" target="_blank"><i className="fa fa-medium fa-size"></i></a>
								<a href="http://slack.giveth.io/" target="_blank"><i className="fa fa-slack fa-size"></i></a>
							</li>
					</center>
					</div>
					<div className="row timelines">
						<center>
							<div id ="facebook" className="col-xs-6 facebook">
                                <FBPage appId="givethio" href="https://www.facebook.com/givethio" width="484" height="600" tabs={[ "timeline", "events", "messages" ]}/>
							</div>
						</center>
						<center>
							<div id="twitter" className="col-xs-6">
								<a className="twitter-timeline" href="https://twitter.com/Givethio" data-width="500" data-height="600">Tweets by Giveth</a>
							</div>
						</center>
					</div>
				</div>
			</container>
        );
    }
});

module.exports = Home;
