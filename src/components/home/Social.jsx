"use strict";

import React, { Component } from "react";
import { FBPage } from "facebook-plugins";

export default class Social extends Component {
    render() {
        return (
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
                <div className="row timelines">
                    <center>
                        <div id ="facebook" className="col-xs-6 facebook">
                            <FBPage appId="givethio" href="https://www.facebook.com/givethio" width={484} height={600} tabs={[ "timeline", "events", "messages" ]}/>
                        </div>
                    </center>
                    <center>
                        <div id="twitter" className="col-xs-6">
                            <a className="twitter-timeline" href="https://twitter.com/Givethio" data-width={500} data-height={600}>Tweets by Giveth</a>
                        </div>
                    </center>
                </div>
            </div>
        );
    }   
}