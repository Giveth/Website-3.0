'use strict';

var React = require('react');

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
									<li><a href="/#community">Communauté</a></li>
									<li><a href="/#solution">Solution</a></li>
									<li><a href="/#dapp">Dapp</a></li>
									<li><a href="/#campaign">Financer à une campagne</a></li>
									<li><a href="https://medium.com/giveth">Blog</a></li>
									<li><a href="http://giveth.slack.com/" className="join">Rejoignez-nous</a></li>
									<li><a href="/"><img className="flag float-right" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAEmUlEQVRoQ+2Z/WtbVRjHvzdvy8ua2xhsXbpua9qta7fUjTErG8s2UDbG5j+wKoLIijpfWltFZDqVaTciY0MdiAjdGAxExoov+JMr7BcruCVUT2itlKkwa91N0uamN2munHtyb9PYxR9yUr3QB0ry3HvO9zmf85ybc55bASY3weTjxwrAf53BlQz8HzJgBbAKAP00k80DmKNLyHf48Ht/VXvknwij3EPUD128jwJsOHTo3V/27m1Hf/9jOH36mhGIp38ME1wB5Os3sObLz5ooQOvBg6dIONwGSZrVgqjqQiyBtqB/KrtuEbSvZY220/oVjPon2m3/DlDacakeqgrB40buxzhqT/Zv1gAOHHiH7N69ABCJPI6ensHCIARQv7f3oj4cRCJPoLdnkMEKwPvU1+6rGpzuM48ZvcbbBEFgAI8+8jbpfHgjEgmZTfUiK0y/dq34e7Ffer1YgKXi3LkneY8fBsD+/W+RnTuDGBg4iu7uj41AFy48zc2PhP3cAASXE7nJ2xBf6mYZ2LfvTbJt2wYkEmluQUqFBnCTm7ZF9EK5GUXg228YwJ49J8jWrY1IJukSAi5dOo6urvNGQM0/ep6toOL7dLUJ92hf1J/2OSsQfgDeGiijcay5fpUB7Nr1Otm0KYBUigFUw658yPEhtlgAJQtbwwMMoLPzNRIM1uHy5Rdw5MiAMf6hoVe4+VSLtxkP8Y4dr5LGRj9mZjK8Yxh6X33UxU+bZiCbhX1zC8vA9u39pK5ORDo9pwUZHj6JcPgNI2ClPhW6ghFuAILbhfwff6Lhh2EGEAq9TGprPZBlhVuQUqGrGOamTX9G1UQSa6MjDKCtrYd43Ksw8v0phDr6WCAViMXOoCPUZ+xf0dgZ7b6+bcWiBb/waxSlfqiP7eAqYLRXgRvH2rkBwGYFsjl4n3+KAbS2vkjU4gMQv1CGUjx+lruq8RA3Nx8n2Sw9XjObnPwA69c/y83XNXkTGABNTc+Rqakkb/1FeuMPsZMuL7PUelH3+adsCTU2PkOmp1OYnR2Ex7Ow4fD0R/EFr7FrOla/H+tujzGAQKCb3L07wzVAqdjYOr4FjSB60fDd1wxgfn6eWOjmYCLL5/OwWq0MIJfLEavVXDX9IoAJfyuxKVmoStYUORAcduQcdgSn4ywDP4stxJbPQ80oxpF5UWGm71zlXoMVF3JLtStsdvom+Y+Xmvp9XWep4q+wwWoAdiuapXEGMF4TJHZVhTqnLF1R6nkpDVIuX/eqMosnoxSqWK9MJSs4HcgKAlpSEwxAlmXidDpNsXz0QWYyGbhcLgaQTqeJy+UyFYAsy3C73QzgJ8da4nY4oKarV5HxnB16nE4rCtqUXxnAqL2BrHY6oc5Wr6jnCuBxYyaTwZbsbwUAW4CsdrnMBSDL2JL7nQEkEgni9Xp5TlLVtZLJJERRZACSJBFRFKselGcASZLg8/kYwC1LPfHVmCsDUiqJjvwdDaDllqV+jOfsLJfWg/k7GylAPYAQgPuXKzCnOFMAYhSA/nuppvDJSXtZZOg7oFS549myjKLSICsAlc5gpf1XMlDpDFba3/QZ+Bux0t5Il03uIQAAAABJRU5ErkJggg==" alt="French flag"/></a></li>
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
								<p>Le monde des dons est en pleine transformation !<br/>
								Rejoignez-nous pour construire des communautés autour de causes importantes.</p>
							</div>
						</div>
					</div>
				</div>
				{/* Logo and explanation */}
				<div className="row coloured">
					<div className="col-xs-10 col-sm-8 col-xs-offset-1 col-sm-offset-2">
						<p className="baseline">La Plateforme Giveth est une rΞvolution dans le monde des dons, elle construit et donne du pouvoir aux communautés, et leur donne de nouveaux moyens d'obtenir des résultats !</p>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-10 col-xs-offset-1 col-md-8 col-md-offset-2">
						<div className="row">
							<div className="col-xs-12 col-md-6 logo">					
							</div>
							<div className="col-xs-12 col-md-6 explanation-paragraph">
								<div className="ep1">
									<p>Les nouvelles technologies nous permettent de repenser la distribution des dons de bienfaisance en réduisant les coûts de transaction et bien plus encore.</p>
									<p>Le système traditionnel de charité a connu une évolution lente. Il n'est plus en phase avec le présent. Trop souvent, il propose des solutions génériques à court-terme qui ne parviennent pas à résoudre les problèmes à la racine.</p>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-xs-12 col-md-6 explanation-paragraph">
								<p>La communauté Giveth est en train de construire un nouveau système, utilisant les smart contracts Ethereum pour changer radicalement la perception de la façon dont les dons peuvent et devraient fonctionner. Au lieu d'une organisation centralisée collectant l'argent des donateurs et payant des gens pour réaliser des changements, la Plateforme Giveth permet aux Donateurs de se connecter directement aux Créateurs de Changement sur le terrain, dans un système où la <strong>responsabilité</strong> et la <strong>transparence</strong> sont la norme.</p>
							</div>
							<div className="col-xs-12 col-md-6 explanation-paragraph">
								<p>Nous espérons que cette décentralisation encouragera l'émergence de solutions créatives locales aux problèmes globaux. Les méthodes qui fonctionnent pour un groupe peuvent se répandre de façon virale au sein d'une cause en particulier. Du fait de la nature open source de ce système, les solutions qui fonctionnent peuvent s'adapter à toutes les échelles de causes. Si une ONG pour les chats construit une bonne structure de gouvernance, une ONG d'aide aux sans-abri peut facilement l'utiliser pour ses propres besoins. C'est le <strong>Don 3.0</strong>.</p>
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
								<p>The charitable system is slowly evolving and starting to integrate blockchain technology for its frictionless, global, transparent transactions. But Giveth is <strong>leap frogging</strong> this slow integration, taking it to the next level, enabling Donors and Change Makers to interact with each other directly in a safe, trustless manner using a foundation of smart contracts to form Decentralized Charitable Organizations.</p>
								<p>Giveth's DCOs accounting, international fund distribution, and many other services that are usually done by large charities because of economies of scale.</p>
								<p>At the same time, these DCOs also enable Donors and Change Makers to work together to crowdsource powerful solutions under their own unique governance and incentive structures to bring more impact for their unique set of resources.</p>
							</div>
						</div>
					</div>
				</div>
				{/* The Giveth Solution */}
				<div className="row">
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
								<p>The Giveth core team has completed v0.1 of Giveth's <strong><a href="/#dapp">DApp (Donation Application)</a></strong> using our own system.  This means there is complete transparency on how the donations sent to the Giveth Platform have been used. #dogfooding</p>
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
				<div className="row">
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
				</div>
			</container>
		);
	}
});

module.exports = Home;
