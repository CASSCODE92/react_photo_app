import React from "react";
import ReactDom, { render } from "react-dom";
import './styles.css';
import './bookmark.js';




// first profile page"
class PhotoApp1{

render(){

    // profile pic and bookmarks set as constants
    const img = "doge1.jpg";

    const bkmk = document.createElement('bkmk');
        bkmk.src= './bookmark.js';
        document.body.appendChild(bkmk);
return(
    <div>

    <div>
    <li><a href = "nav-bar.js">NAVBAR</a></li>
    </div>

    <div>
    <img src = {img}></img>
    </div>

    <div>
        <h1 className = "name1">Doge</h1>
    </div>

<div className= "images">

    <img src="doge2.jpg"><button onclick={bkmk}></button></img>

    <img src="doge3.jpg"><button onclick={bkmk}></button></img>

    <img src="doge4.jpg"><button onclick={bkmk}></button></img>

    <img src="doge5.jpg"><button onclick={bkmk}></button></img>

    <img src="doge6.jpg"><button onclick={bkmk}></button></img>

    <img src="doge7.jpg"><button onclick={bkmk}></button></img>

</div>
</div>



);
}
}

ReactDOM.render(<PhotoApp1/>, document.getElementById("root"));


