import React from "react";
import ReactDom, { render } from "react-dom";
import './index.css';





class PhotoApp1{

render(){
    const img = "doge1.jpg";

return(
    <div>
    <li><a href = "nav-bar.js">NAVBAR</a></li>

    <div>
    <img src = {img}/>
    </div>

    <div>
        <h1 className = "name1">Doge</h1>
    </div>

<div className= "images">
    <img src="doge2.jpg">

    <img src="doge3.jpg">

    <img src="">

    <img src="">

    <img src="">

    <img src="">

</div>

</div>

);
}
}

ReactDOM.render(<PhotoApp1 />, document.getElementById("root"));


