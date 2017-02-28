"use strict";

import React, { Component } from "react";

export default class Comunity extends Component {
    render() {
        return (
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
        );
    }   
}