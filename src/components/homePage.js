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
				{/* Introduction with logo, baseline, infographic and explanation */}
				<div className="row">
					<div className="col-xs-10 col-sm-8 col-xs-offset-1 col-sm-offset-2">
						<div className="row separation intro">
							<div className="col-xs-6 intro-logo">
							</div>
							<div className="col-xs-6">
								<div className="intro-text">
									<h1>Giveth</h1>
									<p>is a smart contract platform that can be used to build<br/><strong>communities</strong> around the <strong>causes</strong> you care about.</p>
								</div>
							</div>
						</div>
						<section className="row">
							<div className="col-xs-5">
								<h4>Giveth’s open source software can be integrated into any donation based project.</h4>
								<p>Both global charities and small open source development teams alike can use Giveth’s code and culture to bring <strong>transparency, accountability and trust</strong> to their community of Donors and Change Makers, powered by the <strong>Ethereum Blockchain</strong>.</p>							
							</div>
							<div className="col-xs-7">
								<img src="images/current_charity__2_.png" className="infographic" alt="Current Charity Model"/>
							</div>
						</section>
						<section>
							<div className="row separation">
								<div className="col-xs-12">
									<p>The way donations are handled is ready for a massive evolution. Bitcoin is already a major step forward, allowing money to be sent directly to anyone in the world in a <strong>transparent frictionless manner</strong>.</p>
									<p>But Giveth’s Ethereum-based smart contracts take it even further enabling Donors to organize with Change Makers in a <strong>decentralized fashion</strong>.</p>
								</div>
							</div>
						</section>
					</div>
				</div>
				{/* Second infographic and explanation */}
				<div className="row separation">
					<div className="col-xs-10 col-sm-8 col-xs-offset-1 col-sm-offset-2">
						<section>
						<div className="col-xs-7">
							{/* To be replaced by new infographic */}
							<img src="images/current_charity__2_.png" className="infographic" alt="Current Charity Model"/>
						</div>
						<div className="col-xs-5">
							<h3>The Giveth Solution</h3>
							<p>Align <strong>incentives</strong> with transparent payments based on results, and a <strong>decentralized governance system</strong> powered by smart contracts on the Ethereum blockchain.</p>
							<p>Open a communication channel for Donors to <strong>interact directly</strong> with the Recipients of their donations.</p>
						</div>
						</section>
					</div>
				</div>
				{/* Link to the team's Slack */}
				<div className="row separation grey">
					<div className="col-xs-10 col-sm-8 col-xs-offset-1 col-sm-offset-2">
						<center>
							<h3>Want to join the unicorns?</h3>
							<a href="http://giveth.slack.com/" target="_blank"><img src="images/Slack-App-Icon.png" alt="Slack" className="slack-icon"/></a>
							<p>Tell us about your project or how you can <strong>contribute</strong> to the Giveth Platform!</p>
						</center>
					</div>
				</div>
				{/* Smart contract presentation */}
				<div className="row">
					<div className="col-xs-10 col-sm-8 col-xs-offset-1 col-sm-offset-2 separation">
						<section>
							<h3>Our Smart Contracts</h3>
							<p>The Giveth Core Team has been using the Giveth platform to sustain our own development since our inception. We firmly believe using our <strong>result-based incentive structure</strong> has helped keep us focused on producing results. The results:</p>
								<div className="row btn-row">
									<center>
										<a href="https://medium.com/giveth/the-minime-token-open-sourced-by-giveth-2710c0210787#.wz704n8wb" target="_blank" className="btn btn-embossed btn-primary"><i className="fa fa-male"></i>    MiniMe Token</a>
										<a href="https://medium.com/giveth/the-vault-contract-open-sourced-by-giveth-fe2261f7b91b#.6se2a6orr" target="_blank" className="btn btn-embossed btn-primary"><i className="fa fa-bank"></i>    Vault Contract</a>
										<a href="https://github.com/Giveth/milestonetracker" target="_blank" className="btn btn-embossed btn-primary"><i className="fa fa-check"></i>    Milestone Tracker</a>
									</center>
								</div>								
						</section>
					</div>
				</div>
				{/* Core values accordion */}
				<div className="row separation">
					<div className="col-xs-10 col-sm-8 col-xs-offset-1 col-sm-offset-2 accordion">
						<section>
							<h3>The Values that Lead our Design Choices:</h3>
							<Accordion>
								{values.map((item) => {
									return (
										<AccordionItem title={`${ item.name }`} slug={item.slug} key={item.key}>
											<div>
												{`${ item.content }`}
											</div>
										</AccordionItem>
									);
								})}
							</Accordion>
						</section>
					</div>
				</div>
				{/* Social media links */}
				<div className="row grey">
					<div className="col-xs-10 col-sm-8 col-xs-offset-1 col-sm-offset-2">
						<section>
							<h3>Want to check out what we are doing these days?</h3>
							<center>
								<li className="social"> 
									<a href="https://www.facebook.com/givethio/" target="_blank"><i className="fa fa-facebook fa-size"></i></a>
									<a href="https://twitter.com/Givethio" target="_blank"><i className="fa fa-twitter fa-size"></i></a> 
									<a href="https://github.com/Giveth" target="_blank"><i className="fa fa-github fa-size"></i></a>
									<a href="https://medium.com/giveth" target="_blank"><i className="fa fa-medium fa-size"></i></a>
									<a href="http://giveth.slack.com/" target="_blank"><i className="fa fa-slack fa-size"></i></a>
								</li>
							</center>
						</section>
					</div>
				</div>
			</container>
		);
	}
});

module.exports = Home;