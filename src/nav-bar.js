import React from "react";
import ReactDom from "react-dom";
import './index.css';


ReactDom.render(
<ul className = "Navbar">
            <li><a href = "home.js">HOME</a></li>
            <li><a href = "profiles.js">PROFILES</a></li>
            <li><a href = "bookmarks.js">BOOKMARKS</a></li>
            <li><a href = "log_in.js">LOG_IN</a></li>
</ul>,

document.getElementById("root")

);