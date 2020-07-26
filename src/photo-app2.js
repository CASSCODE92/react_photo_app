import React from "react";
import ReactDom from "react-dom";
import './index.css';

class PhotoApp1 extends React.Component{

    render(){
        const img = "";
    
    return(
        <li><a href = "nav-bar.js">NAVBAR</a></li>
    
        <div>
        <img src = {img}/>
        </div>
    
        <div>
            <h1 className = "name1"></h1>
        </div>
    
    <div>
        <img src="">
    </div>
    
    <div>
        <img src="">
    </div>
    
    <div>
        <img src="">
    </div>
    
    <div>
        <img src="">
    </div>
    
    <div>
        <img src="">
    </div>
    
    );
    }
    }
    
    ReactDOM.render(<PhotoApp1 />, document.getElementById("root"));
    
    