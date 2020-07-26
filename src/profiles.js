import React from "react";
import ReactDom from "react-dom";
import './index.css';
import './photo-app1.js'; 
import './photo-app2.js';
import './photo-app3.js';

ReactDom.render(
    <ul className = "profiles">
                <li className = "Profile1"><a href = "photo-app1.js">Profile 1</a></li>
                <li className = "Profile2"><a href = "photo-app2.js">Profile 2</a></li>
                <li className = "Profile3"><a href = "photo-app3.js">Profile 3</a></li>
                
    </ul>,
    
    document.getElementById("root")
    
    );