import React from "react";
import ReactDom from "react-dom";
import './index.css';

class PhotoApp2{

    render(){
        const img = "mayo1.jpg";
    
    return(

        <div>
        <li><a href = "nav-bar.js">NAVBAR</a></li>
    
        <div>
        <img src = {img}/>
        </div>
    
        <div>
            <h1 className = "name2">Lil' Mayo</h1>
        </div>
    
    <div className= "images">
    <img src="mayo2.jpg">
        
    <img src="mayo3.jpg">

    <img src="mayo4.jpg">

    <img src="mayo5.jpg">

    <img src="">

    <img src="">

</div>
</div>
    );
    }
    }
    
    ReactDOM.render(<PhotoApp2 />, document.getElementById("root"));
    
    