"use strict";

import React from "react";

export default function Works(props) {
    
    const renderedSteps = [];
    const clearfix = "";
    for (let i = 0; i < props.steps.length; ++i) {
        if ((i + 1) % 3 == 0) {
            clearfix = "<div className=\"clearfix visible-md visible-lg\"></div>";
        } else {
            clearfix = "";
        }
        renderedSteps.push(
            <div className="col-xs-6 col-md-4">
            <img key={ i } src={ props.steps[ i ].img } className="img-responsive"/>
            <p>{ props.steps[ i ].content }</p>
            </div>{ clearfix }
        );
    }

    return (
        <div className="row works grey">
            <div className="col-xs-10 col-sm-8 col-xs-offset-1 col-sm-offset-2">
                <h3>How It Works</h3>
                <div className="row">
                    { renderedSteps }
                </div>
            </div>
        </div>
    );
}