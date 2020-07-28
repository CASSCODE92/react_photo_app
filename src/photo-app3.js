import React from "react";
import ReactDOM from "react-dom";
import './styles.css';
import './bookmark.js';

class PhotoApp3{

    render(){
        const img = "shark1";

        const bkmk = document.createElement('bkmk');
        bkmk.src= './photo-app3.js';
        document.body.appendChild(bkmk);
    
    return(
        <div>
        <div>
        <li><a href = "nav-bar.js">NAVBAR</a></li>
    
        <div>
        <img src = {img}/>
        </div>
    
        <div>
            <h1 className = "name3">Shark Puppet</h1>
        </div>
    
    <div className= "images"/>
    <img src="shark2.jpg"><button onclick={bkmk}></button></img>
        
    <img src="shark3.jpg"><button onclick={bkmk}></button></img>

    <img src="shark4.jpg"><button onclick={bkmk}></button></img>

    <img src="shark5.jpg"><button onclick={bkmk}></button></img>

    <img src="shark6.jpg"><button onclick={bkmk}></button></img>

    <img src="shark7.jpg"><button onclick={bkmk}></button></img>

</div>
</div>
    
    );
    }
    }
    
    ReactDOM.render(<PhotoApp3 />, document.getElementById("root"));
    
    