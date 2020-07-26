import React from "react";
import ReactDom from "react-dom";
import './index.css';

class PhotoApp3{

    render(){
        const img = "shark1";
    
    return(
        <div>
        <li><a href = "nav-bar.js">NAVBAR</a></li>
    
        <div>
        <img src = {img}/>
        </div>
    
        <div>
            <h1 className = "name3">Shark Puppet</h1>
        </div>
    
    <div className= "images">
    <img src="shark2.jpg">
        
    <img src="shark3.jpg">

    <img src="shark4.jpg">

    <img src="shark5.jpg">

    <img src="shark6.jpg">

    <img src="shark7.jpg">

</div>
</div>
    
    );
    }
    }
    
    ReactDOM.render(<PhotoApp3 />, document.getElementById("root"));
    
    