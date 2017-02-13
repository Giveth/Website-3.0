'use strict';

var React = require('react');

import { Accordion, AccordionItem } from 'react-sanfona';

// content of the accordion
var values = [
	{name: 'Decentralized Innovation', content: 'Smart contracts cut thru red tape like a hot knife thru butter ;-)', slug: 1, key: 1},
	{name: 'Result-Based Incentivization', content: 'An important part of Giveth’s structure is holding change makers accountable for their results. This generally will require milestone payments to be made after the completion of the project. This is a major change to the way it is now where donations come first and then actions are taken. With smart contracts, the funds can be effectively held in escrow so that the Change Makers can trust that they will get the funding upon the completion of the milestone as long as they actually get the job done.', slug: 2, key: 2},
	{name: 'Start Here and Grow', content: 'Giveth is a completely open source project with altruistic intentions and big dreams. We are building a new incentive structure that will enable decentralized organizations to work on real global problems. But first we will focus on a few small projects in the Ethereum ecosystem to fine tune our smart contracts and better understand how donors and change makers want to interact with these new systems. Once we have battle tested our code, UIs, and the cultural requirements, we will branch out as our UI gets developed and  Of course, if campaigns want to use our platforms for global charitable projects, we will excitedly help them, but for the next few months, we will be focusing our outreach on projects within the Ethereum community.', slug: 3, key: 3},
	{name: 'Open Communication Channels', content: 'Defining roles is just the first step toward building a community, much more important is to allow for everyone involved to communicate with each other. This project will connect the Donors directly to the Recipients so that both sides can feel heard and give feedback! This will eventually be done using status.im or some other ethereum based social media channel, so that token holders and addresses that fill roles in any specific campaign have an easy way to communicate about their progress.', slug: 4, key: 4},
	{name: 'Donating Should Be Easy and Fun', content: 'The user experience is key, Giveth is a serious project that wants to make it fun to donate to charities by gamifying the experience and empowering the Donors every step of the way. At the same time if someone just wants to donate to a cause, default settings will be set to enable donations to be easy, while the power users will have advanced settings that give them complete control and even allow them to be a delegate for other’s Donations.', slug: 5, key: 5},
	];

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
								<p>The Giveth community is building a new system, using Ethereum smart contracts, that will radically shift the way people think charity can and should work. Instead of a large centralized organization taking money from donors and paying people to make a change, donors are able to directly connect to the change makers on the ground. </p>
								<p>Creative solutions to global issues will be able to emerge in a decentralized, local fashion, and the ones the methods that are successful can be scaled within the particular cause, and, because of the open source nature of this system, across all causes. If a cat charity builds a successful governance structure, a homeless charity can easily modify it for their own use. This is <strong>Donation 3.0</strong>.
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
								<p>A small core team of idealists with the desire to help and support great causes, got together to create Giveth. The team includes active members of the Ethereum community and master minds in smart contracts.</p>
								<p>At Giveth, <strong>we believe</strong>:</p>
								<ul>
									<li>In making donation giving simple and fun.</li>
									<li>In <strong>transparency</strong> and <strong>accountability</strong> when making use of resources offered by the community.</li>
									<li>In encouraging and supporting anyone who wants to carry out work on a social cause and effect positive impact.</li>
									<li>We all have the right to know how money is being used to fund the causes we care.</li>
									<li>In <strong>action</strong> and <strong>reputation</strong>, carrying out projects that can be replicated anywhere in the world.</li>
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
								<h3 className="why">Why Giveth ?</h3>
							</div>
							<div className="col-xs-12 col-md-7">
								<p>Giveth is non-profit, dedicated to a completely open source development process every step of the way, we want to enable awesome solutions and for <strong>anyone</strong> to use.</p>
								<p>It is time the charitable system evolves and integrates blockchain technology to enable frictionless, global, <strong>transparent</strong> peer-to-peer donations.</p>
								<p>Giveth's smart contracts reward good people for doing good deeds, so you know <strong>exactly</strong> what impact your donation had.</p>
							</div>
						</div>
					</div>
				</div>
				{/* The Giveth solution */}
				<div className="row">
					<div className="col-xs-10 col-sm-8 col-xs-offset-1 col-sm-offset-2">
						<div className="row">
							<img src="/images/unicorn profile-transparent.png" alt="Logo" className="img-responsive small-logo"/>
							<h2>The Giveth Solution</h2>
							<div className="col-xs-12 col-md-6">
								<p>Giveth is a new <strong>Ethereum Dapp</strong> developed to transform the incentive structures around donations. At its core, Giveth is a collection of modular smart contracts that can be used to connect Donors and Change Makers.</p>
								<p>The foundational smart contracts are already written and are being tested live on the Ethereum Blockchain. Giveth is leading by example using these <strong>open source smart contracts</strong> to bring complete transparency to the funding of our own platform.</p>
							</div>
							<div className="col-xs-12 col-md-6">
								<p>Using an open source system that enables transparency, accountability, and efficiency. Donors, using the Giveth smart contract framework, can send donations directly to the campaigns (campaigns = causes) that are providing solutions (no middlemen, only Solidity code).</p>
								<p>But these donations will be only be collected by the campaigns upon the completion of pre-arranged milestones creating a <strong>result-focused incentive structure</strong>. Additionally, these campaign’s strategies will be public and the effective campaigns can scale up to be replicated globally.</p>
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
									<p>You have an awesome idea for an awesome cause that will make a difference</p>
								</div>
								<div className="col-xs-3 col-sm-2">
									<img src="/images/301245-200.png" alt="" className="img-responsive"/>
									<p>You create your campaign and set your milestones</p>
								</div>
								<div className="col-xs-3 col-sm-2">
									<img src="/images/244899-200.png" alt="" className="img-responsive"/>
									<p>A like minded community promotes your cause</p>
								</div>
								<div className="col-xs-3 col-sm-2">
									<img src="/images/91306-200.png" alt="" className="img-responsive"/>
									<p>Donors find your awesome cause super special and send funds to your cause</p>
								</div>
								<div className="col-xs-3 col-sm-2">
									<img src="/images/247217-200.png" alt="" className="img-responsive"/>
									<p>Milestones are review as they get completed and funds get released</p>
								</div>
								<div className="col-xs-3 col-sm-2">
									<img src="/images/unicorn profile-transparent.png" alt="" className="img-responsive"/>
									<p>Another successful cause funded and more unicorns are created!</p>
								</div>
							</div>
					</div>
				</div>
				{/* Link to the team's Slack */}
				<div className="row">
					<div className="col-xs-10 col-sm-8 col-xs-offset-1 col-sm-offset-2">
						<div className="col-xs-10">
							<h3>Join the community !</h3>
							<p>We are actively seeking collaborators and like-minded partners to make this vision a reality.</p>
							<p>If you want to work on a versatile smart contract platform empowering people to make a <strong>real change</strong> in this world...</p>
						</div>
						<div className="col-xs-2">
							<a href="http://slack.giveth.io/" target="_blank"><img src="images/Slack-App-Icon.png" alt="Slack" className="slack-icon img-responsive"/></a>
						</div>
					</div>
				</div>
				<div className="row intro">
					<div className="col-xs-10 col-sm-8 col-xs-offset-1 col-sm-offset-2 footer">
						<h3>Want to check out what we are doing these days?</h3>
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
