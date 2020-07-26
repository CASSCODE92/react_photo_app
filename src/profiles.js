import React from "react";
import ReactDom from "react-dom";
import './index.css';
import './photo-app1.js'; 
import './photo-app2.js';
import './photo-app3.js';

ReactDom.render(
    <ul className = "profiles">
                <li className = "Profile1"><a href = "home.js">HOME</a></li>
                <li className = "navList"><a href = "profiles.js">PROFILES</a></li>
                <li className = "navList"><a href = "bookmarks.js">BOOKMARKS</a></li>
                <li className = "navList"><a href = "log_in.js">LOGIN</a></li>
    </ul>,
    
    document.getElementById("root")
    
    );