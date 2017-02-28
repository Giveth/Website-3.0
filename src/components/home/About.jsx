"use strict";

import React, { Component } from "react";

export default class About extends Component {
    render() {
        return (
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
        );
    }   
}