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
									<li><a href="/dapp">Dapp</a></li>
									<li><a href="/#campaign">Financer une campagne</a></li>
									<li><a href="https://medium.com/giveth">Blog</a></li>
									<li><a href="http://slack.giveth.io/" className="join">Rejoignez-nous</a></li>
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
							<h3>A propos de Giveth</h3>
							<p>L'Equipe Giveth est un mélange éclectique de passionnés en provenance des mondes Ethereum et ONG. Ils sont focalisés sur la construction d'outils qui rendront facile pour tous de construire une communauté globale autour d'une cause. Cette équipe utilise la Plateforme Giveth pour construire une communauté autour de l'idée même derrière Giveth ! Si vous voulez participer à créer la solution, <a href="http://slack.giveth.io/" target="_blank">rejoignez notre Slack</a>.</p>
						</div>
						<div className="row">
							<div className="col-xs-12 col-md-6 about-text">
								<p>Les Licornes Giveth croient que :</p>
								<ul>
									<li>Donner peut être facile, amusant et efficace.</li>
									<li>La <strong>Transparence</strong> et la <strong>responsabilité</strong> peuvent être la norme.</li>
									<li>Chaque idée a le potentiel d'avoir un impact positif, et peut être entendue et financée de façon décentralisée.</li>
									<li>Chaque Donateur peut avoir le dernier mot sur l'utilisation de son don.</li>
									<li>Ceux qui veulent oeuvrer pour leur cause peuvent être récompensés pour leurs actions.</li>
									<li>Le <strong>véritable changement</strong> et l'<strong>innovation</strong> viennent lorsque les communautés se rassemblent pour créer un monde meilleur.</li>
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
								<h3 className="why">Pourquoi Giveth ?</h3>
							</div>
							<div className="col-xs-12 col-md-7">
								<p>Le monde des dons est en train de lentement intégrer la technologie blockchain et ses transactions sans friction et globales. Mais Giveth <strong>accélère</strong> cette lente intégration, l'amenant au niveau supérieur, en permettant aux Donateurs et aux Créateurs de Changement d'interagir entre eux directement de façon sécurisée et sans tiers de confiance, grâce aux smart contracts, pour former des Organisations Charitables Décentralisées.</p>
								<p>Les OCD de Giveth peuvent gérer la comptabilité, la distribution internationale des fonds, et beaucoup d'autres services qui sont habituellement gérés par les grandes organisations de bienfaisance en raison des économies d'échelle.</p>
								<p>Dans le même temps, ces OCD permettent aux Donateurs et Créateurs de Changement de travailler ensemble pour mettre en place des solutions, en suivant leurs propres structures de gouvernance, afin de donner plus d'impact à leur ensemble unique de ressources.</p>
							</div>
						</div>
					</div>
				</div>
				{/* The Giveth Solution */}
				<div className="row" id="solution">
					<div className="col-xs-10 col-xs-offset-1 col-md-8 col-md-offset-2">
						<div className="row">
							<img src="/images/unicorn profile-transparent.png" alt="Logo" className="img-responsive small-logo"/>
							<h2>La Solution Giveth </h2>
							<div className="col-xs-12 col-md-6">
								<p>Les smart contracts de Giveth permettent aux Donateurs de choisir leur niveau d'engagement. Ils peuvent marquer leur don pour l'envoyer à une catégorie générale (ex: des projets Ethereum) ou directement à leur OCD préférée. Dans tous les cas, les Donateurs seront notifiés quand une partie de leur don sera mise en relation avec un Créateurs de Changement.</p>
								<p>La transparence, la responsabilité, la communication et l'efficacité sont la norme sur la Plateforme Giveth. Les Créateurs de Changement et les Donateurs pourront échanger des idées et montrer leurs progrès sur les plateformes de médias sociaux comme Slack (dans un premier temps), mais lorsque d'autres DApps comme Status.im, Colony, et Akasha seront lancées, elles seront intégrées pour une expérience utlisateur encore plus puissante.</p>
								<p>Giveth est attaché à un processus de développement complètement open source à chaque étape; nous n'aurons jamais de repo Github privée. Nous voulons permettre la création de solutions utlisables et améliorables par <strong>tous</strong>.</p>
							</div>
							<div className="col-xs-12 col-md-6">
								<p>Les Créateurs de Changement seront encouragés à utiliser notre Contrat de Suivi d'Objectif actuel, dans lequel les dons ne sont collectés qu'après atteinte des objectifs pré-définis. Cela crée une <strong>structure d'encouragement basée sur les résultats</strong> qui aligne naturellement les intentions de chacun.</p>
								<p>L'Equipe Giveth a complété la version 0.1 de la <strong><a href="/#dapp">DApp (Donation Application)</a></strong> Giveth en utilisant notre propre système. Cela signifie une complète transparence sur la manière dont les dons envoyés à la Plateforme Giveth sont utilisés.</p>
								<p>Notre DApp actuelle est encore à l'étape de prototype et se concentre sur la distribution des fonds aux Créateurs de Changement. Nous somme actuellement en train de développer la v0.2 qui incluera les tokens ERC 20 et un système de marquage de dons de type démocratie liquide.</p>
							</div>
						</div>
					</div>
				</div>
				{/* How it works */}
				<div className="row works grey">
					<div className="col-xs-10 col-sm-8 col-xs-offset-1 col-sm-offset-2">
						<h3>Le fonctionnement</h3>
						<div className="row">
							<div className="col-xs-6 col-md-4">
								<img src="/images/353400-200.png" alt="" className="img-responsive"/>
								<p>Vous voulez rendre le monde meilleur à votre échelle.</p>
							</div>
							<div className="col-xs-6 col-md-4">
								<img src="/images/301245-200.png" alt="" className="img-responsive"/>
								<p>Vous allez sur Giveth.io pour construire ou rejoindre une Organisation Charitable Décentralisée (OCD) autour de cette idée.</p>
							</div>
							<div className="col-xs-6 col-md-4">
								<img src="/images/244899-200.png" alt="" className="img-responsive"/>
								<p>Des gens avec les mêmes idées rejoignent votre communauté pour donner, contribuer et promouvoir votre OCD.</p>
							</div>
							<div className="clearfix visible-md visible-lg"></div>
							<div className="col-xs-6 col-md-4">
								<img src="/images/91306-200.png" alt="" className="img-responsive"/>
								<p>Des Créateurs de Changement apportent des solutions aux problèmes de la communauté et proposent des objectifs.</p>
							</div>
							<div className="col-xs-6 col-md-4">
								<img src="/images/247217-200.png" alt="" className="img-responsive"/>
								<p>Les objectifs sont approuvés par les Donateurs et le financement est transféré aux Créateurs de Changement une fois qu'ils sont réalisés.</p>
							</div>
							<div className="col-xs-6 col-md-4">
								<img src="/images/unicorn profile-transparent.png" alt="" className="img-responsive"/>
								<p>Une nouvelle action réussie participe à construire un monde meilleur de licornes et d'arcs-en-ciel !</p>
							</div>
						</div>
					</div>
				</div>
				{/* Link to the team's Slack */}
				<div className="row" id="community">
					<div className="col-xs-10 col-xs-offset-1 col-md-8 col-md-offset-2">
						<div className="col-xs-10">
							<h3>Rejoignez la communauté Giveth !</h3>
							<p>Nous cherchons activement des collaborateurs et des partenaires autonomes et partageant nos valeurs pour faire de cette vision une réalité.</p>
							<p>Si vous voulez travailler sur une plateforme polyvalente de smart contracts donnant plus de pouvoir aux gens pour créer un <strong>véritable changement</strong> dans ce monde, <a href="http://slack.giveth.io/" target="_blank">rejoignez notre Slack</a> et dites-nous comment vous pouvez aider. Nous avons un bon financement, alors si vous avez une idée d'objectif qui pourrait améliorer la Plateforme Giveth, proposez-la et rejoignez l'équipe. A bientôt sur Slack.</p>
						</div>
						<div className="col-xs-2">
							<a href="http://slack.giveth.io/" target="_blank"><img src="images/Slack-App-Icon.png" alt="Slack" className="slack-icon img-responsive"/></a>
						</div>
					</div>
				</div>
				<div className="row coloured">
					<div className="col-xs-10 col-xs-offset-1 col-md-8 col-md-offset-2 footer">
					<center>
						<h3>Vous voulez savoir ce qu'on fait en ce moment ?</h3>
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
