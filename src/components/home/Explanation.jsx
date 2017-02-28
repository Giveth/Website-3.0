"use strict";

import React, { Component } from "react";

export default class Explanation extends Component {
    render() {
        return (
            <div>
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
            </div>
        );
    }   
}