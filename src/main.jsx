import React from "react";
import { render } from "react-dom";
import Routes from "./routes";

render(
    <div className="main">
        <Routes />
    </div>
    ,
    document.getElementById("root")
);
