import React from "react";
import ReactDom from "react-dom";
import './index.css';


ReactDom.render(
<ul className = "navBar">
            <li className = "navList"><a href = "home.js">HOME</a></li>
            <li className = "navList"><a href = "profiles.js">PROFILES</a></li>
            <li><a href = "bookmarks.js">BOOKMARKS</a></li>
            <li><a href = "log_in.js">LOGIN</a></li>
</ul>,

document.getElementById("root")

);