'use strict';

var React = require('react');

import { Accordion, AccordionItem } from 'react-sanfona';

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
				<div className="row">
					<div className="col-xs-10 col-sm-8 col-sm-offset-2">
						<h1>Giveth is a smart contract platform that can be used to build communities around the causes you care about. </h1>
						<p>Giveth’s open source software can be integrated into any donation based project.</p>
						<p>Both global charities and small open source development teams alike can use Giveth’s code and culture to bring transparency, accountability and trust to their community of Donors and Change Makers, powered by the Ethereum Blockchain.</p>
						<p>The way donations are handled is ready for a massive evolution. Bitcoin is already a major step forward, allowing money to be sent directly to anyone in the world in a transparent frictionless manner. But Giveth’s Ethereum-based smart contracts take it even further enabling Donors to organize with Change Makers in a decentralized fashion.</p>
						<img src="images/current_charity__2_.png" className="infographic" alt="Current Charity Model"/>
						<h2>The Giveth Solution</h2>
						<ul>
							<li>Align incentives with transparent payments based on results, and a decentralized governance system powered by smart contracts on the Ethereum blockchain.</li>
							<li>Open a communication channel for Donors to interact directly with the Recipients of their donations.</li>
						</ul>
						<img src="images/new-infographic.png" className="infographic" alt="New Infographic"/>
						<p>The Giveth Core Team has been using the Giveth platform to sustain our own development since our inception. We firmly believe using our result-based incentive structure has helped keep us focused on producing results.</p>
						<p>The Results:</p>
						<ul>
							<li><a href="https://github.com/Giveth/minime" target="_blank">MiniMe Token</a></li>
							<li><a href="https://github.com/Giveth/vaultcontract" target="_blank">Vault Contract</a></li>
							<li><a href="https://github.com/Giveth/milestonetracker" target="_blank">Milestone Tracker</a></li>
						</ul>
						<section>
							<h2>The Values that Lead our Design Choices:</h2>
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
			</container>
		);
	}
});

module.exports = Home;