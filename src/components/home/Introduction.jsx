"use strict";

import React, { Component } from "react";

export default class Introduction extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-xs-12 col-md-8 col-md-offset-2">
                    <div className="row">
                        <div className="intro-pic"> {/* URL for main homepage picture is in this class */}
                        </div>
                    </div>
                    <div className="row">
                        <div className="intro-text">
                            <h1>Giveth<span className="io">.io</span></h1>
                            <p>Charitable donation is going through a massive transformation!<br/>
                            Join us in building communities around awesome causes.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }   
}