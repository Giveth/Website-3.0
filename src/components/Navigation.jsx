import React from "react";
import { Navbar, NavItem, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export default function Navigation(props) {
    const buttons = [];
    for (let i = 0; i < props.navigationButtons.length; ++i) {
        buttons.push(
            <LinkContainer
              key={ i }
              to={ { pathname: props.navigationButtons[ i ].pathname } }
            >
                <NavItem>{ props.navigationButtons[ i ].title }</NavItem>
            </LinkContainer>);
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
