/**
 * Main App isComponent which includes navigation and the app content
 */
import React from "react";

import Navigation from "./Navigation";

const navigationButtons = [
    {
        aLink: false, // will it be an <a href> ?
        pathname: "/home",
        title: "Home"
    },
    {
        aLink: true,
        isAnchor: true, // is it an internal page anchor ?
        pathname: "#community",
        title: "Community"
    },
    {
        aLink: true,
        isAnchor: true,
        pathname: "#solution",
        title: "Solution"
    },
    {
        aLink: true,
        pathname: "/dapp",
        title: "Dapp"
    },
    {
        aLink: false,
        pathname: "/campaign",
        title: "Fund a campaign"
    },
    {
        aLink: true,
        pathname: "https://medium.com/giveth",
        title: "Blog"
    },
    {
        aLink: true,
        pathname: "https://slack.giveth.io",
        title: "Join us"
    }
     ]

function App(props) {
    return (
        <container>
            <div className="row">
                <div className="app col-xs-12 col-md-8 col-md-offset-2">
                    <Navigation
                      navigationButtons={ navigationButtons }
                    />
                </div>
                <div className="row">
                    { props.children }
                </div>
            </div>
        </container>
    );
}

export default App;
