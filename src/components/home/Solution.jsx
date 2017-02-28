"use strict";

import React, { Component } from "react";

export default class Solution extends Component {
    render() {
        return (
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
        );
    }   
}