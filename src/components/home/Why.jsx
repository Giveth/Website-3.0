"use strict";

import React, { Component } from "react";

export default class Why extends Component {
    render() {
        return (
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
        );
    }   
}
