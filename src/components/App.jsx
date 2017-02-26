/**
 * Main App component which includes navigation and the app content
 */
import React from "react";

import Navigation from "./Navigation";

const navigationButtons = [
    {
        pathname: "/",
        title: "Community"
    },
    {
        pathname: "/",
        title: "Solution"
    } ]

function App(props) {
    return (
        <div className="app">
            <Navigation
              navigationButtons={ navigationButtons }
            />

            { props.children }
        </div>
    );
}

export default App;
