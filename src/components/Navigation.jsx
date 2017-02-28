import React from "react";
import { Navbar, NavItem, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export default function Navigation(props) {
    const buttons = [];
    for (let i = 0; i < props.navigationButtons.length; ++i) {
        // if link is not a React component, render <a> tag
        if (props.navigationButtons[ i ].aLink) {
            // if link is an anchor, don't open in a new tab
            if (props.navigationButtons[ i ].isAnchor) {
                buttons.push(
                <li key={ i }><a href={ props.navigationButtons[ i ].pathname }>{ props.navigationButtons[ i ].title }</a></li>);
            } else {
                buttons.push(
                <li key={ i }><a href={ props.navigationButtons[ i ].pathname } target="_blank">{ props.navigationButtons[ i ].title }</a></li>);
            }
        } else {
        buttons.push(
            <LinkContainer
              key={ i }
              to={ { pathname: props.navigationButtons[ i ].pathname } }
            >
                <NavItem>{ props.navigationButtons[ i ].title }</NavItem>
            </LinkContainer>);
        }
    }

    return (
        <Navbar>
            <Nav>
                { buttons }
            </Nav>
        </Navbar>
    );
}

Navigation.propTypes = {
    navigationButtons: React.PropTypes.array.isRequired,
}
