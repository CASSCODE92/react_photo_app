import React from "react";
import ReactDOM from "react-dom";
import './styles.css';
import './bookmark.js';


class PhotoApp2{

    render(){
        const img = "mayo1.jpg";

        const bkmk = document.createElement('bkmk');
        bkmk.src= './photo-app2.js';
        document.body.appendChild(bkmk);
    
    return(
        <div>

        <div>
        <li><a href = "nav-bar.js">NAVBAR</a></li>
    
        </div>

        <div>
        <img src = {img}/>
        </div>
        
    
        <div>
            <h1 className = "name2">Lil' Mayo</h1>
        </div>
    
    <div className= "images">

    <img src="mayo2.jpg"><button onclick={bkmk}></button></img>
        
    <img src="mayo3.jpg"><button onclick={bkmk}></button></img>

    <img src="mayo4.jpg"><button onclick={bkmk}></button></img>

    <img src="mayo5.jpg"><button onclick={bkmk}></button></img>

    <img src="mayo6.jpg"><button onclick={bkmk}></button></img>

    <img src="mayo7.jpg"><button onclick={bkmk}></button></img>

    </div>

    </div>




    );
    }
    }
    
    ReactDOM.render(<PhotoApp2 />, document.getElementById("root"));

    
    
    