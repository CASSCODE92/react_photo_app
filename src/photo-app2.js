import React from "react";
import ReactDom from "react-dom";
import './index.css';

class PhotoApp2{

    render(){
        const img = "";
    
    return(

        <div>
        <li><a href = "nav-bar.js">NAVBAR</a></li>
    
        <div>
        <img src = {img}/>
        </div>
    
        <div>
            <h1 className = "name2"></h1>
        </div>
    
    <div className= "images">
    <img src="">
        
    <img src="">

    <img src="">

    <img src="">

    <img src="">

    <img src="">

</div>
</div>
    );
    }
    }
    
    ReactDOM.render(<PhotoApp2 />, document.getElementById("root"));
    
    