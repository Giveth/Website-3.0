"use strict";

import React, { Component } from "react";

import Introduction from "./Introduction";
import Explanation from "./Explanation";
import About from "./About";
import Why from "./Why";
import Solution from "./Solution";
import Works from "./Works";
import Community from "./Community";
import Social from "./Social";

const steps = [
    {
        img: "/images/353400-200.png",
        content: "You want to make the world a better place in some way, big or small."
    },
    {
        img: "/images/301245-200.png",
        content: "You go to Giveth.io to build or join a Decentralized Charitable Organization (DCO) around this idea."
    },
    {
        img: "/images/244899-200.png",
        content: "Like minded people join your community to donate, contribute and promote your DCO."
    },
    {
        img: "/images/91306-200.png",
        content: "Change Makers come up with solutions to the problems the community is facing and propose milestones."
    },
    {
        img: "/images/247217-200.png",
        content: "Milestones are approved for funding by Donors and funds are released to the Change Makers upon completion."
    },
    {
        img: "/images/unicorn profile-transparent.png",
        content: "Another successful action helps to build a better world full of unicorns and rainbows!"
    },
];

export default class Home extends Component {
    render() {
        return (
            <div>
                {/* Introduction with homepage pic, name and baseline */}
                <Introduction />
                {/* Logo and explanation */}
                <Explanation />
                {/* About Giveth */}
                <About />
                {/* Why Giveth ? */}
                <Why />
                {/* The Giveth Solution */}
                <Solution />
                {/* How it works */}
                <Works
                    steps={ steps }
                />
                {/* Link to the team's Slack */}
                <Community />
                {/* Social links and timelines */}
                <Social />
            </div>
        );
    }
}